import React from 'react';
import {User} from "@/app/types/user";
import Link from "next/link";

interface UserParams {
    user: User;
}

const UserPage= ({ user }: UserParams) => {
    // console.log(user);

    return (
        <div className="card card-border bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{ user?.name }</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${user?.id}`}><button className="btn btn-primary">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserPage;