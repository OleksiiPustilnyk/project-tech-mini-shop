"use client";

import Link from "next/link";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import { useSession, signOut } from "next-auth/react";

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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contacts">Contcts</Link>
            </li>
          </ul>
          {session?.data && <Link href="/profile">Profile</Link>}
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
        </div>
      </div>
    </>
  );
};
export default Navigation;
