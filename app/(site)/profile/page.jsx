import { Card, Typography, Space } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

export default function Profile({ user }) {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      // Redirect to the home page or perform any other actions after successful sign-out
      window.location.href = "/";
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Typography.Text>You're signed in</Typography.Text>
          <Typography.Text strong>Email: {user.email}</Typography.Text>
          <button onClick={handleSignOut}>Log out</button>
        </Space>
      </Card>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    // If no user, redirect to index.
    return { redirect: { destination: "/", permanent: false } };
  }

  // If there is a user, return it.
  return { props: { user } };
}
