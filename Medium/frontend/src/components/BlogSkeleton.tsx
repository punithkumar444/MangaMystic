import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="bg-gray-900 border border-gray-700 w-85 h-70 cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Skeleton for Image */}
        <div className="h-1/2 w-full bg-gray-700 animate-pulse"></div>
        <div className="h-1/2 w-full p-4 flex flex-col justify-between">
          {/* Skeleton for Title */}
          <div className="h-6 bg-gray-700 rounded-full mb-2 animate-pulse"></div>
          {/* Skeleton for Description */}
          <div className="h-4 bg-gray-700 rounded-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded-full mb-2 animate-pulse"></div>
          <div className="flex items-center text-gray-400 mt-4">
            <div className="pr-2">
              <Circle />
            </div>
            {/* Skeleton for Author Name */}
            <div className="h-4 bg-gray-700 rounded-full w-16 mb-2 animate-pulse"></div>
            <div className="pl-2 flex flex-col justify-center">
              <Circle />
            </div>
            {/* Skeleton for Date */}
            <div className="h-4 bg-gray-700 rounded-full w-24 mb-2 animate-pulse"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
