import React, {Suspense} from 'react';
import {Album} from "@/app/types/album";

interface AlbumIdParams {
    params: Promise<{
        albumId: string;
    }>
}

// fetchDynamicAlbumById
const fetchDynamicAlbumById = async(id: string): Promise<Album> => {
    const parseId = parseInt(id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${parseId}`);

    if(!res.ok) {
        throw new Error("Failed to fetch dynamic album");
    }

    return res.json();
}

// DynamicAlbumDetails (sub-component)
const DynamicAlbumDetails = async({ params }: { params: Promise<{ albumId: string }>}) => {
    const { albumId } = await params;
    const dynamicData = await fetchDynamicAlbumById(albumId);
    // console.log({ dynamicData, albumId });

    return (
        <div className="card card-dash bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{dynamicData?.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

// DynamicAlbumPage (main component)
const DynamicAlbumPage = async({ params }: AlbumIdParams) => {

    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>Dynamic album by id</h1>

            <Suspense fallback={<div className={`text-xl font-medium`}>Dynamic album is loading...</div>}>
                <DynamicAlbumDetails params={params} />
            </Suspense>
        </div>
    );
};

export default DynamicAlbumPage;