import React from 'react';
import uuid from 'react-uuid';
import ToDoItem from './to-do-item';
import { Todo } from './types';

export default function ToDoList() {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [newTodo, setNewTodo] = React.useState<string>('');
    const addTodo = () => {
        setTodos(t => [...t, { text: newTodo, completed: false, id: uuid() } ])
        setNewTodo('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const toggleComplete = (id: string) => {
        const itemIndex = todos.findIndex(item => item.id === id);
        setTodos(t => [...t.slice(0, itemIndex), { ...t[itemIndex],  completed: !t[itemIndex].completed}, ...t.slice(itemIndex + 1)]);
    }

    return (
        <section aria-labelledby="to-do-title">
            <h1 id="to-do-title">To-do List</h1>
            <form>
            <label>
                Add task
                <input type="text" value={newTodo} onChange={handleInputChange}/>
            </label>
            <button type="button" onClick={addTodo}>Add</button>
            </form>
            <section aria-labelledby="to-do-pending">
                <h2 id="to-do-pending">Pending</h2>
                {todos.filter(item => !item.completed).map(({completed, id, text})=>(<ToDoItem completed={completed} text={text} id={id} toggleComplete={()=>toggleComplete(id)}/>))}
            </section>
            <section aria-labelledby="to-do-completed">
                <h2 id="to-do-completed">Completed</h2>
                {todos.filter(item => item.completed).map(({completed, id, text})=>(<ToDoItem completed={completed} text={text} id={id} toggleComplete={()=>toggleComplete(id)}/>))}
            </section>
        </section>
        
    )
}