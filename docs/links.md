```jsx
import Link from 'next/link'

import {cn} from '@/lib/utils/mergeCss'

export function Anchor({children, path = '/signup', className}) {
	return (
		<Link href={path} className={cn('', className)}>
			{children}
		</Link>
	)
}

export function AnchorContents({children, className}) {
	return <figure className={cn('', className)}>{children}</figure>
}

export function AnchorIcon({children, icon, className}) {
	return <>{icon}</>
}

export function AnchorLabel({children, label, className}) {
	return <figcaption className={cn('', className)}> {label}</figcaption>
}
```
