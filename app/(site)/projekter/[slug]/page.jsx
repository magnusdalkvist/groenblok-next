import { notFound } from "next/navigation";
import { getProject } from "../../../../sanity/fragments/sanity-utils";
import RenderPortableText from "../../components/RenderPortableText";
import { insertProjectSignUp } from "../../../db.jsx";
import SignUpForm from "../../components/SignUpForm";

export default async function Project({ params, searchParams }) {
  const project = await getProject(params.slug);
  const slugName = project.slug.current;

  if (!project) {
    notFound();
  }

  function submit(e) {
    // forhindre DOM'en i at genindlæses når der er klikket på submit
    e.preventDefault();

    // kalder funktionen insertEventSignUp() med information som parameter
    insertProjectSignUp({
      firstname: theForm.current.elements.firstName.value,
      lastname: theForm.current.elements.lastName.value,
      email: theForm.current.elements.email.value,
      projekt: project.slug.current,
    });
  }

  const { results } = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${project.location.lat || ""},${
      project.location.lng || ""
    }&key=${process.env.GOOGLE_MAPS_API_KEY}`
  ).then((res) => res.json());

  //results[0].adress_components take all long_name and put them in a string with + between each word
  const fullAddress = results[0]?.address_components.map((address) => address.long_name).join("+");

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-orangeAccent flex flex-wrap gap-x-2 pt-4 pb-0 md:pb-4">
        {project.tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-[75px]">
        <div>
          <h1 className="text-darkGreen font-bold">{project?.title}</h1>
          <h3 className="text-orangeAccent font-bold">
            {new Date(project?.date).toLocaleString("da-dk", {
              day: "2-digit",
              month: "2-digit",
            })}
          </h3>
          {project?.content && <RenderPortableText content={project?.content} />}
        </div>
        <div className="flex flex-col gap-4 md:gap-[50px]">
          <SignUpForm type="projekt" slugName={slugName}></SignUpForm>
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
