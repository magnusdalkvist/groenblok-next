"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginForm({ session }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
    router.push("/konto");
  };

  useEffect(() => {
    if (session) {
      router.push("/konto");
    }
  }, [session]);

  // for the `session` to be available on first SSR render, it must be
  // fetched in a Server Component and passed down as a prop
  return (
    !session && (
      <div className="flex items-center justify-center flex-1 p-8">
        <div className="p-8 flex flex-col items-start gap-4 bg-darkGreen text-lightBeige rounded">
          <h3 className="text-orangeAccent">Log ind</h3>
          <label htmlFor="email" className="flex flex-col text-yellowAccent">
            Email
            <input
              className="text-darkGreen px-2"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label htmlFor="password" className="flex flex-col text-yellowAccent">
            Adgangskode
            <input
              className="text-darkGreen px-2"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button
            className="bg-orangeAccent text-darkGreen cursor-pointer px-8 py-2"
            onClick={handleSignIn}
          >
            Log ind
          </button>
          <a href="/bliv-medlem" className="hover:text-orangeAccent hover:underline">
            Ikke medlem?
          </a>
        </div>
      </div>
    )
  );
}
