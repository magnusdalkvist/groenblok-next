"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupForm({ session }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const supabase = createClientComponentClient();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await supabase.auth.signUp({
      firstName,
      lastName,
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setIsSubmitted(true);
  };

  console.log(session);

  // for the `session` to be available on first SSR render, it must be
  // fetched in a Server Component and passed down as a prop
  return isSubmitted ? (
    <div className="bg-darkGreen rounded text-lightBeige flex flex-col justify-center items-center">
      <h3>Tak for din tilmelding</h3>
      <p>En bekræftelsesmail er blevet sendt til dig</p>
    </div>
  ) : session ? (
    <div className="bg-darkGreen rounded text-lightBeige flex justify-center items-center">
      <h3>Du er allerede medlem</h3>
    </div>
  ) : (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <label htmlFor="firstName" className="flex flex-col ">
          Fornavn
          <input
            required
            className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </label>
        <label htmlFor="lastName" className="flex flex-col ">
          Efternavn
          <input
            required
            className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </label>
      </div>
      <label htmlFor="email" className="flex flex-col">
        Email
        <input
          required
          className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
          type="email"
          name="email"
          id="email"
          placeholder="john@doe.dk"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label htmlFor="password" className="flex flex-col">
        Adgangskode
        <input
          required
          className="bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <div>
        <label htmlFor="message" className="flex flex-col flex-1">
          Hvad er dine mærkesager?
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <textarea
              name="message"
              id="message"
              rows={5}
              className="w-full sm:w-auto bg-transparent border border-darkGreen rounded px-2 placeholder-darkGreen flex-1"
              placeholder="Valgfrit"
            />
            <input
              type="submit"
              value={"BLIV MEDLEM"}
              className="bg-darkGreen text-lightBeige rounded py-2 px-6"
            />
          </div>
        </label>
      </div>
    </form>
  );
}
