import { Heading, Title } from "@/components/headings";
import { Container } from "@/components/layout/container";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FormControl, Label, Input } from "@/components/forms";
import { Button } from "@/components/buttons/Button";
import {EmailandPasswordForm, TermsOfUse, SignInOptions} from "@/components/forms";

import {
	ProviderButton,
	ProviderLabel,
} from "@/components/forms/ProviderButton";

async function SignUpPage({ children }) {
	return (
		<>
			<main className=" mt-24 py-24  bg-zinc-100">
				<section className="max-w-lg py-20 mx-auto bg-white rounded-md border border-zinc-200 px-8">
					<Heading>
						<Title as="h2" className="text-2xl font-semibold text-zinc-700 mb-12"> Create an account</Title>
					</Heading>
					<Container className="flex gap-x-4">
						<ProviderButton className=" flex w-full items-center justify-center gap-x-2.5 border border-zinc-300 py-2.5">
							<FaGithub className="h-6 w-6 rounded-lg" />
							<ProviderLabel>Google</ProviderLabel>
						</ProviderButton>
						<ProviderButton className=" flex w-full items-center justify-center gap-x-2.5 rounded-lg border border-zinc-300 py-2.5">
							<FaGoogle className="h-6 w-6" />
							<ProviderLabel>Github</ProviderLabel>
						</ProviderButton>
					</Container>
					<Container className="flex items-center my-12">
						<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
						<div className="px-7 text-center text-gray-500 dark:text-gray-400">or</div>
						<div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
					</Container>
					<EmailandPasswordForm/>
					<SignInOptions className='my-9 mx-9'/>
					<TermsOfUse/>
				</section>
			</main>
		</>
	);
}

export default SignUpPage;
