"use client";
import { notFound } from "next/navigation";
import { getProject } from "../../../../sanity/fragments/sanity-utils";
import RenderPortableText from "../../components/RenderPortableText";
import { useRef, useState, useEffect } from "react";
import { insertProjectSignUp } from "../../../db.jsx";

const Project = ({ params, searchParams }) => {
  const theForm = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [project, setProject] = useState(null);
  const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const project = await getProject(params.slug);
      if (!project) {
        notFound();
      } else {
        setProject(project);
      }
    };

    fetchData();
  }, [params.slug]);

  useEffect(() => {
    const fetchGeolocationData = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${project.location.lat || ""},${
          project.location.lng || ""
        }&key=${process.env.GOOGLE_MAPS_API_KEY}`
      );

      const { results } = await response.json();
      const address = results[0]?.address_components.map((address) => address.long_name).join("+");

      setFullAddress(address);
    };

    if (project) {
      fetchGeolocationData();
    }
  }, [project]);

  const submit = async (e) => {
    e.preventDefault();

    const firstNameInput = theForm.current.elements.firstName;
    const lastNameInput = theForm.current.elements.lastName;
    const emailInput = theForm.current.elements.email;

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();

    let isValid = true;

    if (firstName === "") {
      firstNameInput.style.border = "2px solid red";
      isValid = false;
    } else {
      firstNameInput.style.border = "none";
    }

    if (lastName === "") {
      lastNameInput.style.border = "2px solid red";
      isValid = false;
    } else {
      lastNameInput.style.border = "none";
    }

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailInput.style.border = "2px solid red";
      isValid = false;
    } else {
      emailInput.style.border = "none";
    }

    if (!isValid) {
      // Handle validation errors, e.g., display an error message
      return;
    }

    try {
      await insertProjectSignUp({
        firstname: firstName,
        lastname: lastName,
        email: email,
        projekt: project.slug.current,
      });

      setShowThankYou(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (!project) {
    return null; // You can return some loading indicator or fallback UI here
  }

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
          <form action="" ref={theForm} onSubmit={submit} className="bg-darkGreen rounded p-8">
            {showThankYou ? (
              <>
                <h3 className="text-orangeAccent w-full text-center font-bold">
                  Tak for din ansøgning
                </h3>
                <p className="text-lightBeige p-4">
                  Du vil få en bekræftelse på mail. Her kan du også se flere oplysninger.
                </p>
                <p className="text-lightBeige p-4">Vi glæder os til at se dig</p>
              </>
            ) : (
              <>
                <h3 className="w-full text-center text-orangeAccent font-bold">Ansøg</h3>
                <div className="max-w-[300px] flex flex-col mx-auto gap-4 items-end">
                  <label className="text-yellowAccent w-full flex flex-col">
                    Fornavn
                    <input
                      className="bg-lightBeige text-darkGreen px-2"
                      name="firstName"
                      id="firstName"
                      type="text"
                    />
                  </label>
                  <label className="text-yellowAccent w-full flex flex-col">
                    Efternavn
                    <input
                      className="bg-lightBeige text-darkGreen px-2"
                      name="lastName"
                      id="lastName"
                      type="text"
                    />
                  </label>
                  <label className="text-yellowAccent w-full flex flex-col">
                    Email
                    <input
                      className="bg-lightBeige text-darkGreen px-2"
                      name="email"
                      id="email"
                      type="text"
                    />
                  </label>
                  <input
                    className="bg-orangeAccent cursor-pointer px-8 py-2"
                    type="submit"
                    value="ANSØG NU"
                  />
                </div>
              </>
            )}
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
};
export default Project;
