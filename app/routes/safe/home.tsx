import { createClerkClient } from "@clerk/react-router/api.server";
import type { Route } from "../+types/bouncer";
import { getAuth } from "@clerk/react-router/ssr.server";
import { redirect, useLoaderData } from "react-router";
import { Keepsake } from "../../components/keepsake";
import type { LoaderData } from "../../types/user";

export async function loader(args: Route.LoaderArgs) {
	const { userId } = await getAuth(args);

	// Protect the route by checking if the user is signed in
	if (!userId) {
		return redirect("/bouncer");
	}

	// Instantiate the Backend SDK and get the user's full `Backend User` object
	const user = await createClerkClient({
		secretKey: process.env.CLERK_SECRET_KEY,
	}).users.getUser(userId);

	return {
		firstName: user.firstName,
		lastName: user.lastName,
		id: user.id,
	} satisfies LoaderData;
}

export default function Home() {
	const data = useLoaderData<typeof loader>();
	return <Keepsake user={data} />;
}
