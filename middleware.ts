import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix, localeDetection } from "./config";

export default createMiddleware({
  defaultLocale: "en",
  locales,
  pathnames,
  localePrefix,
  localeDetection,
});

export const config = {
  matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
