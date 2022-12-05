import { Todo } from "./types";

interface TodoItemProps extends Todo {
    toggleComplete: () => void;
}

export default function ToDoItem({completed, text, toggleComplete}: TodoItemProps){
    return (
        <button onClick={toggleComplete} style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text}
        </button>
    )
}