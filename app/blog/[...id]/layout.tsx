"use client";

// app/blog/layout.tsx

export default function BlogSingleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
