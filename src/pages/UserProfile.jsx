import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { BACKEND_URI } from "../../api";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`${BACKEND_URI}/blog/my-blogs`, {
        credentials: "include", // cookie needed
      })
        .then((res) => res.json())
        .then((data) => setMyBlogs(data))
        .catch((err) => console.error("Error loading blogs:", err));
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        You must be logged in to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-zinc-700">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=User"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{user.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">@{user.username}</p>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700 dark:text-zinc-300">
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
        <div className="flex justify-between">
            <span className="font-medium">Name:</span>
            <span>{user.name}</span>
          </div>
        <div className="flex justify-between">
            <span className="font-medium">Username:</span>
            <span>{user.username}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/">
            <button className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* User Blogs */}
      <div className="max-w-4xl mx-auto mt-12 px-2">
        <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">📚 My Blogs</h3>

        {myBlogs.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No blogs posted yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {myBlogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-5 rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{blog.title}</h4>
                <p className="text-sm text-gray-700 dark:text-zinc-300 line-clamp-3">{blog.content}</p>
                <Link to={`/blog/${blog._id}`}>
                  <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Read More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
