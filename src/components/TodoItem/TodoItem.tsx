import { FormControlLabel, Checkbox, checkboxClasses } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ITodoItem } from '../../types/types'
import { useAppDispatch } from '../../store/store'
import { removeTodo, toggleTodo } from '../../store/todos.slice'
import s from './TodoItem.module.scss'

interface ITodoItemProps {
    todo: ITodoItem
}
export const TodoItem = ({ todo }: ITodoItemProps) => {
    const dispatch = useAppDispatch()
    const handleCheckMark = () => {
        dispatch(toggleTodo(todo.uuid))
    }
    const handleDelete = () => {
        dispatch(removeTodo(todo.uuid))
    }
    return (
        <div className={s.item}>
            <div className={s.wrapper}>
                <FormControlLabel
                    sx={{ width: '100%' }}
                    control={
                        <Checkbox
                            checked={todo.isDone}
                            onChange={handleCheckMark}
                        />
                    }
                    label={
                        <p
                            className={`${s.label} ${todo.isDone && s.label_type_done}`}
                            data-cy="todo-label">
                            {todo.text}
                        </p>
                    }
                />
            </div>
            <div className={s.wrapper}>
                <button className={s.button} onClick={handleDelete} data-cy="delete-button">
                    <DeleteIcon sx={{ color: '#1976d2' }} />
                </button>
            </div>
        </div>
    )
}
