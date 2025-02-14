import type { Route } from "./+types/bouncer";
import { redirect } from "react-router";
import { getAuth } from "@clerk/react-router/ssr.server";

export async function loader(args: Route.LoaderArgs) {
	// Use `getAuth()` to get the user's ID
	const { userId } = await getAuth(args);

	// Protect the route by checking if the user is signed in
	if (userId) {
		return redirect("/safe");
	}
}

// biome-ignore lint/correctness/noEmptyPattern: <explanation>
export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Keepsake" },
		{
			name: "description",
			content:
				"If you want to store a memory when you're logged out, you're NGMI. 🫵😂",
		},
	];
}

export default function Bouncer({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<div className="flex flex-col items-center gap-4">
				<h1 className="text-4xl font-bold">Keepsake</h1>
				<p className="text-lg">
					If you want to store a memory when you're logged out, you're NGMI.
					🫵😂
				</p>
			</div>
		</>
	);
}
