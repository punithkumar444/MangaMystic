import { useState } from "react";
import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Adjusted to show 9 blogs per page (3 rows of 3)
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNextPage = () => {
    if (indexOfLastBlog < blogs.length) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="bg-gray-800 min-h-screen">
        <Appbar />
        <div className="flex justify-center px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
            {/* Display 9 skeletons in a 3x3 grid */}
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-800 min-h-screen">
      <Appbar />
      <div className="flex justify-center px-6 py-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map(blog => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevPage}
          className={`mr-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className={`ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 ${indexOfLastBlog >= blogs.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={indexOfLastBlog >= blogs.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};
