export default async function handler(req, res) {
  const graphqlEndpoint = process.env.WP_GRAPHQL_URL;

  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.text(); // Use `.text()` to check if it's returning HTML
  try {
    const json = JSON.parse(data);
    res.status(200).json(json);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(500).json({ error: "Invalid JSON response", details: data });
  }
}
