import graphqlRequest from "./graphqlRequest";
import { BlogPostsResponse, BlogCategoriesResponse } from "@/types/blog";

interface GraphQLResponse {
  data: {
    posts: BlogPostsResponse;
    categories: BlogCategoriesResponse;
  };
}

const getAllPosts = async (): Promise<BlogPostsResponse> => {
  const query = {
    query: `
      query NewQuery {
        posts {
          nodes {
            title
            date
            slug
            excerpt
            featuredImage {
              node {
                mediaDetails {
                  file
                  sizes {
                    sourceUrl
                    height
                    width
                  }
                }
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
            startCursor
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    `,
  };

  const resJson: GraphQLResponse = await graphqlRequest(query);

  // Return the posts
  return resJson.data.posts;
};

export default getAllPosts;
