import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, localePrefix } from './config'
// import withAuth from 'next-auth/middleware'
// import { NextRequest } from 'next/server'

const publicPages = ['/', '/login', '/about', '/contacts']

export default createMiddleware({
    defaultLocale: 'en',
    locales,
    pathnames,
    localePrefix,
    localeDetection: false,
})

// const authMiddleware = withAuth(
//     // Note that this callback is only invoked if
//     // the `authorized` callback has returned `true`
//     // and not for pages listed in `pages`.
//     function onSuccess(req) {
//         return intlMiddleware(req);
//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => token != null,
//         },
//         pages: {
//             signIn: '/login',
//         },
//     },
// );

// export default function middleware(req: NextRequest) {
//     const publicPathnameRegex = RegExp(
//         `^(/(${locales.join('|')}))?(${publicPages
//             .flatMap((p) => (p === '/' ? ['', '/'] : p))
//             .join('|')})/?$`,
//         'i',
//     );
//     const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//     if (isPublicPage) {
//         return intlMiddleware(req);
//     } else {
//         return (authMiddleware as any)(req);
//     }
// }

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "de"],
//   // Used when no locale matches
//   defaultLocale: "en",
//   pathnames,
//   localePrefix,
// });

export const config = {
    matcher: ['/', '/(uk|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
