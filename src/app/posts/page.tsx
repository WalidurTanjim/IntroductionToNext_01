import React, {Suspense} from 'react';
import {Post} from "@/app/types/post";
import PostPage from "@/app/components/Post/page";

const fetchPostsData = async(): Promise<Post[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

    if(!res.ok) {
        throw new Error("Failed to fetch posts.");
    }

    return res.json();
}

const PostsPage = async() => {
    const posts = await fetchPostsData();

    return (
        <div className={`p-5`}>
            <h1 className={`text-2xl font-medium text-center`}>Posts page</h1>

            <div className={`mt-10`}>
                <Suspense fallback={<p className={`text-xl font-medium`}>Posts loading...</p>}>
                    <div className={`grid gap-5 grid-cols-3`}>
                        {
                            posts.map((post: Post) => <PostPage key={post?.id} post={post} />)
                        }
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default PostsPage;