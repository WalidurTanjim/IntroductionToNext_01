import React, {Suspense} from 'react';
import {Post} from "@/app/types/post";

interface SPostIdParams {
    params: Promise<{
        postId: string;
    }>
}

// fetchDynamicSPostById
const fetchDynamicSPostById = async(id: string): Promise<Post> => {
    const parseId = parseInt(id);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseId}`);

    if(!res.ok) {
        throw new Error("Post not found");
    }

    return res.json();
}

// SPostDynamicCard
const SPostDynamicCard = async({ params }: SPostIdParams) => {
    const { postId } = await params;
    const dynamicSPost = await fetchDynamicSPostById(postId);

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

// DynamicSPost (main component)
const DynamicSPost = async({ params }: SPostIdParams) => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-2xl text-center font-medium`}>Dynamic SPost</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Dynamic SPost is loading...</p>}>
                <SPostDynamicCard params={params} />
            </Suspense>
        </div>
    );
};

export default DynamicSPost;