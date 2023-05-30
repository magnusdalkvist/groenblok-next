import { notFound } from "next/navigation";
import Link from "next/link";
import { getEvent } from "../../../../sanity/fragments/sanity-utils";
import RenderPortableText from "../../components/RenderPortableText";

export default async function Event({ params, searchParams }) {
  const event = await getEvent(params.slug);

  if (!event) {
    notFound();
  }

  const { results } = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.location.lat},${event.location.lng}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  ).then((res) => res.json());

  //results[0].adress_components take all long_name and put them in a string with + between each word
  const fullAddress = results[0]?.address_components.map((address) => address.long_name).join("+");

  console.log(event.content[3]);
  return (
    <div className="mt-[140px] max-w-[1600px] mx-auto px-10">
      <div className="text-orangeAccent flex gap-2">
        {event.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[75px]">
        <div>
          <h1 className="text-darkGreen font-bold">{event?.title}</h1>
          <h3 className="text-orangeAccent font-bold">
            {new Date(event?.date).toLocaleString("da-dk", {
              day: "2-digit",
              month: "2-digit",
            })}
          </h3>
          <RenderPortableText content={event?.content} />
        </div>
        <div className="flex flex-col gap-[50px]">
          <form action="" className="bg-darkGreen rounded p-8">
            <h3 className="w-full text-center text-orangeAccent font-bold">Tilmelding til event</h3>
            <div className="max-w-[300px] flex flex-col mx-auto gap-4 items-end">
              <label className="text-yellowAccent w-full flex flex-col">
                Fornavn
                <input className="bg-lightBeige" name="firstName" type="text" />
              </label>
              <label className="text-yellowAccent w-full flex flex-col">
                Efternavn
                <input className="bg-lightBeige" name="lastName" type="text" />
              </label>
              <label className="text-yellowAccent w-full flex flex-col">
                Email
                <input className="bg-lightBeige" name="email" type="text" />
              </label>
              <input
                className="bg-orangeAccent cursor-pointer px-8 py-2"
                type="submit"
                value="Tilmeld"
              />
            </div>
          </form>
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
