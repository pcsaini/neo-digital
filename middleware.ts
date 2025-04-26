import { auth } from "./auth";
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ['/admin/auth/signin', '/admin/auth/error'] as const;

const FILE_EXTENSIONS = [
    '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico',
    '.css', '.js', '.json', '.map',
    '.woff', '.woff2', '.ttf', '.eot',
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt',
    '.mp3', '.mp4', '.webm', '.ogg', '.wav',
    '.xml', '.zip', '.rar'
];

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

function isPageRequest(path: string): boolean {
    const hasFileExtension = FILE_EXTENSIONS.some(ext => path.endsWith(ext));

    return !hasFileExtension &&
        !path.includes('/_next/') &&
        !path.includes('/api/') &&
        !path.includes('/favicon.ico');
}

export default auth(async (req) => {
    const { nextUrl, auth } = req;
    const pathname = nextUrl.pathname;
    const isPublicRoute = isPublicPath(pathname);
    const isAdminRoute = pathname.startsWith('/admin');
    const isPage = isPageRequest(pathname);

    if (!isAdminRoute && isPage) {
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        const userAgent = req.headers.get("user-agent") || "unknown";

        fetch(`${nextUrl.origin}/api/track-visitor`, {
            method: 'POST',
            body: JSON.stringify({
                ipAddress: ip,
                userAgent,
                route: pathname,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch(() => {});
    }

    if (!isAdminRoute) {
        return NextResponse.next();
    }

    const user = auth?.user;
    const isLoggedIn = !!user;

    if (isPublicRoute && isLoggedIn && pathname.startsWith('/admin/auth')) {
        return NextResponse.redirect(new URL('/admin/dashboard', nextUrl));
    }

    if (!isPublicRoute && !isLoggedIn) {
        const callbackUrl = encodeURIComponent(nextUrl.href);
        return NextResponse.redirect(new URL(`/admin/auth/signin?callbackUrl=${callbackUrl}`, nextUrl));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};