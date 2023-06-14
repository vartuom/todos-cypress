import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { InputForm } from '../InputForm/InputForm'
import { TodoList } from '../TodoList/TodoList'
import s from './App.module.scss'
import { dropComplited } from '../../store/todos.slice'

export const App = () => {
    const todos = useAppSelector(store => store.todos.todos)
    const [tab, setTab] = useState<'both' | 'finished' | 'pending'>('both')
    const dispatch = useAppDispatch()

    return (
        <div className={s.wrapper}>
            <InputForm />
            <nav>
                <ul className={s.controls}>
                    <li>
                        <button
                            className={`${s.button} ${tab === 'both' && s.button_active}`}
                            onClick={() => setTab('both')}
                        >
                            {`Все (${todos.length})`}
                        </button>
                    </li>                    
                    <li>
                        <button
                            className={`${s.button} ${tab === 'pending' && s.button_active}`}
                            onClick={() => setTab('pending')}
                        >
                            {`Активные (${todos.filter(todo => !todo.isDone).length})`}
                        </button>
                    </li>
                    <li>
                        <button
                            className={`${s.button} ${tab === 'finished' && s.button_active}`}
                            onClick={() => setTab('finished')}
                        >
                            {`Завершенные (${todos.filter(todo => todo.isDone).length})`}
                        </button>
                    </li>
                </ul>
            </nav>
            {tab === 'both' && <TodoList todos={todos} />}
            {tab === 'finished' && <TodoList todos={todos.filter((todo) => todo.isDone === true)} />}
            {tab === 'pending' && <TodoList todos={todos.filter((todo) => todo.isDone === false)} />}
            {(tab === 'finished' || tab === 'both') && todos.filter(todo => todo.isDone).length > 0
                && <button className={s.clearButton} onClick={() => dispatch(dropComplited())}>
                    Удалить сделанные
                </button>}
        </div>
    )
}
