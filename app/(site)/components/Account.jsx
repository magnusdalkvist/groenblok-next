"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginForm({ session }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

  // for the `session` to be available on first SSR render, it must be
  // fetched in a Server Component and passed down as a prop
  return (
    session && (
      <div className="flex items-center justify-center flex-1 p-8">
        <div className="p-8 flex flex-col items-start gap-4 bg-darkGreen text-lightBeige rounded">
          <h3>Hej {session.user.email},</h3>
          <p>Velkommen til</p>
          <button className="hover:text-orangeAccent hover:underline" onClick={handleSignOut}>
            Log ud
          </button>
        </div>
      </div>
    )
  );
}
