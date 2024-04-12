'use client'

import { cn } from '@/lib/utils/mergeCss'
import { FormControl, Label, Input } from '.';
import { Button } from '../buttons/Button';
import { signUpAction } from '@/actions/signUpAction';

function EmailandPasswordForm({ children, className }) {
    return (
        <form action={signUpAction} className={cn('space-y-8', className)}>
            <FormControl className='flex flex-col'>
                <Label forHtml='email'>
                    Enter Email address
                </Label>
                <Input id='email' type='text' name='email' placeholder='jane_doe@gmail.com'></Input>
            </FormControl>
            <FormControl className='flex flex-col'>
                <Label forHtml='password'>
                    Password
                </Label>
                <Input id='password' type='text' name='password' placeholder=''></Input>
            </FormControl>
            <FormControl className='flex flex-col mt-12'>
                <Button className='w-full'>Create Your Account</Button>
            </FormControl>
        </form>
    )
}

export default EmailandPasswordForm;