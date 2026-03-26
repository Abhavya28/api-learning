"use client"

import { useState } from "react";
import { useCreatePost, usePosts } from "../services/userService";
import { Post } from "../types";

const Posts = () => {
    const { data, isLoading, error } = usePosts();
    const createPost = useCreatePost();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = () => {
        if(!title || !body){
            alert("Fill all details");
            return;
        }
        createPost.mutate({title, body});
        setTitle("");
        setBody("");
    };

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center text-gray-500 text-lg">
                Loading posts...
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500 text-lg">
                Error loading posts
            </div>
        );
    }

    const posts: Post[] = data || [];

    return (
        <div className="p-6 flex flex-col items-center ">
            <h1 className="text-red-800 text-4xl mb-2 font-bold">Posts</h1>

            {/* FORM */}
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center">
                <h2 className="text-xl font-bold mb-3">Create Post</h2>

                <input
                    className="w-full border p-2 mb-2 rounded"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="w-full border p-2 mb-2 rounded"
                    placeholder="Enter body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Create Post
                </button>

                {/* Status */}
                {createPost.isPending && <p>Posting...</p>}
                {createPost.isSuccess && <p className="text-green-500">Posted!</p>}
                {createPost.isError && <p className="text-red-500">Error!</p>}
            </div>

            {/* POSTS LIST */}
            <div className="grid grid-cols-3 gap-4 mt-4">
                {posts.map((post: Post) => (
                    <div key={post.id} className="bg-gray-100 p-3 rounded">
                        <h3 className="font-bold text-gray-950">{post.title}</h3>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts