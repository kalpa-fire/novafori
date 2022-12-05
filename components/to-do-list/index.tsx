import React from "react";

interface Todo {
    text: string, 
    completed: boolean,
}    

export default function ToDoList() {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [newTodo, setNewTodo] = React.useState<string>('');
    const addTodo = () => {
        setTodos(t => [...t, { text: newTodo, completed: false } ])
        setNewTodo('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
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
                <>
                    {todos.filter(item => !item.completed).map(item=>(item.text))}
                </>
            </section>
            <section aria-labelledby="to-do-completed">
                <h2 id="to-do-completed">Completed</h2>
            </section>
        </section>
        
    )
}