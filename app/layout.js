import { Navbar } from '@/components/navbar/Navbar'
import '@/css/globals.css'
import { Toaster } from "@/components/ui/sonner"


export const metadata = {
	title: 'To Do List App',
	description: 'A To Do List app created using Nextjs and React by Clem Omotosho',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Navbar className="bg-blue-100" />
				{children}
				<Toaster
					position='top-center'
					visibleToasts={1}
					toastOptions={{
						unstyled: true,
					}} />
			</body>
		</html>
	)
}
