import { gql, wpApolloClient } from "../../utils/ApolloClient";

const GET_PAGE_CONTENT = gql`
  query NewQuery {
    post(id: "/hello-world", idType: SLUG) {
      title
      content
      slug
      date
    }
  }
`;

export default async function Page() {
  const data = await wpApolloClient.query({
    query: GET_PAGE_CONTENT,
  });

  const { post } = data.data;

  return (
    <main>
      <h1 style={{ fontSize: "60px" }}>{post}</h1>
      <p>{post.content}</p>
      <p>Slug: {post.slug}</p>
      <p>Date Published: {new Date(post.date).toLocaleDateString()}</p>
    </main>
  );
}
