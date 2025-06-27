import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BACKEND_URI } from '../../api';

const Home = () => {
    const [Blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`${BACKEND_URI}/blog`)
        .then(res => res.json())
        .then(data => setBlogs(data))
        .catch(err => console.log(`${err}`)
        )
    }, [])
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">📝 All Blogs</h1>
    <Link to={`/blog/create`}>
      <button className="mt-2 bg-yellow-300 text-white px-4 py-2 rounded hover:bg-yellow-400">
        Create New Blog
      </button>
    </Link>
  {Blogs.map((Blog, id) => (
    <div
      key={id}
      className="bg-white shadow-md rounded-2xl p-6 mb-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{Blog.title}</h3>
      <p className="text-gray-700">{Blog.content}</p>
      <Link to={`/blog/${Blog._id}`}>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Read More
      </button>
    </Link>
    </div>
  ))}
</div>

  )
}

export default Home