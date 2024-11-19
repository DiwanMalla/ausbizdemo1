"use client";
// app/blog/layout.tsx

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
