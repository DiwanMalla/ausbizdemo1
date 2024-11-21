// app/api/auth/error/page.tsx

export default function ErrorPage({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const error = searchParams.get("error") || "An unknown error occurred";

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error}</p>
    </div>
  );
}
