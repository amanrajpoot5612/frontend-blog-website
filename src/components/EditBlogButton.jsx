import React from 'react'
import UpdateBlog from '../pages/UpdateBlog'
import { Link } from 'react-router-dom'


const EditBlogButton = (id) => {
   return (
    <div>
        <Link to={`/blog/update/:${id}`}>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Edit
      </button>
    </Link>
    </div>
  )
}
export default EditBlogButton