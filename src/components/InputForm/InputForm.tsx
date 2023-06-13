import { TextField } from '@mui/material'
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from '../../store/store';
import { addTodo } from '../../store/todos.slice';

export const InputForm = () => {
    const dispatch = useAppDispatch()

    const schema = yup.object({
        todo: yup
            .string()
            .required("Это обязательное поле")
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

    const onSubmit: SubmitHandler<{todo: string}> = (data) => {
        dispatch(addTodo(data.todo))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="todo"
                control={control}
                render={({ field }) => (
                    <TextField
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
        </form>
    )
}
