import type { LoaderData } from "../types/user";

export async function Keepsake({ user }: { user: LoaderData }) {
	return (
		<main className="flex flex-col gap-4">
			<h1 className="text-2xl font-bold">Keepsake</h1>
			<p>
				Hey, {user.firstName} {user.lastName} ({user.id})
			</p>
		</main>
	);
}
