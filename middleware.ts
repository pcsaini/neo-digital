import {auth} from "./auth";
import {NextResponse} from "next/server";

const PUBLIC_ROUTES = ['/admin/auth/signin', '/admin/auth/error'] as const;

function matchesRoute(path: string, routePattern: string): boolean {
    if (path === routePattern) return true;

    if (routePattern.includes('[')) {
        const routePrefix = routePattern.substring(0, routePattern.indexOf('['));
        const routeSuffix = routePattern.substring(routePattern.lastIndexOf(']') + 1);

        return path.startsWith(routePrefix) && path.endsWith(routeSuffix);
    }

    return false;
}

function isPublicPath(path: string): boolean {
    return PUBLIC_ROUTES.some(route => matchesRoute(path, route));
}

export default auth((req) => {
    const {nextUrl, auth} = req;
    const pathname = nextUrl.pathname;

    if (!pathname.startsWith('/admin')) {
        return NextResponse.next();
    }

    const user = auth?.user;
    const isLoggedIn = !!user;

    const isPublicRoute = isPublicPath(pathname);

    if (isPublicRoute && isLoggedIn && pathname.startsWith('/admin/auth')) {
        const redirectTarget = '/admin/dashboard';
        return NextResponse.redirect(new URL(redirectTarget, nextUrl));
    }

    if (!isPublicRoute && !isLoggedIn) {
        const callbackUrl = encodeURIComponent(nextUrl.href);
        return NextResponse.redirect(new URL(`/admin/auth/signin?callbackUrl=${callbackUrl}`, nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        '/admin/:path*',
    ],
};