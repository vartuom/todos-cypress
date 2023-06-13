import { ITodoItem } from "../../types/types"
import { TodoItem } from "../TodoItem/TodoItem"
import ScrollBox from "../ScrollBox/scrollBox"
import s from './TodoList.module.scss'

interface ITodoListProps {
    todos: ITodoItem[]
}
export const TodoList = ({ todos }: ITodoListProps) => {
    return (
        <>
            {todos.length === 0
                ? <p>Список дел пуст</p>
                : <ScrollBox>
                    <ul className={s.list}>
                        {todos.map((todo) => (
                            <li key={todo.uuid} className={s.item}>
                                <TodoItem todo={todo} />
                            </li>
                        ))}
                    </ul>
                </ScrollBox>}
        </>

    )
}
