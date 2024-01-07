"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import NavigationLink from "./NavigationLink";

type Props = {};
const Navigation = (props: Props) => {
  const session = useSession();

  console.log(session);
  return (
    <>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <ul className="menu-list flex gap-6 list-none   ">
            <li>
              <NavigationLink href="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink href="/about">About</NavigationLink>
            </li>
            <li>
              <NavigationLink href="/contacts">Contcts</NavigationLink>
            </li>
            <li>
              {session?.data && (
                <NavigationLink href="/profile">Profile</NavigationLink>
              )}
            </li>
          </ul>
        </div>
      </div>
      {session?.data ? (
        <Link
          className="button"
          href="#"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          SignOut
        </Link>
      ) : (
        <Link className="button" href="/signin">
          SignIn
        </Link>
      )}
    </>
  );
};
export default Navigation;
