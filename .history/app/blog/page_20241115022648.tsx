import { gql, wpApolloClient } from "@/utils/ApolloClient";

const GET_PAGE_CONTENT = gql`
  query NewQuery {
    post(id: "/hello-world", idType: SLUG) {
      siteContent {
        title
      }
    }
  }
`;

export default async function page() {
  const data = await wpApolloClient.query({
    query: GET_PAGE_CONTENT,
  });

  const { post } = data.data;

  return (
    <main>
      <h1 style={{ fontSize: "60px" }}>{post.siteContent.title}</h1>
    </main>
  );
}
