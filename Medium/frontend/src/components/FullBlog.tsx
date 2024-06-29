import { Blog } from "../hooks";
import { Appbar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen">
      <Appbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-1">
            <div className="text-4xl font-extrabold text-yellow-400 mb-4">
              {blog.title}
            </div>
            <div className="text-slate-500 text-sm mb-4">
              Posted on 2nd Feb 2024
            </div>
            <div className="text-lg leading-relaxed mb-8">
              {blog.content}
            </div>
          </div>
          {/* Author Info */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="text-slate-600 text-lg font-semibold mb-4">
              Author
            </div>
            <div className="flex items-center">
              <div className="pr-4">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold mb-1">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="text-slate-500 text-sm">
                Unleash Your Inner Otaku - Join Us Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
