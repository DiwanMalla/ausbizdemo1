const graphqlRequest = async (query: { query: string }) => {
  const url = process.env.WP_GRAPHQL_URL;
  if (!url) {
    throw new Error(
      "WP_GRAPHQL_URL is not defined in the environment variables"
    );
  }
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });
  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.statusText}`);
  }

  return await res.json(); // Parse JSON response
};

export default graphqlRequest;
