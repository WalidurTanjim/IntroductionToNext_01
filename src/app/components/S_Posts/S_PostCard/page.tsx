import React from 'react';
import {Post} from "@/app/types/post";
import Link from "next/link";

const S_PostCard = async({ post }: { post: Post}) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post?.title}</h2>
                <p>{post?.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`/s_posts/${post?.id}`}><button className="btn btn-primary">Explore post</button></Link>
                </div>
            </div>
        </div>
    );
};

export default S_PostCard;