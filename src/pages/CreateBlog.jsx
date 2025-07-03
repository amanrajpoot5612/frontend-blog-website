import { useState } from "react";
import BackButton from "../components/BackButton";
import { BACKEND_URI } from "../../api";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URI}/blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ title, content })
      });

      if (res.ok) {
        const data = await res.json();
        alert("✅ Blog created!");
        console.log("Blog created:", data);
        setTitle("");
        setContent("");
      } else {
        alert("❌ Failed to create blog");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 px-4 py-10">
      {/* Back button at top */}
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-xl rounded-2xl p-8 transition-all"
      >
        <h2 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          ✍️ Create a New Blog
        </h2>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
            Blog Title
          </label>
          <input
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Content Area */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 dark:text-zinc-300 mb-2">
            Blog Content
          </label>
          <textarea
            placeholder="Write your blog content here..."
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white border border-gray-300 dark:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition transform hover:scale-[1.01]"
        >
          🚀 Publish Blog
        </button>
              <div className="max-w-4xl mx-auto mb-6">
        <BackButton />
      </div>

      </form>
      
    </div>
  );
};

export default CreateBlog;
