import React, {Suspense} from 'react';
import {Post} from "@/app/types/post";

interface ParamsType {
    params: Promise<{
        postId: string;
    }>
}

const fetchDynamicPostById = async(id: string): Promise<Post> => {
    const parseId = parseInt(id);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseId}`);
    if(!res.ok) {
        throw new Error("Failed to fetch post");
    }

    return res.json();
}

const DynamicPostByPostId = async({ params }: ParamsType) => {
    const { postId } = await params;
    const dynamicPost = await fetchDynamicPostById(postId);

    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>Dynamic post by id</h1>

            <div className={`mt-10`}>
                <Suspense fallback={<p className={`text-xl font-medium`}>Post loading...</p>}>
                    <div className="card card-border bg-base-100 w-full">
                        <div className="card-body">
                            <h2 className="card-title">{dynamicPost?.title}</h2>
                            <p>{dynamicPost?.body}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default DynamicPostByPostId;