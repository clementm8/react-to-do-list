'use client'
import { useFormState } from 'react-dom'
import { cn } from '@/lib/utils/mergeCss'
import { FormControl, Input, Label } from '.';
import { Button } from '../buttons/Button';
import { addAction } from '@/actions/addTaskAction';
import { toast } from 'sonner';

const initialState = {
    message: 'init'
}

function AddTaskForm({ className }) {
    const [state, formAction] = useFormState(addAction, initialState)
    if(state.message==='success'){
        toast(
            <aside className='bg-green-500 text-lime-50 rounded-lg px-5 py-6 text-center'>
                <p>Your task was added successfully!</p>
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
                    <Label htmlFor='category'>Category</Label>
                    <Input id='category' name='category' placeholder='Enter the task category' />
                </FormControl>
                <FormControl className='flex flex-col'>
                    <Label htmlFor='task'>Task</Label>
                    <Input id='task' name='task' placeholder='Enter the new task' />
                </FormControl>
                <FormControl className='flex flex-col pt-3'>
                    <button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Add New Task</button>
                </FormControl>
            </form>
        </section>
    )
}

export { AddTaskForm };