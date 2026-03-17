// A Posts Page which uses useEffect() as the api data fetched should be present there automatically on page load.

import { useEffect, useState } from "react";
import { getPosts } from "../services/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading posts...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="flex flex-col gap-4 items-center justify-center p-10">
      <h1 className="text-black font-bold text-4xl">Posts</h1>
      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 8).map((post) => (
          <div
            key={post.id}
            className="border border-gray-400 p-2 flex flex-col items-center"
          >
            <h1 className="text-black font-bold text-lg">{post.title}</h1>
            <p className="text-gray-600">@{post.body}</p>
            <p>#{post.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
