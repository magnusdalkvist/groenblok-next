// sender tilmelding til vores database
export function insertEventSignUp(payload) {
  const accessKey = process.env.SUPABASE_ACCESS_KEY;
  console.log(payload);

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

  fetch("https://xdomqqucpwgndmwosmid.supabase.co/rest/v1/Events", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

// sender tilmelding til vores database
export function insertProjectSignUp(payload) {
  const accessKey = process.env.SUPABASE_ACCESS_KEY;
  console.log(payload);

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

  fetch("https://xdomqqucpwgndmwosmid.supabase.co/rest/v1/Projekter", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
