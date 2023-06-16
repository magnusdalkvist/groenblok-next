// sender tilmelding til vores database
export function insertSignUp(payload) {
  const accessKey = process.env.SUPABASE_ACCESS_KEY;
  console.log(payload);

  let fetchUrl = "https://xdomqqucpwgndmwosmid.supabase.co/rest/v1/Events";

  if ("projekt" in payload) {
    fetchUrl = "https://xdomqqucpwgndmwosmid.supabase.co/rest/v1/Projekter";
  }

  const options = {
    method: "POST",
    headers: {
      apikey: accessKey,
      Authorization: `Bearer ${accessKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  };

  fetch(fetchUrl, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
