import React, {Suspense} from 'react';
import {Todo} from "@/app/types/todo";

interface TodoParams {
    params: Promise<{
        todoId: string;
    }>
}

// fetchDynamicTodoById
const fetchDynamicTodoById = async(todoId: string): Promise<Todo> => {
    const parseId = parseInt(todoId);

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${parseId}`);

    if(!res.ok) {
        throw new Error("Failed to fetch todo by id " + todoId);
    }

    return res.json();
}

// (sub-component)
const DynamicTodoDetails = async({ params }: { params: Promise<{ todoId: string }> }) => {
    const { todoId } = await params;
    const dynamicTodo = await fetchDynamicTodoById(todoId);

    return (
        <div className="card card-dash bg-base-100 w-full">
            <div className="card-body">
                <h2 className="card-title">{dynamicTodo?.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Explore more</button>
                </div>
            </div>
        </div>
    );
}

// main component
const DynamicTodoById = async({ params }: TodoParams) => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>Dynamic TODO by id</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Dynamic todo is loading...</p>}>
                <DynamicTodoDetails params={params} />
            </Suspense>
        </div>
    );
};

export default DynamicTodoById;