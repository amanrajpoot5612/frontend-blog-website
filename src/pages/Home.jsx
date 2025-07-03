import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BACKEND_URI } from '../../api';
import Hero from './Hero';
const Home = () => {
    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`${BACKEND_URI}/blog/`)
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(`${err}`)
        )
    }, [])
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100">
  {/* TOP BAR */}
  <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800">
    <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">📝 BloggUpp</h1>
    <div className="mt-4 sm:mt-0 space-x-3">
      <Link to="/signin">
        <button className="px-4 py-2 text-sm rounded border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
          Sign In
        </button>
      </Link>
      <Link to="/user/register">
        <button className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition">
          Register
        </button>
      </Link>
      <Link to="/blog/create">
        <button className="px-4 py-2 text-sm rounded bg-yellow-400 text-white hover:bg-yellow-500 transition">
          Create Blog
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
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2 line-clamp-2">
              {Blog.title}
            </h3>
            <p className="text-gray-700 dark:text-zinc-300 text-sm line-clamp-4">
              {Blog.content}
            </p>
          </div>
          <div className="mt-4">
            <Link to={`/blog/${Blog._id}`}>
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