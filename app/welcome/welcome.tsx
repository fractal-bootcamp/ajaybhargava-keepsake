import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {
	SignedOut,
	SignInButton,
	SignedIn,
	UserButton,
} from "@clerk/react-router";

export function Welcome() {
	return (
		<main className="relative border p-8 max-w-screen-md w-full mx-auto">
			<div className="absolute top-4 right-4">
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-4xl font-bold">Keepsake</h1>
				<p className="text-lg">
					If you want to store a memory when you're logged out, you're NGMI.
					🫵😂
				</p>
			</div>
		</main>
	);
}
