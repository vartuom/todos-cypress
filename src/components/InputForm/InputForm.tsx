import { TextField } from '@mui/material'
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from 'uuid'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import { useAppDispatch } from '../../store/store';
import { addTodo } from '../../store/todos.slice';
import s from './InputForm.module.scss'

export const InputForm = () => {
    const dispatch = useAppDispatch()

    const schema = yup.object({
        todo: yup
            .string().trim().required("Это обязательное поле")
    });
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            todo: '',
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    const onSubmit: SubmitHandler<{ todo: string }> = (data) => {
        dispatch(addTodo(data.todo))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
                name="todo"
                control={control}
                render={({ field }) => (
                    <TextField
                        inputProps={{ "data-cy": "inputTextField" }}
                        autoFocus
                        fullWidth
                        label='Что нужно сделать?'
                        error={!!errors?.todo}
                        helperText={
                            errors?.todo ? errors?.todo?.message : null
                        }
                        {...field}
                    />
                )}
            />
            <button
                data-cy='submitButton'
                type='submit'
                disabled={!isValid}
                className={`${s.submitButton} ${!isValid && s.submitButton_disabled}`}>
                <PlaylistAddIcon sx={{ fontSize: '42px' }} />
            </button>
        </form>
    )
}
