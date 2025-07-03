import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteBlogButton from "../components/DeleteBlogButton";
import BackButton from "../components/BackButton";
import EditBlogButton from "../components/EditBlogButton";
import { BACKEND_URI } from "../../api";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URI}/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        ⏳ Loading blog...
      </div>
    );

  if (!blog)
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        ❌ Blog not found
      </div>
    );

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-800 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-4 leading-tight">
              {blog.title}
            </h1>

            <div className="text-gray-700 dark:text-zinc-300 text-base leading-relaxed whitespace-pre-line">
              {blog.content}
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
              📅 Posted on {new Date(blog.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <EditBlogButton id={id} />
            <DeleteBlogButton blogId={id} />
            <BackButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
