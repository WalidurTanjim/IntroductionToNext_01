import React from 'react';
import {Album} from "@/app/types/album";
import Link from "next/link";

interface AlbumProps {
    album: Album;
}

const AlbumPage = ({ album }: AlbumProps) => {
    return (
        <div className="card card-border bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{album?.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/albums/${album?.id}`}><button className="btn btn-primary">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AlbumPage;