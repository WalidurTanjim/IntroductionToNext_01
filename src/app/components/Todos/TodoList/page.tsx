import React from 'react';
import {Todo} from "@/app/types/todo";
import TodoCard from "@/app/components/Todos/TodoCard/page";

const fetchTodos = async(): Promise<Todo[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

    if(!res.ok) {
        throw new Error("Failed to fetch todos");
    }

    return res.json();
}

const TodoList = async() => {
    const todos = await fetchTodos();

    return (
        <div className={`mt-5 grid gap-5 grid-cols-4`}>
            {
                todos?.map((todo: Todo) => <TodoCard key={todo?.id} todo={todo} />)
            }
        </div>
    );
};

export default TodoList;