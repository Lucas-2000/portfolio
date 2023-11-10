"use client";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
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
