"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function UserProfile() {
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
      >
        Sign In
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
      >
        <Image
          src={session.user.image || "/api/placeholder/32/32"}
          alt={session.user.name || "User"}
          width={32}
          height={32}
          className="rounded-full border-2 border-white/50"
        />
        <span className="hidden sm:block font-medium">{session.user.name}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
            <div className="font-medium">{session.user.name}</div>
            <div className="text-gray-500 dark:text-gray-400 text-xs">
              {session.user.email}
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
