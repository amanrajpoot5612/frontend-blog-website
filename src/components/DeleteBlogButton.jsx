import { useNavigate } from "react-router-dom";

const DeleteBlogButton = ({blogId}) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:4000/api/blog/${blogId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("🗑️ Blog deleted successfully!");
        navigate("/"); // Redirect after deletion
      } else {
        alert("❌ Failed to delete blog.");
      }
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded-lg text-sm shadow"
    >
      🗑 Delete Blog
    </button>
  );
}


export default  DeleteBlogButton;