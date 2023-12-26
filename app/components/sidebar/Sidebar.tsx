import "./Sidebar.scss";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar rounded-b-xl h-[fit-content]">
      <h3 className="sidebar-title">Categories:</h3>
      <ul className="sidebar-category  gap-6 list-none  ">
        <li className="sidebar-category-product">
          <Link href="/iphone">iPhone</Link>
        </li>
        <li className="sidebar-category-product">
          <Link href="/watch">Watch</Link>
        </li>
        <li className="sidebar-category-product">
          <Link href="/macbook">Macbook</Link>
        </li>
      </ul>
    </div>
  );
}
