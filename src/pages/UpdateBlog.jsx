import React from 'react'
import { useState } from "react";
import BackButton from "../components/BackButton";
import { BACKEND_URI } from '../../api';

const UpdateBlog = () => {
 const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URI}/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        const data = await res.json();
        alert("✅ Blog updated!");
        console.log("Blog updated:", data);
        setTitle("");
        setContent("");
      } else {
        alert("❌ Failed to update blog");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <BackButton></BackButton>
        <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-xl"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <input
        className="border w-full mb-3 p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border w-full mb-3 p-2 rounded"
        placeholder="Content"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Update Blog
      </button>
    </form>
    </>
  
  );
}


export default UpdateBlog