"use client";
import React from "react";
import { useRef, useState } from "react";
import { insertSignUp } from "../../db.jsx";

function TilmeldingsForm(props) {
  const theForm = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);

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
      const signUpParams = {
        firstname: firstName,
        lastname: lastName,
        email: email,
      };

      if (props.type === "projekt") {
        signUpParams.projekt = props.slugName;
      } else if (props.type === "event") {
        signUpParams.event = props.slugName;
      }

      insertSignUp(signUpParams);

      setShowThankYou(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form action="" ref={theForm} onSubmit={submit} className="bg-darkGreen rounded p-8">
        {showThankYou ? (
          <>
            <h3 className="text-orangeAccent w-full text-center font-bold">
              {props.type === "event" ? "Tak for din tilmelding" : "Tak for din ansøgning"}
            </h3>

            <p className="text-lightBeige p-4">Vi glæder os til at se dig</p>
          </>
        ) : (
          <>
            <h3 className="w-full text-center text-orangeAccent font-bold">
              {props.type === "event" ? "Tilmelding" : "Ansøg"}
            </h3>
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
                value={props.type === "event" ? "TILMELD" : "ANSØG NU"}
              />
            </div>
          </>
        )}
      </form>
    </>
  );
}

export default TilmeldingsForm;
