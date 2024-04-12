import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AddTaskForm } from "../forms/AddTaskForm";

import { cn } from '@/lib/utils/mergeCss'

function CreateTask({ children, className }) {
    return (
        <Dialog>
            <DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">Add New Task</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <AddTaskForm/>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export { CreateTask };