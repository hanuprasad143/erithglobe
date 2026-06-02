"use client";

import React from "react";
import Link from "next/link";
import { IPagesDropdown, ICategory } from "@/types/menu-d-t";

import { usePathname } from "next/navigation";

type IProps = {
  pages_dropdown?: IPagesDropdown[];
  categories?: ICategory[];
};

export default function NavPagesDropdown({
  pages_dropdown,
  categories,
}: IProps) {
  const pathname = usePathname();
  return (
    <div className="megamenu-demo-fullwidth p-relative">
      <div className="tp-megamenu-fullwidth-list-wrapper">
        <div className="d-flex flex-wrap" style={{ gap: "60px" }}>
          {/* ================= BACKEND DATA ================= */}
          {categories && categories.length > 0
            ? categories.map((category) =>
                (category.subcategories && category.subcategories.length > 0
                  ? category.subcategories
                  : [
                      {
                        id: `fallback-${category.id}`,
                        name: category.name,
                        link: null,
                        products: [],
                      },
                    ]
                ).map((sub) => {
                  // ✅ Sort by menu_order
                  const sortedProducts = (sub.products || []).sort(
                    (a, b) => (a.menu_order || 0) - (b.menu_order || 0),
                  );

                  if (sortedProducts.length === 0) return null;
                  // Split into columns of 11
                  const columns: (typeof sortedProducts)[] = [];
                  for (let i = 0; i < sortedProducts.length; i += 11) {
                    columns.push(sortedProducts.slice(i, i + 11));
                  }

                  return (
                    <div key={sub.id} style={{ minWidth: "180px" }}>
                      <div className="tp-megamenu-fullwidth-list">
                        {/* Subcategory Title */}
                        <h4
                          className="tp-megamenu-fullwidth-title"
                          style={{
                            marginBottom: "15px",
                            fontSize: "15px",
                            color: "#292929",
                          }}
                        >
                          {sub.link ? (
                            <Link
                              href={sub.link}
                              target={
                                sub.link.startsWith("http") ? "_blank" : "_self"
                              }
                              rel={
                                sub.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              style={{
                                cursor: "pointer",
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <span>{sub.name}</span>
                          )}
                        </h4>

                        {/* Products */}
                        <div
                          className="d-flex"
                          style={{ gap: "40px", lineHeight: "1.5" }}
                        >
                          {columns.map((column, index) => (
                            <ul key={index}>
                              {column.map((product) => {
                                const isExternal =
                                  product.link?.startsWith("http");
                                const href = product.link
                                  ? product.link
                                  : `/products/${product.slug}`;
                                const isActive =
                                  pathname === href ||
                                  pathname === `/${product.slug}` ||
                                  pathname.endsWith(product.slug);
                                return (
                                  <li key={product.id}>
                                    {/* <Link
                                      className="tp-product-link"
                                      style={{ fontSize: "12px" }}
                                      href={href}
                                      target={isExternal ? "_blank" : "_self"}
                                      rel={
                                        isExternal
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                    >
                                      {product.name}
                                    </Link> */}

                                    <Link
                                      className={`tp-product-link ${isActive ? "active-menu-item" : ""}`}
                                      style={{
                                        fontSize: "12px",
                                        color: isActive ? "#1d3a72" : "",
                                        fontWeight: isActive ? "600" : "400",
                                      }}
                                      href={href}
                                      target={isExternal ? "_blank" : "_self"}
                                      rel={
                                        isExternal
                                          ? "noopener noreferrer"
                                          : undefined
                                      }
                                    >
                                      {product.name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }),
              )
            : /* ================= FALLBACK STATIC ================= */
              pages_dropdown?.map((pd) => {
                const sortedMenus = [...pd.dropdown_menus].sort(
                  (a, b) => a.id - b.id,
                );

                const columns: (typeof sortedMenus)[] = [];
                for (let i = 0; i < sortedMenus.length; i += 6) {
                  columns.push(sortedMenus.slice(i, i + 6));
                }

                return (
                  <div key={pd.id} style={{ minWidth: "220px" }}>
                    <div className="tp-megamenu-fullwidth-list">
                      {/* Title */}
                      <h4
                        className="tp-megamenu-fullwidth-title"
                        style={{
                          marginBottom: "15px",
                          fontSize: "15px",
                          color: "#292929",
                        }}
                      >
                        {pd.title}
                      </h4>

                      {/* Items */}
                      <div
                        className="d-flex"
                        style={{ gap: "40px", lineHeight: "1.5" }}
                      >
                        {columns.map((column, index) => (
                          <ul key={index}>
                            {column.map((sm) => (
                              <li key={sm.id}>
                                <Link
                                  className="tp-product-link"
                                  style={{ fontSize: "12px" }}
                                  href={sm.link}
                                >
                                  {sm.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
