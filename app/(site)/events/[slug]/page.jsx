import { notFound } from "next/navigation";
import { getEvent } from "../../../../sanity/fragments/sanity-utils";
import RenderPortableText from "../../components/RenderPortableText";
import SignUpForm from "../../components/SignUpForm";

export default async function Event({ params, searchParams }) {
  const event = await getEvent(params.slug);
  const slugName = event.slug.current;

  if (!event) {
    notFound();
  }

  const { results } = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.location.lat || ""},${
      event.location.lng || ""
    }&key=${process.env.GOOGLE_MAPS_API_KEY}`
  ).then((res) => res.json());

  //results[0].adress_components take all long_name and put them in a string with + between each word
  const fullAddress = results[0]?.address_components.map((address) => address.long_name).join("+");

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-orangeAccent flex flex-wrap gap-x-2 pt-4 pb-0 md:pb-4">
        {event.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-[75px]">
        <div>
          <h1 className="text-darkGreen font-bold">{event?.title}</h1>
          <h3 className="text-orangeAccent font-bold">
            {new Date(event?.date).toLocaleString("da-dk", {
              day: "2-digit",
              month: "2-digit",
            })}
          </h3>
          {event?.content && <RenderPortableText content={event?.content} />}
        </div>
        <div className="flex flex-col gap-4 md:gap-[50px]">
          <SignUpForm type="event" slugName={slugName}></SignUpForm>
          <iframe
            width="auto"
            height="auto"
            loading="lazy"
            className="w-full aspect-[4/3]"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${fullAddress}`}
          />
        </div>
      </div>
    </div>
  );
}
