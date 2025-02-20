import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const UserMenu: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="relative">
      {/* User Avatar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 rounded-full p-1 hover:shadow-lg"
      >
        <img
          src={user?.imageUrl || "/default-avatar.png"} // Fallback to default if no image
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/profile")}>
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/settings")}>
              Settings
            </li>
            <li className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
