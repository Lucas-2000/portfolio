"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-4 sm:mt-8 p-4 rounded-md border border-gray-300 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8 flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <p>&copy; Lucas Marchesoni, 2023</p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/lucasmarchesoni06/"
            target="_blank"
            className="text-white"
          >
            <InstagramLogo size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucasmarchesoni/"
            target="_blank"
            className="text-white"
          >
            <LinkedinLogo size={32} />
          </Link>
          <Link
            href="https://github.com/Lucas-2000"
            target="_blank"
            className="text-white"
          >
            <GithubLogo size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
