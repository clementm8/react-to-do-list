'use client'
import { useFormState } from 'react-dom'
import { cn } from '@/lib/utils/mergeCss'
import { FormControl, Input, Label } from '.';
import { DialogClose } from '../ui/dialog';
import { Button } from '../buttons/Button';
import { deleteAction } from '@/actions/deleteTaskAction';
import { toast } from 'sonner';

const initialState = {
    message: 'init'
}

function DeleteTaskForm({ className, todo, category, uid }) {
    const [state, formAction] = useFormState(() => deleteAction(uid), initialState)
    if (state.message === 'success') {
        toast(
            <aside className='bg-green-500 text-lime-50 rounded-lg px-5 py-6 text-center'>
                <p>Your task was deleted successfully!</p>
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
                    <Label htmlFor='category'>Category: {category}</Label>
                </FormControl>
                <FormControl className='flex flex-col'>
                    <Label htmlFor='task'>Task: {todo}</Label>
                </FormControl>
                <FormControl className='flex flex-col pt-3'>
                    <button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Delete Task</button>
                </FormControl>
            </form>
            {state.message === 'success' && <DialogClose />} 
        </section>
    )
}

export { DeleteTaskForm };