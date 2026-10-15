import React from 'react';
import {Comment} from "@/app/types/comment";
import Link from "next/link";

interface CommentProps {
    comment: Comment;
}

const CommentCard = async({comment}: CommentProps) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{comment?.name}</h2>
                <p>{comment?.body}</p>
                <div className="card-actions justify-end">
                    <Link href={`/comments/${comment?.id}`}><button className="btn btn-primary">Explore comment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;