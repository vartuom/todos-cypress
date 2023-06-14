import { ITodoItem } from "../../types/types"
import { Empty } from "../Empty/Empty"
import { TodoItem } from "../TodoItem/TodoItem"
import s from './TodoList.module.scss'

interface ITodoListProps {
    todos: ITodoItem[]
}
export const TodoList = ({ todos }: ITodoListProps) => {
    return (
        <>
            {todos.length === 0
                ? <Empty />
                : <ul className={s.list}>
                    {todos.map((todo) => (
                        <li key={todo.uuid} className={s.item}>
                            <TodoItem todo={todo} />
                        </li>
                    ))}
                </ul>
            }
        </>

    )
}
