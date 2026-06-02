export type IEventDT = {
  id: number;
  // date: {
  //   day: string;
  //   month: string;
  //   year: number;
  // };
  title: string;
  // time: string;
  location: string;
  image: string;
  linkText: string;
  banner_image?: string; // Optional field for dynamic image handling 
};
