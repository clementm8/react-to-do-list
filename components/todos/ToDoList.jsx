import {cn} from '@/lib/utils/mergeCss'
import { Heading, Title } from '../headings';
 
function ToDoList({children,className}) {
    return (
       <section className={cn('bg-white p-3 border min-h-[460px] overflow-y-auto',className)}>
        {children}
       </section>
    )
}

export {ToDoList };