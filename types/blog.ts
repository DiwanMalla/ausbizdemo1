/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FeaturedImageSize {
  sourceUrl: string;
  height: number | null;
  width: number | null;
}

export interface FeaturedImageNode {
  mediaDetails: {
    file: string;
    sizes: FeaturedImageSize[];
  };
}

export interface BlogPost {
  categories: any;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  featuredImage?: {
    node: FeaturedImageNode;
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
}

export interface BlogPostsResponse {
  nodes: BlogPost[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
  };
}

export interface BlogCategoriesResponse {
  nodes: BlogCategory[];
}
