import React from "react";

type CardsIconProps = {
  icon: React.ComponentType<any>;
  size?: number;
  className?: string;
  onClick?: () => void;
};

const CardsIcon = ({
  icon: Icon,
  size,
  className,
  onClick,
}: CardsIconProps) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center rounded-full hover:bg-black/20 transition h-8 w-8"
    >
      <Icon className={`text-white ${className}`} size={size} />
    </div>
  );
};

export default CardsIcon;
