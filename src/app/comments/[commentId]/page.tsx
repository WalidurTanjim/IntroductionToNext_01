import React, {Suspense} from 'react';
import {Comment} from "@/app/types/comment";

interface CommentParams {
    params: Promise<{
        commentId: string;
    }>
}

const fetchDynamicCommentById = async(id: string): Promise<Comment> => {
    const parseId = parseInt(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${parseId}`);

    if(!res.ok) {
        throw new Error("Failed to fetch dynamic comment");
    }

    return res.json();
}

const DynamicCommentDetails = async({ params }: { params: Promise<{ commentId: string }>}) => {
    const { commentId } = await params;
    const dynamicComment = await fetchDynamicCommentById(commentId);
    // console.log({ dynamicComment });

    return (
        <div className="card card-dash bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{dynamicComment?.name}</h2>
                <p>{dynamicComment?.body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

const DynamicCommentById = async({ params }: CommentParams) => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-2xl font-medium text-center`}>Dynamic comment by id</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Comments is loading...</p>}>
                <DynamicCommentDetails params={params} />
            </Suspense>
        </div>
    );
};

export default DynamicCommentById;