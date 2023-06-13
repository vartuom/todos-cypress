import { FormControlLabel, Checkbox } from '@mui/material'
import { ITodoItem } from '../../types/types'
import { useAppDispatch } from '../../store/store'
import { toggleTodo } from '../../store/todos.slice'
import s from './TodoItem.module.scss'

interface ITodoItemProps {
    todo: ITodoItem
}
export const TodoItem = ({ todo }: ITodoItemProps) => {
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(toggleTodo(todo.uuid))
    }
    return (
        <div className={s.item}>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={todo.isDone}
                        onChange={handleClick}
                    />
                }
                label={<p>{todo.text}</p>}
            />
        </div>
    )
}
