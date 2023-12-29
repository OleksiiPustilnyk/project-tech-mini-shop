import Link from "next/link";

import "./Header.scss";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className="logo font-bold text-2xl cursor-pointer">Tech-MiniShop</h1>
      <Navigation />
    </div>
  );
}
