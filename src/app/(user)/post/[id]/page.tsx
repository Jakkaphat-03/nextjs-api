"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useComments } from "@/store/comments";

export default function PostCommentsPage() {
    const params = useParams();
    const postId = Number(params.id);

    const { items, loading, error, fetchComments } = useComments();

    useEffect(() => {
        if (postId) {
            fetchComments(postId);
        }
    }, [postId, fetchComments]);

    if (loading) return <p className="text-blue-600">⏳ กำลังโหลดคอมเมนต์...</p>;
    if (error) return <p className="text-red-500">❌ ผิดพลาด: {error}</p>;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-800">
                💬 Comments for Post {postId}
            </h2>

            <ul className="space-y-4">
                {items.map((c) => (
                    <li
                        key={c.id}
                        className="bg-white shadow p-5 rounded-xl border border-gray-200 hover:shadow-md transition"
                    >
                        <h3 className="font-bold text-lg">{c.name}</h3>
                        <p className="text-sm text-gray-500">{c.email}</p>
                        <p className="mt-2 text-gray-700">{c.body}</p>
                    </li>
                ))}
            </ul>

            {items.length === 0 && (
                <p className="text-gray-500">⚠️ ไม่มี comments สำหรับโพสต์นี้</p>
            )}
        </div>
    );
}
