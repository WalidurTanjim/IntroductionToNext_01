import React, {Suspense} from 'react';
import S_PostsList from "@/app/components/S_Posts/S_PostsList/page";

const S_PostsPage = () => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>S_Posts page</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>S_Posts is loading...</p>}>
                <S_PostsList />
            </Suspense>
        </div>
    );
};

export default S_PostsPage;