import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/AppBar";
import { Spinner } from "../components/Spinner";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading || !blog) {
    return (
      <div className="bg-gray-900 min-h-screen">
        <Appbar />
        <div className="h-screen flex flex-col justify-center items-center">
          <Spinner />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <FullBlog blog={blog} />
    </div>
  );
};
