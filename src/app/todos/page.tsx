import React, {Suspense} from 'react';
import TodoList from "@/app/components/Todos/TodoList/page";

const TodosPage = () => {
    return (
        <div className={`p-5`}>
            <h1 className={`text-center text-2xl font-medium`}>This page is only for TODOS</h1>

            <Suspense fallback={<p className={`text-xl font-medium`}>Todos is loading...</p>}>
                <TodoList />
            </Suspense>
        </div>
    );
};

export default TodosPage;