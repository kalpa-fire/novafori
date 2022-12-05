import ToDoItem from './to-do-item';
import { Todo } from './types';

interface SubListProps {
    items: Todo[];
    toggleCompleteFunction: (id: string) => void;
    filterFunction: (item: Todo) => boolean;
}

export default function SubList({items, toggleCompleteFunction, filterFunction }: SubListProps){
    return <>
        {items.filter(filterFunction).map(({completed, id, text})=>(
            <ToDoItem completed={completed} text={text} key={id} id={id} toggleComplete={()=>toggleCompleteFunction(id)}/>)
        )}
    </>
}