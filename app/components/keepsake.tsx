import type { LoaderData } from "../types/user";

export async function Keepsake({ user }: { user: LoaderData }) {
	return (
		<main className="flex flex-col items-center gap-4">
			<h1 className="text-4xl font-bold">Keepsake</h1>
			<p className="text-lg">
				Hey, {user.firstName} {user.lastName} ({user.id})
			</p>
		</main>
	);
}
