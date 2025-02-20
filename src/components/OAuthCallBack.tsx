import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    const completeSignIn = async () => {
      try {
        await handleRedirectCallback({}); // Handles Google Signup/Login sessions
        navigate("/"); // Redirect to home page
      } catch (error) {
        console.error("OAuth callback error:", error);
      }
    };

    completeSignIn();
  }, [handleRedirectCallback, navigate]);

  return <div className="text-center text-lg">Completing sign in...</div>;
};

export default OAuthCallback;
