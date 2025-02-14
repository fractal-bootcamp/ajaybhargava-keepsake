import { type RouteConfig, index, prefix } from "@react-router/dev/routes";

export default [
    index("routes/bouncer.tsx"),
    ...prefix("/safe", [
		index("routes/safe/home.tsx"),
	]),
] satisfies RouteConfig;
