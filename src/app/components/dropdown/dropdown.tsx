"use client";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import Link from "next/link";

interface IDropdownProps {
  title: string;
  options: IOptionsProps[];
}

interface IOptionsProps {
  href: string;
  title: string;
}

export default function Dropdown({ title, options, ...props }: IDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHoverTrue = () => {
    setIsHovered(true);
  };

  const toggleHoverFalse = () => {
    setIsHovered(false);
  };

  const Icon = isHovered ? ArrowUp : ArrowDown;

  return (
    <div className="relative inline-block" onClick={toggleHoverTrue}>
      <span className="flex justify-center items-center gap-2 p-2 cursor-pointer">
        {title} <Icon />
        {isHovered && (
          <ul
            className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-md"
            onMouseLeave={toggleHoverFalse}
          >
            {options.map((option, index) => (
              <li key={option.title} className="hover:bg-gray-100">
                <Link href={option.href} className="block py-2 px-4 text-black">
                  {option.title}
                </Link>
                {index !== options.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        )}
      </span>
    </div>
  );
}
