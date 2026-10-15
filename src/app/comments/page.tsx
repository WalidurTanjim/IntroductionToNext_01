import React, {Suspense} from 'react';
import CommentsList from "@/app/components/Comments/CommentsList/page";

const CommentsPage = () => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>Comments Page</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Comments is loading...</p>}>
                <CommentsList />
            </Suspense>
        </div>
    );
};

export default CommentsPage;