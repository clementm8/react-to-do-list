import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { UpdateTaskForm } from "../forms/UpdateTaskForm";

import { cn } from '@/lib/utils/mergeCss'

function UpdateTask({ children, className, uid, payload }) {
    return (
        <Dialog>
            <DialogTrigger className="bg-neutral-500 text-white px-2 py-0.5 rounded w-full">Edit</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                    <UpdateTaskForm uid={uid} payload={payload} />
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export { UpdateTask };