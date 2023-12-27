import Link from "next/link";

import "./Header.scss";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="logo font-bold text-2xl cursor-pointer">Tech-MiniShop</h1>
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
        </div>
      </div>
      <ButtonLink href="/login">Login</ButtonLink>
    </div>
  );
}
