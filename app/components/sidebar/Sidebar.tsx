import "./Sidebar.scss";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar rounded-b-xl h-[fit-content]">
      <h3 className="sidebar-title">Categories:</h3>
      <ul className="sidebar-category  gap-6 list-none  ">
        <li>
          <Link href="/iPhone">iPhone</Link>
        </li>
        <li>
          <Link href="/Watch">Watch</Link>
        </li>
        <li>
          <Link href="/Macbook">Macbook</Link>
        </li>
      </ul>
    </div>
  );
}
