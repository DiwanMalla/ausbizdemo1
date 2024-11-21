import { GetServerSideProps } from "next";

interface ErrorPageProps {
  error?: string;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error || "An unknown error occurred"}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const error = query.error as string | undefined;

  return {
    props: { error }, // Passing the error as a prop
  };
};
