import React from "react";
import Link from "next/link";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import { getMenu } from "@/lib/api";
import { ICategory } from "@/types/menu-d-t";

type IProps = {
  sm_mega_title?: string;
};

/* ✅ Static links for categories */
const categoryLinks: Record<number, string> = {
  1: "/allproducts",
  2: "#",
  3: "#",
  4: "/resources",
};

export default async function NavMenus({ sm_mega_title }: IProps) {
  void sm_mega_title;
  const categories: ICategory[] = await getMenu();

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="has-dropdown tp-static">
            <Link
              href={categoryLinks[category.id] || "#"}
              style={{
                color: "#292929",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              <span className="menu-text">{category.name}</span>
            </Link>

            <div className="tp-megamenu-main tp-megamenu-fullwidth">
              <NavPagesDropdown categories={[category]} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
