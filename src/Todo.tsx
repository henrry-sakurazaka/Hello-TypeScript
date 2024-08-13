import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import './Todo.css';

export type Todo = {
    id: number;
    text: string;
}


const Todo: React.FC = () => {

    const [ todos, setTodos ] = useState<Todo[]>([
        { id: 0, text: 'Book a hotel'},
        { id: 1, text: 'Buy a gift'},
        { id: 2, text: 'Call my boyfriend'}
    ]);
    const [ inputText, setInputText ] = useState<string>('');
    

    const createTask: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        setInputText(e.target.value);
    }

    const addTask = () => {
        if (inputText.trim() === '') return; // 空のタスクは追加しない
        const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0;
        setTodos([...todos, { id: newId, text: inputText }]);
        setInputText('');
    }

    const deleteTask: (id: number) => void = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ));
    }

    return (
        <div className="container">
            <div className="inner-container">
                <div className="border-container">
                    <div className="title">
                        <h1>Hello TypeScript</h1>
                            <p>Hello, and thank you for visiting. This app is a simple Todo app built
                            with TypeScript. You can check the code details via the link to GitHub</p>
                            <a href="https://github.com/henrry-sakurazaka/Hello-TypeScript/tree/main/src">https://github.com/henrry-sakurazaka/Hello-TypeScript</a> 
                           
                    </div>
                </div>
                    <form className="form-container" action="#">
                        <input type="text" value={inputText} onChange={createTask}/>
                        <button className="task-btn" onClick={addTask}>Add</button>
                    </form>
                <div className="todo-list">
                    <TodoList  todos={todos} onDelete={deleteTask}/>
                </div>
            </div>    
       </div>
      
    )
}

export default Todo;