import React from 'react';
import {Album} from "@/app/types/album";
import AlbumPage from "@/app/components/Album/page";

const fetchAlbumsList = async(): Promise<Album[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);

    if(!res.ok) {
        throw new Error("Album not found.");
    }

    return res.json();
}

const AlbumList = async() => {
    const albums = await fetchAlbumsList();

    return (
        <div className={`grid gap-5 grid-cols-4`}>
            {
                albums?.map((album: Album) => <AlbumPage key={album?.id} album={album} />)
            }
        </div>
    );
};

export default AlbumList;