import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteBlogButton from "../components/DeleteBlogButton";
import BackButton from "../components/BackButton";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/api/blog/${id}`)
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

  if (loading) return <div className="text-center mt-10">Loading blog...</div>;

  if (!blog)
    return <div className="text-center text-red-600 mt-10">Blog not found 😢</div>;

  return (
    <>
      <BackButton></BackButton>
       <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 rounded-2xl shadow-lg p-10 border border-purple-300">
        <h1 className="text-4xl font-extrabold text-purple-800 mb-4">{blog.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
        <p className="mt-6 text-sm text-gray-500 italic">
          Posted on {new Date(blog.createdAt).toLocaleString()}
        </p>
      </div>
      <DeleteBlogButton blogId={id}></DeleteBlogButton>
    </div>
    </>
   
  );
}


export default Blog;