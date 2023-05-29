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
  const fullAddress = results[0].address_components.map((address) => address.long_name).join("+");

  console.log(fullAddress);
  return (
    <div className="grid grid-cols-2 gap-[50px]">
      <div>
        <h1>{event?.title}</h1>
        <RenderPortableText content={event?.content} />
      </div>
      <div className="flex flex-col gap-[50px]">
        <form action="" className="flex flex-col bg-darkGreen p-8 gap-4 items-end">
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
          <input className="bg-orangeAccent" type="submit" value="Tilmeld" />
        </form>
        <iframe
          width="auto"
          height="auto"
          loading="lazy"
          className="w-full h-full min-h-[400px]"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=${fullAddress}`}
        />
      </div>
    </div>
  );
}
