import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { isLoaded, signIn } = useSignIn();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password: newPassword,
      });

      if (result.status === "complete") {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error: any) {
      setMessage(error.errors?.[0]?.message || "Failed to reset password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        <p className="text-center text-gray-600 mb-4">Enter the code sent to your email and your new password.</p>

        {message && <p className="text-red-500 text-center">{message}</p>}

        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="text"
            name="code"
            placeholder="Enter your code"
            className="w-full border p-3 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            className="w-full border p-3 rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
