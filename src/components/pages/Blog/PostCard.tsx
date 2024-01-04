import Post from "@/models/Post";
import Image from "next/image";
import React, { FC } from "react";
import { FaRegHeart } from "react-icons/fa";

interface PostCardProps {
  className?: string;
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ className = "", post }) => {
  return (
    <div className={`${className} flex justify-between`}>
      <div className="space-y-3 justify-between flex flex-col">
        <header className=" flex items-center space-x-2">
          <span className="w-6 h-6 relative">
            <Image
              width={100}
              height={100}
              alt="author"
              src={post.author.picture}
              className=" rounded-full absolute w-full h-full object-cover"
            />
          </span>
          <span className=" text-gray-500 text-sm font-extralight">
            {post.author.fullName}
          </span>
        </header>
        <div className=" space-y-1">
          <h2 className=" font-bold text-2xl">{post.title}</h2>
          <p className=" text-sm font-light">{post.description}</p>
        </div>
        <div className=" flex space-x-6 items-center">
          <div className=" flex items-center space-x-2">
            {post.tags.map((tag, i) => (
              <span
                className=" px-3 py-2 bg-gray-200 text-gray-600 text-xs"
                key={i}
              >
                {tag.name}
              </span>
            ))}
          </div>
          <div className="space-x-2 flex items-center text-sm">
            <FaRegHeart />
            <span>150</span>
          </div>
        </div>
      </div>
      <Image width={300} height={300} src={post.image} alt="image" className="w-36 h-36 rounded-md" />
    </div>
  );
};

export default PostCard;
