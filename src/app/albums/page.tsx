import React, {Suspense} from 'react';
import AlbumList from "@/app/components/AlbumList/page";

const AlbumsPage = () => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>Album page</h1>

            <Suspense fallback={<div className={`text-xl font-medium`}>Loading...</div>}>
                <AlbumList />
            </Suspense>
        </div>
    );
};

export default AlbumsPage;