import ToDoItem from './to-do-item';
import { Todo } from './types';
import styles from './to-do.module.css';

interface SubListProps {
    items: Todo[];
    toggleCompleteFunction: (id: string) => void;
    filterFunction: (item: Todo) => boolean;
}

export default function SubList({items, toggleCompleteFunction, filterFunction }: SubListProps){
    return <ul className={styles.sublist}>
        {items.filter(filterFunction).map(({completed, id, text})=>(
            <li key={id}>
                <ToDoItem completed={completed} text={text} id={id} toggleComplete={()=>toggleCompleteFunction(id)}/>
            </li>    
        ))}
    </ul>
}