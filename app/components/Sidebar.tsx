import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" bg-gray-300 h-[fit-content]">
      <h3>Categories:</h3>
      <ul className="flex gap-6 list-none  ">
        <li className="hover:text-sky-400">
          <Link href="/iphone">iPhone</Link>
        </li>
        <li className="hover:text-sky-400">
          <Link href="/watch">Watch</Link>
        </li>
        <li className="hover:text-sky-400">
          <Link href="/macbook">Macbook</Link>
        </li>
      </ul>
    </div>
  );
}
