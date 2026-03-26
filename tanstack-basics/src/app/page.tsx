"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
          Learned TanStack Query by building a mini project to fetch users, posts, and create new posts.
        </h1>

        {/* Buttons */}
        <div className="flex gap-6 justify-center mt-6">

          <button
            onClick={() => router.push("/users")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition duration-300"
          >
            👤 Users
          </button>

          <button
            onClick={() => router.push("/posts")}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl shadow-md transition duration-300"
          >
            📝 Posts
          </button>
        </div>
      </div>

    </div>
  );
}
