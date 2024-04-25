'use client'
import { useFormState } from 'react-dom'
import { useState } from 'react';
import { cn } from '@/lib/utils/mergeCss'
import { FormControl, Input, Label } from '.';
import { Button } from '../buttons/Button';
import { updateAction } from '@/actions/updateTaskAction';
import { toast } from 'sonner';

const initialState = {
    message: 'init'
}

function UpdateTaskForm({ uid, payload, className }) {
    const [state, formAction] = useFormState(updateAction, initialState)
    const [category, setCategory] = useState(payload.category)
    const [todo, setTodo] = useState(payload.todo)

    function handleInput(e) {
        switch (e.currentTarget.name) {
            case 'category':
                setCategory(e.currentTarget.value)
                break
            case 'todo':
                setTodo(e.currentTarget.value)
                break
            default:
                null
        }
    }


    if (state.message === 'success') {
        toast(
            <aside className='bg-green-500 text-lime-50 rounded-lg px-5 py-6 text-center'>
                <p>Your task was updated successfully!</p>
            </aside>
        )
    }
    return (
        <section>
            <header>
                <h2 className='text-xs font-light'>
                    Form State: <span className='font-bold text-green-500'>{state.message}</span>
                </h2>
            </header>
            <form action={formAction} className={cn('space-y-5 bg-white py-8 px-4', className)}>
                <FormControl className='flex flex-col'>
                    <Input type='hidden' id='uid' name='uid' value={uid} />
                </FormControl>
                <FormControl className='flex flex-col'>
                    <Label htmlFor='category'>Category</Label>
                    <Input onInput={handleInput} id='category' name='category' value={category} />
                </FormControl>
                <FormControl className='flex flex-col'>
                    <Label htmlFor='todo'>Task</Label>
                    <Input onInput={handleInput} id='todo' name='todo' value={todo} />
                </FormControl>
                <FormControl className='flex flex-col pt-3'>
                    <button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Update Task</button>
                </FormControl>
            </form>
        </section>
    )
}

export { UpdateTaskForm };