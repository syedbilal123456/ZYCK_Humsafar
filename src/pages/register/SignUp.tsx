import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profileFor: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    maritalStatus: "",
    country: "",
    state: "",
    city: "",
    phone: "",
    hearAboutUs: "",
    termsAccepted: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = e.target instanceof HTMLInputElement ? e.target.checked : false;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
      });

      await signUp.prepareEmailAddressVerification();
      setPendingVerification(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Signup failed.");
      } else {
        setError("Signup failed.");
      }
    }
  };

  const handleGoogleSignup = async () => {
    if (!isLoaded) return;
    await signUp.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/oauth-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        navigate("/");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Verification failed.");
      } else {
        setError("Verification failed.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Create an Account
        </h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {!pendingVerification ? (
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
            </div>

            {/* Profile For */}
            <select
              name="profileFor"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            >
              <option value="">Profile For</option>
              <option value="self">Self</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="relative">Relative</option>
            </select>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
            </div>

            {/* Gender */}
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full border p-3 rounded"
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone & Hear About Us */}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="hearAboutUs"
              placeholder="How did you hear about us?"
              className="w-full border p-3 rounded"
              onChange={handleChange}
            />

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                className="mr-2"
                onChange={handleChange}
                required
              />
              <span className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-pink-600">
                  terms and conditions
                </a>
                .
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 text-white p-3 rounded hover:bg-pink-700"
            >
              Sign Up
            </button>

            <button
              onClick={handleGoogleSignup}
              className="w-full bg-pink-600 text-white p-3 rounded mt-1 hover:bg-pink-700"
            >
              Sign Up with Google
            </button>

            {/* Already Have an Account */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-pink-600">
                Log in
              </a>
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <input
              type="text"
              placeholder="Verification Code"
              className="w-full border p-3 rounded"
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded"
            >
              Verify Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
