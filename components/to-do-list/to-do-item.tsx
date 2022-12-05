import { Todo } from './types';
import styles from './to-do.module.css';

interface TodoItemProps extends Todo {
    toggleComplete: () => void;
}

export default function ToDoItem({completed, text, toggleComplete}: TodoItemProps){
    return (
        <button onClick={toggleComplete} className={styles.todo_item} style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text}
        </button>
    )
}