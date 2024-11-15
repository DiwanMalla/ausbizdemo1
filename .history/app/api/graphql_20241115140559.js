// pages/api/graphql.js

export default async function handler(req, res) {
  const graphqlEndpoint = process.env.WP_GRAPHQL_URL; // Retrieve the URL from environment variables

  try {
    // Send the request to the WordPress GraphQL endpoint
    const response = await fetch(graphqlEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body), // Forward the body from the client-side request
    });

    const data = await response.text(); // Get the response text to handle possible HTML errors

    // Try parsing the response as JSON
    try {
      const json = JSON.parse(data); // If it's valid JSON, return the data
      res.status(200).json(json);
    } catch (error) {
      // If parsing fails, log the error and return a failure response
      console.error("Error parsing JSON:", error);
      res
        .status(500)
        .json({
          error: "Invalid JSON response from WordPress GraphQL",
          details: data,
        });
    }
  } catch (error) {
    // Catch any network or other errors and return a 500 error with the details
    console.error("Error fetching from GraphQL:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from WordPress GraphQL endpoint" });
  }
}
