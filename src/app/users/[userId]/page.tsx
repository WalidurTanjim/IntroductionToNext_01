import React, {Suspense} from 'react';
import {User} from "@/app/types/user";
import UserPage from "@/app/components/User/page";

interface IdParams {
    params: Promise<{
        userId: string;
    }>
}

const fetchUserByUserId = async(userId: string): Promise<User> => {
    const parseUserId = parseInt(userId);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${parseUserId}`);

    if(!res.ok) {
        throw new Error("Failed to fetch user");
    }

    return res.json();
}

const DynamicUserByUserId = async({ params }: IdParams) => {
    const { userId } = await params;
    const dynamicUser = await fetchUserByUserId(userId);
    // console.log(userId, dynamicUser);

    return (
        <div>
            <h1 className={`text-center text-2xl font-medium`}>Dynamic user by id</h1>

            <div className={`mt-10`}>
                <Suspense fallback={<p className={`text-xl font-medium`}>User is loading...</p>}>
                    <UserPage user={dynamicUser} />
                </Suspense>
            </div>
        </div>
    );
};

export default DynamicUserByUserId;