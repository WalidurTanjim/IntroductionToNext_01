import React from 'react';
import {Todo} from "@/app/types/todo";
import Link from "next/link";

interface TodoParams {
    todo: Todo
}

const TodoCard = ({ todo }: TodoParams) => {
    return (
        <div className="card card-dash bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{todo?.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/todos/${todo?.id}`}><button className="btn btn-primary">Show details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;