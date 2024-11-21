// app/api/auth/error/page.tsx

// You can access the error directly from the URL query parameter in the server component.
export default function ErrorPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams?.error || "An unknown error occurred";

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error}</p>
    </div>
  );
}
