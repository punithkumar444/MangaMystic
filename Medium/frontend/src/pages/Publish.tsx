import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Backend_URL } from "../config";

export const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-gray-900 min-h-screen">
      <Appbar />
      <div className="flex justify-center w-full pt-8 px-4">
        <div className="max-w-screen-lg w-full">
          {/* Title Input */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            className="w-full bg-gray-800 border border-gray-700 text-gray-100 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mb-4"
            placeholder="Title"
          />

          {/* Text Editor */}
          <TextEditor
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />

          {/* Publish Button */}
          <button
            onClick={async () => {
              const response = await axios.post(
                `${Backend_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-6 inline-flex items-center px-6 py-3 text-lg font-semibold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-300 hover:bg-blue-800"
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
  value,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}) {
  return (
    <div className="mt-4">
      <div className="w-full mb-6 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <textarea
          onChange={onChange}
          value={value}
          id="editor"
          rows={10}
          className="block w-full px-4 text-sm text-gray-200 bg-gray-800 border-0 focus:outline-none"
          placeholder="Write your article..."
          required
        />
      </div>
    </div>
  );
}
