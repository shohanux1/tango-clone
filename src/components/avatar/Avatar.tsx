import React from "react";

type AvatarProps = {
  src?: string;
  alt: string;
  title?: string;
  className?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
};

const Avatar = ({
  src,
  alt,
  title,
  className,
  size = "medium",
  onClick,
}: AvatarProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center overflow-hidden rounded-full cursor-pointer ${
        size === "small"
          ? "w-9 h-9"
          : size === "medium"
          ? "w-10 h-10"
          : "w-16 h-16"
      } ${className}`}
    >
      {src ? (
        <img
          className="object-cover w-full h-full"
          src={src}
          alt={alt}
          title={title}
        />
      ) : (
        <div className="flex items-center justify-center bg-indigo-100 w-full h-full ">
          {title?.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
