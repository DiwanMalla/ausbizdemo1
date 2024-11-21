// app/api/auth/error/page.tsx
"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "An unknown error occurred";

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error}</p>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
