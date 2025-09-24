"use client";

import { useEffect } from "react";
import { usePosts } from "@/store/posts";
import Link from "next/link";

export default function HomePage() {
    const { items, loading, error, fetchPosts } = usePosts();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading) return <p className="text-blue-600">⏳ กำลังโหลดโพสต์...</p>;
    if (error) return <p className="text-red-500">❌ ผิดพลาด: {error}</p>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-800">📌 All Posts</h2>

            <ul className="space-y-4">
                {items.slice(0, 20).map((post) => (
                    <li
                        key={post.id}
                        className="bg-white shadow p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
                    >
                        <Link href={`/post/${post.id}`}>
                            <h3 className="font-bold text-lg text-green-700 hover:underline">
                                {post.title}
                            </h3>
                        </Link>
                        <p className="text-gray-600 mt-2 line-clamp-2">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
