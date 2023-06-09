"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getEvent } from "../../../../sanity/fragments/sanity-utils";
import RenderPortableText from "../../components/RenderPortableText";
import { useRef } from "react";

export default async function Event({ params, searchParams }) {
  const event = await getEvent(params.slug);
  const theForm = useRef(null);

  console.log(event);

  if (!event) {
    notFound();
  }

  function submit(e) {
    // forhindre DOM'en i at genindlæses når der er klikket på submit
    e.preventDefault();

    // klader funktionen insertOrder() med køber-information som parameter
    insertSignUp({
      firstname: theForm.current.elements.firstName.value,
      lastname: theForm.current.elements.lastName.value,
      email: theForm.current.elements.email.value,
      event: params.slug.value,
    });
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
          <form action="" ref={theForm} className="bg-darkGreen rounded p-8" onSubmit={submit}>
            <h3 className="w-full text-center text-orangeAccent font-bold">Tilmeld</h3>
            <div className="max-w-[300px] flex flex-col mx-auto gap-4 items-end">
              <label className="text-yellowAccent w-full flex flex-col">
                Fornavn
                <input className="bg-lightBeige" name="firstName" id="firstName" type="text" />
              </label>
              <label className="text-yellowAccent w-full flex flex-col">
                Efternavn
                <input className="bg-lightBeige" name="lastName" id="lastName" type="text" />
              </label>
              <label className="text-yellowAccent w-full flex flex-col">
                Email
                <input className="bg-lightBeige" name="email" id="email" type="text" />
              </label>
              <input
                className="bg-orangeAccent cursor-pointer px-8 py-2"
                type="submit"
                value="TILMELD NU"
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
