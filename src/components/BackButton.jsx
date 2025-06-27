import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = (Blog) => {
  return (
    <div>
        <Link to={`/`}>
      <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Back
      </button>
    </Link>
    </div>
  )
}

export default BackButton