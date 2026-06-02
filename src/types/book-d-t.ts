export type IBookDT = {
  id: number;
  title: string;
  category: string;
  subcategory_id: number;
  name: string;
  banner_image: string;
  slug: string;
  serial_number: string;
  product_category: string;
  link?: string; // optional link field for external URLs
img: string; // optional image field for backward compatibility
  // icon support (Success Stories, Webinars, Videos, Guides, Papers)
  icon?: "bulb" | "video" | "play" | "book" | "file";

  // optional fields
  price?: number;
  tag?: string;
  image?: string;
  stock?: number;
  short_desc?: string;
  description?: string;

  additional_info?: {
    bookType?: string;
    publisher?: string;
    language?: string;
    paperback?: number;
    isbn?: string;
    published?: string;
  };

  date?: string;
};
