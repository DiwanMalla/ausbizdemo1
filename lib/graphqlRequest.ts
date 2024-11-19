const graphqlRequest = async (query: { query: string }) => {
  const response = await fetch(process.env.GRAPHQL_API_ENDPOINT as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GRAPHQL_API_TOKEN}`,
    },
    body: JSON.stringify(query),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data from GraphQL API");
  }

  return response.json();
};

export default graphqlRequest;
