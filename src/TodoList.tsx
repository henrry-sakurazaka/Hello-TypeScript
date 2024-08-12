import React from "react";
import type { Todo } from './Todo';

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {

    return (
        <>
            <div className="parent">
                {todos.map(todo => {
                    return (
                        <div key={todo.id} className="flex-container">
                                <span>{todo.text}</span>
                                <button className="comp-btn" onClick={() => onDelete(todo.id)}>complete</button>
                        </div>        
                    )
                })}
            </div>
        </>
    )
}

export default TodoList;