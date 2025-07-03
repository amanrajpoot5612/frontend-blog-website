import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 gap-4">
  {/* Title */}
  <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center sm:text-left">
    📝 BloggUpp
  </h1>
  <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
    {/* {user ? (
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
    )} */}

    <Link to="/blog/create">
      <button className="px-4 py-2 text-sm rounded bg-yellow-400 text-white hover:bg-yellow-500 transition whitespace-nowrap">
        ✍️ Create Blog
      </button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default Navbar