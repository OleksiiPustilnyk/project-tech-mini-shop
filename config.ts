import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "uk"] as const;

export const pathnames = {
  "/": "/",
  "/about": "/about",
  "/contacts": "/contacts",
  "/profile": "/profile",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
// export const localePrefix = "as-needed";
export const localePrefix = undefined;

export const localeDetection = false;

export type AppPathnames = keyof typeof pathnames;
