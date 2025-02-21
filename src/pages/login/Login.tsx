import React, { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Login failed.");
      } else {
        setError("Login failed.");
      }
    }
  };

  const handleOAuthLogin = async () => {
    if (!isLoaded) return;
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/oauth-callback",
        redirectUrlComplete: "/",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "OAuth login failed.");
      } else {
        setError("OAuth login failed.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          Please log in to your account to continue.
        </p>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-4 focus:ring-pink-300 focus:border-pink-500 p-3"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Log In
          </button>

          {/* Google Login Button */}
        <div className="">
          <button
            onClick={handleOAuthLogin}
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Continue with Google
          </button>
        </div>

          <div className="text-center mt-4">
            <Link to="/forgot-password" className="text-pink-600 hover:underline text-sm font-medium">
              Forgot your password?
            </Link>
          </div>
        </form>

        <div className="mt-6 flex items-center justify-center">
          <span className="h-px bg-gray-300 w-1/4"></span>
          <span className="text-sm text-gray-500 mx-4">or</span>
          <span className="h-px bg-gray-300 w-1/4"></span>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-pink-600 hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
