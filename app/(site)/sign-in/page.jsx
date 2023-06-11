"use client";
import useSWR from "swr";
import { Auth, Card, Typography, Space } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fetcher = ([url, token]) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Page = () => {
  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(
    session ? ["/api/getUser.js", session.access_token] : null,
    fetcher
  );
  const [authView, setAuthView] = useState("sign_in");
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY") setAuthView("update_password");
      if (event === "USER_UPDATED") setTimeout(() => setAuthView("sign_in"), 1000);
      // Send session to /api/auth route to set the auth cookie.
      // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
      fetch("/api/auth.js", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({ event, session }),
      }).then((res) => res.json());
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const View = () => {
    if (!user)
      return (
        <Space direction="vertical" size={8}>
          <div>
            {/* <img src="https://app.supabase.io/img/supabase-dark.svg" width="96" /> */}
            <Typography.Title level={3}>Log ind på Grøn Blok</Typography.Title>
          </div>
          <Auth
            supabaseClient={supabase}
            providers={["google", "apple", "facebook"]}
            view={authView}
            socialLayout="horizontal"
            redirectTo="/profile"
            // socialButtonSize="medium"
          />
        </Space>
      );
    router.push("/profile");
  };

  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <View />
      </Card>
    </div>
  );
};

export default Page;
