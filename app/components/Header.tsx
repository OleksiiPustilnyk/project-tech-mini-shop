import Link from "next/link";

// const links = ["Home", "About", "Contacts"];

export default function Header() {
  return (
    <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      <h1 className=" text-yellow-400 font-bold text-2xl cursor-pointer">
        Tech-MiniShop
      </h1>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <ul className="flex gap-6 list-none text-yellow-400  ">
            <li className="hover:text-sky-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/pages/about">About</Link>
            </li>
            <li className="hover:text-sky-400">
              <Link href="/pages/contacts">Contcts</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <ul className="flex gap-6 list-none">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
