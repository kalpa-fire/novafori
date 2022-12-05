import React from 'react';
import uuid from 'react-uuid';
import SubList from './sub-list';
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

    const componentTitleId = React.useId();
    const pendingSectionTitleId = React.useId();
    const completedSectionTitleId = React.useId();

    return (
        <section aria-labelledby={componentTitleId}>
            <h1 id={componentTitleId}>To-do List</h1>
            <form>
            <label>
                Add task
                <input type="text" value={newTodo} onChange={handleInputChange}/>
            </label>
            <button type="button" onClick={addTodo}>Add</button>
            </form>
            <section aria-labelledby={pendingSectionTitleId}>
                <h2 id={pendingSectionTitleId}>Pending</h2>
                <SubList filterFunction={item => !item.completed} items={todos} toggleCompleteFunction={toggleComplete} />
            </section>
            <section aria-labelledby={completedSectionTitleId}>
                <h2 id={completedSectionTitleId}>Completed</h2>
                <SubList filterFunction={item => item.completed} items={todos} toggleCompleteFunction={toggleComplete} />
            </section>
        </section>
        
    )
}