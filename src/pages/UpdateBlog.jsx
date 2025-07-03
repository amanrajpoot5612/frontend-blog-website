import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { BACKEND_URI } from "../../api";

const UpdateBlog = () => {
  const { id } = useParams(); // get the blog id from the URL
  console.log(`id : ${id}`);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing blog content
  useEffect(() => {
    fetch(`${BACKEND_URI}/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog for editing:", err);
        setLoading(false);
      });
  }, [id]);

  // Handle form submission
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
      } else {
        alert("❌ Failed to update blog");
      }
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        ⏳ Loading blog for editing...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 px-4 py-10">
      {/* Back button at the top */}
      <div className="max-w-4xl mx-auto mb-6">
        <BackButton />
      </div>

      {/* Update Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-xl rounded-2xl p-8 transition-all"
      >
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          ✏️ Edit Blog Post
        </h2>

        {/* Title Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Update blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Content Field */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
            Blog Content
          </label>
          <textarea
            placeholder="Update your blog content..."
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition transform hover:scale-[1.01]"
        >
          🔄 Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
