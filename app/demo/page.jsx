import { ToDoList } from "@/components/todos/ToDoList"
import { CreateTask } from "@/components/dialogs/CreateTask"
import { ToDoListItem } from "@/components/todos/ToDoListItem"

import { getToDoItems } from "@/lib/firebase/config/api"

async function DemoPage({ children }) {
    const payload = await getToDoItems()
    const tasks = Object.entries(payload.todos).reverse()
    console.log(tasks[0][0])


    return (
        <>
            <header className="text-center pt-28">
                <h2 className="text-5xl text-slate-900">Demo Page</h2>
            </header>
            <main className="max-w-md mx-auto py-24">
                <ToDoList className=" space-y-4 p-4 h-[478px] max-h-[478px] overflow-y-scroll shadow-sm rounded-md border border-neutral-200">
                    {tasks.map((task) => (
                        <ToDoListItem key={task[0]} payload={task[1]} uid={task[0]} />
                    ))}
                </ToDoList>
                <CreateTask />
            </main>
        </>
        // <>
        //     <header className="text-center pt-28">
        //         <h2 className="text-5xl text-slate-900">Demo Page Component</h2>
        //     </header>
        //     <main className="max-w-md mx-auto py-24">
        //         <section className="bg-white border border-black p-3">
        //             <header className="mb-10">
        //                 <h2>To Do List Display</h2>
        //             </header>

        //             <aside className="bg-neutral-100 flex justify-between border border-black py-2.5">
        //                 <header>
        //                     <h3>To Do Item</h3>
        //                 </header>
        //                 <footer className="flex flex-col text-xs text-neutral-500">
        //                     <button>edit</button>
        //                     <button>delete</button>
        //                 </footer>
        //             </aside>
        //         </section>
        //     </main>
        // </>
    )
}

export default DemoPage