import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { DeleteTaskForm } from "../forms/DeleteTaskForm";

import { cn } from '@/lib/utils/mergeCss'

function DeleteTask({ children, className,category, todo, uid }) {
    return (
        <Dialog>
            <DialogTrigger className="bg-neutral-500 text-white px-2 py-0.5 rounded w-full">Delete</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
                    <DeleteTaskForm category={category} todo={todo} uid={uid}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export { DeleteTask };