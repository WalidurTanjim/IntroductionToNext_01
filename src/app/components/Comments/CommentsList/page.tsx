import React from 'react';
import {Comment} from "@/app/types/comment";
import CommentCard from "@/app/components/Comments/CommentCard/page";

const fetchComments = async(): Promise<Comment[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);

    if(!res.ok) {
        throw new Error("Comment not found");
    }

    return res.json();
}

const CommentsList = async() => {
    const comments = await fetchComments();

    return (
        <div className={`mt-5 grid gap-5 grid-cols-4`}>
            {comments.map((comment: Comment) => <CommentCard key={comment?.id} comment={comment} />)}
        </div>
    );
};

export default CommentsList;