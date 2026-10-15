import React from 'react';
import {Post} from "@/app/types/post";
import S_PostCard from "@/app/components/S_Posts/S_PostCard/page";

// fetchSPosts
const fetchSPosts = async(): Promise<Post[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if(!res.ok) {
        throw new Error("Failed to fetch posts.");
    }

    return res.json();
}

const S_PostsList = async() => {
    const s_posts = await fetchSPosts();

    return (
        <div className={`mt-5 grid gap-5 grid-cols-4`}>
            {
                s_posts.map((post: Post) => <S_PostCard key={post?.id} post={post} />)
            }
        </div>
    );
};

export default S_PostsList;