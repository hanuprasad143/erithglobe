export type IPagesDropdown = {
  id: number;
  title: string;
  dropdown_menus: {
    id: number;
    title: string;
    link: string;
  }[];
};

export type IHomeDropdown = {
  id: number;
  title: string;
  link: string;
  img: string;
};

export type IDropdownMenus = {
  id: number;
  title: string;
  link: string;
  new?: boolean;
};

export type IMenu = {
  id: number;
  title: string;
  link: string;
  home_dropdown?: IHomeDropdown[];
  dropdown_menus?: IDropdownMenus[];
  sm_mega_menus?: IDropdownMenus[];
  pages_dropdown?: IPagesDropdown[];
};

export type ICourseDP = {
  id: number;
  title: string;
  dropdown_menus: IDropdownMenus[];
};
export type IAcademicDP = {
  id: number;
  title: string;
  dropdown_menus: IDropdownMenus[];
};
export type IDashboardDP = {
  id: number;
  title: string;
  link: string;
  dropdown_menus: IDropdownMenus[];
};
// menu data type 2
export type IMenuDT2 = {
  id: number;
  title: string;
  link: string;
  home_dropdown?: IHomeDropdown[];
  academic_dropdown?: IAcademicDP[];
  course_dropdown?: ICourseDP[];
  dashboard_dropdown?: IDashboardDP[];
  pages_dropdown?: IPagesDropdown[];
  dropdown_menus?: IDropdownMenus[];
};

export interface IProduct {
  // id: number;
  id: number | string;
  name: string;
  slug: string;
  // link: string;
  link: string | null; // ✅ can be null
  menu_order?: number; // ✅ add this too
}

export interface ISubcategory {
  // id: number;
  id: number | string; // ✅ backend sends "no-sub-3" strings
  name: string;
  products: IProduct[];
  link?: string | null;
}

export interface ICategory {
  id: number;
  name: string;
  subcategories: ISubcategory[];
  // link: string;
  link?: string | null; // ✅ was required string, backend doesn't send this
}
