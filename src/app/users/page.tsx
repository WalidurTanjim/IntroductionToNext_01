import React, {Suspense} from 'react';
import {User} from "@/app/types/user";
import UserPage from "@/app/components/User/page";

const fetchUsers = async(): Promise<User[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if(!res?.ok) {
        throw new Error("Failed to fetch users!")
    }

    return res?.json();
}

const UsersPage = async() => {
    const users = await fetchUsers();
    // console.log("Users:", users);

    return (
        <div>
            <h1 className={`text-center text-2xl font-medium`}>Users</h1>

            <Suspense fallback={<p className={`text-center text-xl font-medium`}>Loading users...</p>}>
                <div className={`grid gap-5 grid-cols-4`}>
                    {
                        users?.map((user: User) => <UserPage key={user?.id} user={user} />)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default UsersPage;