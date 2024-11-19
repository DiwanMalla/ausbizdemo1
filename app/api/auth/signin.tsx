import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async () => {
    const res = await signIn("wordpress", {
      redirect: false,
    });

    if (res?.error) {
      setErrorMessage("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Sign In</h1>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Sign in with WordPress
        </button>
      </div>
    </div>
  );
}
