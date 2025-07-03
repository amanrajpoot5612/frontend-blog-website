import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ user, handleLogout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    const hideTimer = setTimeout(() => setShowMenu(false), 500); // ⏳ delay hide
    setTimer(hideTimer);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition cursor-pointer">
        <span className="text-lg">👤</span>
        <span className="text-sm truncate max-w-[120px]">{user.username}</span>
      </div>

      {showMenu && (
        <div className="absolute right-0 mt-2 bg-white dark:bg-zinc-800 text-sm text-gray-700 dark:text-gray-100 shadow-lg rounded-lg py-2 w-40 z-50 border border-gray-200 dark:border-zinc-700 transition-opacity duration-200">
          <Link
            to="/user/profile"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
          >
            View Profile
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
