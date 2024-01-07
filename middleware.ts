import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix, localeDetection } from "./config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
  localeDetection,
});

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "de"],
//   // Used when no locale matches
//   defaultLocale: "en",
//   pathnames,
//   localePrefix,
// });

export const config = {
  matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(de|en)/:path*"],
// };
