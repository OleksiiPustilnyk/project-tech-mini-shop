export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/iphone", "/watch", "/macbook", "/protected/:path*"],
};
