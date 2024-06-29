import { Link } from "react-router-dom";
import  image1 from "../img2/goku.png"
import image2 from "../img2/killua.jpg"
import image3 from "../img2/naruto.jpg"
import image4 from "../img2/image1.jpg"
import image5 from "../img2/L.jpg"
import image6 from "../img2/asta.jpg"
import image7 from "../img2/eren.png"
import image8 from "../img2/johan.jpg"
import image9 from "../img2/thorfinn.jpg"
import image10 from "../img2/itachi.jpg"
import { useEffect, useState } from "react";
interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

const images = [image1, image2,image3,image4,image5,image6,image7,image8,image9,image10];

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const selectedImage = images[Math.floor(Math.random() * images.length)];
    setRandomImage(selectedImage);
  }, []);

  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-gray-900 border border-gray-700 w-96 h-80 cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Top Half: Image */}
        <div className="h-1/2 w-full">
          <img src={randomImage} alt={title} className="w-full h-full object-cover" />
        </div>
        {/* Bottom Half: Content */}
        <div className="h-1/2 w-full p-4 flex flex-col justify-between">
          {/* Title and Description */}
          <div>
            <div className="text-xl font-bold text-yellow-400 mb-2">{title}</div>
            <div className="text-md text-gray-300 mb-2 line-clamp-3">
              {content}
            </div>
          </div>
          {/* Author Name and Date */}
          <div className="flex items-center text-gray-400">
            <Avatar name={authorName} />
            <div className="font-light pl-2 text-sm">{authorName}</div>
            <div className="pl-2 flex flex-col justify-center">
              <Circle />
            </div>
            <div className="pl-2 text-sm">{publishedDate}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-gray-600"></div>;
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
  return (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-700 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
      <span className={`${size === "small" ? "text-xs" : "text-md"} font-light text-white`}>
        {name[0]}
      </span>
    </div>
  );
}


