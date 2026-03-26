"use client";

import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log(name, email, password);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl text-gray-900 font-bold mb-4 text-center">
          Signup
        </h2>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-500 rounded-md placeholder:text-gray-500"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-500 rounded-md placeholder:text-gray-500"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-500 rounded-md placeholder:text-gray-500"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Signup
        </button>

      </div>
      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500">Login</a>
      </p>
    </div>
  );
}