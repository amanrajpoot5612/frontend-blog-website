import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BACKEND_URI } from '../../api';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Hero from './Hero';
import ProfileDropdown from '../components/ProfileDropdown';
import profile_demo from '../assets/profile_.jpeg'
import DemoBanner from '../components/DemoBanner';
const Home = () => {
    const [Blogs, setBlogs] = useState([])
    const { user, loading } = useContext(AuthContext);
    const { setUser } = useContext(AuthContext);
    const handleLogout = async () => {
         try {
                const res = await fetch(`${BACKEND_URI}/user/logout`, {
                  method: "POST",
                  credentials: "include", // ✅ cookie gets sent
                });

                if (res.ok) {
                    setUser(null);         // 🧹 clear user from context
                    navigate("/login");   // 🔁 redirect to login (or "/")
                } else {
                    console.error("Logout failed");
                }
        } catch (err) {
                console.error("Logout error:", err);
        }
        }

    useEffect(() => {
        fetch(`${BACKEND_URI}/blog/`)
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(`${err}`)
        )
    }, [])
  if (loading) return <p>Loading...</p>;
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
  {/* TOP BAR */}
  {/* TOP BAR */}
  <DemoBanner></DemoBanner>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 gap-4">
  {/* Title */}
  <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center sm:text-left">
    📝 BloggUpp
  </h1>

  {/* Right Side: Profile + Create */}
  <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
    {user ? (
      // <div className="relative group">
      //   <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium shadow hover:bg-blue-700 transition cursor-pointer">
      //     <span className="text-lg">👤</span>
      //     <span className="text-sm truncate max-w-[120px]">{user.username}</span>
      //   </div>

      //   {/* Dropdown on hover */}
      //   <div className="absolute right-0 mt-2 hidden group-hover:block bg-white dark:bg-zinc-800 text-sm text-gray-700 dark:text-gray-100 shadow-lg rounded-lg py-2 w-40 z-50 border border-gray-200 dark:border-zinc-700">
      //     <Link
      //       to="/user/profile"
      //       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
      //     >
      //       View Profile
      //     </Link>
      //     <button
      //       onClick={handleLogout}
      //       className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
      //     >
      //       Logout
      //     </button>
      //   </div>
      // </div>
        <ProfileDropdown user={user} handleLogout={handleLogout} />
    ) : (
      <>
        <Link to="/user/login">
          <button className="px-4 py-2 text-sm rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Login
          </button>
        </Link>
        <Link to="/user/register">
          <button className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Register
          </button>
        </Link>
      </>
    )}

    <Link to="/blog/create">
      <button className="px-4 py-2 text-sm rounded bg-yellow-400 text-white hover:bg-yellow-500 transition whitespace-nowrap">
        ✍️ Create Blog
      </button>
    </Link>
  </div>
</div>


  {/* MAIN BLOG SECTION */}
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-semibold mb-8 text-center text-gray-700 dark:text-zinc-100">
      Explore our latest blogs
    </h2>

    {Blogs.length === 0 && (
      <p className="text-center text-gray-500 dark:text-zinc-400">No blogs available yet.</p>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {Blogs.map((Blog, id) => (
    <div
      key={id}
      className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Blog Content */}
      <div>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 line-clamp-2">
          {Blog.title}
        </h3>

        <p className="text-gray-700 dark:text-zinc-300 text-sm line-clamp-4">
          {Blog.content}
        </p>
      </div>

      {/* Author & Button Section */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Author */}
        <div className="flex items-center gap-3">
          <img
            src={profile_demo}
            alt="author-avatar"
            className="w-8 h-8 rounded-full border border-blue-500 shadow-sm"
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            by <span className="font-medium text-blue-600 dark:text-blue-300">
              {Blog.author?.name || "Unknown"}
            </span>
          </p>
        </div>

        {/* Read More */}
        <Link to={`/blog/${Blog._id}`} className="w-full sm:w-auto">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Read More →
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>

  </div>
  {/* <Hero></Hero> */}
</div>


  )
}

export default Home