import React from 'react';
import {Post} from "@/app/types/post";
import Link from "next/link";

interface PostProps {
    post: Post;
}

const PostPage = ({ post }: PostProps) => {
    return (
        <div className="card card-border bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">Post</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostPage;