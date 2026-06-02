import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  // {
  //     id:1,
  //     title:'Home',
  //     link:'#',
  //     home_dropdown:[
  //         { id: 1, title: "University Classic", link: "/", img: "/assets/img/menu/home-1.jpg" },
  // 		{ id: 2, title: "Online Course", link: "/home-online-course", img: "/assets/img/menu/home-2.jpg" },
  // 		{ id: 3, title: "Kids Education", link: "/home-kids-education", img: "/assets/img/menu/home-3.jpg" },
  // 		{ id: 4, title: "Gym Coaching", link: "/home-gym-coaching", img: "/assets/img/menu/home-4.jpg" },
  // 		{ id: 5, title: "High School", link: "/home-high-school", img: "/assets/img/menu/home-5.jpg" },
  // 		{ id: 6, title: "Books Shop", link: "/home-books-shop", img: "/assets/img/menu/shop.jpg" },
  // 		{ id: 7, title: "Coming Soon", link: "#", img: "/assets/img/menu/coming-soon-1.jpg" },
  // 		{ id: 8, title: "Coming Soon", link: "#", img: "/assets/img/menu/coming-soon-2.jpg" },
  //     ]
  //  },

  {
    id: 1,
    title: "Products",
    link: "/allproducts",
    pages_dropdown: [
      {
        id: 1,
        title: "Gaskets",
        dropdown_menus: [
          { id: 2, title: " Metallic Gaskets ", link: "#" },
          { id: 3, title: "Gasket Sheet Material", link: "#" },
          {
            id: 4,
            title: "Non-Metallic Gaskets ",
            link: "/products",
          },
          {
            id: 5,
            title: "• CNAF and BLUE-GARD® ",
            link: "/products",
          },
          {
            id: 6,
            title: "• THERMa-PUR®",
            link: "/products",
          },
          {
            id: 7,
            title: "• Gylon®",
            link: "/products",
          },
          {
            id: 8,
            title: "• Multi-Swell™",
            link: "/products",
          },
          {
            id: 9,
            title: "• Stress Saver®",
            link: "/products",
          },
          {
            id: 10,
            title: "• Rubber",
            link: "/products",
          },
          {
            id: 11,
            title: "• Graphite",
            link: "/products",
          },

          // {id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },

      {
        id: 2,
        title: "Sealing & Isolation",
        dropdown_menus: [
          { id: 1, title: "Flange Insulation Kits", link: "#" },
          { id: 2, title: "Monolithic Isolation Joints", link: "#" },
          { id: 3, title: "Compression Packing", link: "#" },
          { id: 4, title: "Special Seals", link: "#" },
          { id: 5, title: "Oil Seals & Bearing Isolators", link: "$" },
          { id: 6, title: "Link-Seal® & Casing Spacers", link: "#" },
        ],
      },

      {
        id: 3,
        title: " Flow, Control & Movement  ",
        dropdown_menus: [
          { id: 1, title: "Expansion Joints", link: "#" },
          { id: 2, title: "Specialized Valves", link: "#" },
          { id: 3, title: "Control Valves", link: "#" },
          { id: 4, title: "Pipe Hangers & Supports", link: "#" },
        ],
      },

      {
        id: 4,
        title: "Specialized Technologies",
        dropdown_menus: [
          { id: 1, title: "Garlock Hygiene Technology", link: "#" },
          { id: 2, title: "Fire & Safety", link: "#" },
          // { id: 3, title: "Common Accessories-Expansion Joints", link: "#" },
          // // {id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      // 	{
      // 	id:4,
      // 	title: "Fire & Safety",
      // 	dropdown_menus: [
      // 		{id:1, title: "ShootFire Rim Steal", link: "/about" },
      // 		{id:2, title: "Foam Monitor", link: "/university-about" },
      // 	    {id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 		// {id:4, title: "Mission & Values", link: "/university-mission" },
      // 		// {id:5, title: "History", link: "/university-history" },
      // 		// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 	],
      // },
      // {
      //   id: 5,
      //   title: "Gaskets",
      //   dropdown_menus: [
      //     { id: 1, title: "Gaskets Sheet Material", link: "#" },
      //     { id: 2, title: " Metallic Gaskets", link: "#" },
      //     { id: 3, title: "Non-Metallic Gaskets", link: "#" },
      //     //{id:4, title: "Mission & Values", link: "/university-mission" },
      //     // {id:5, title: "History", link: "/university-history" },
      //     // {id:6, title: "Our Leadership", link: "/university-leadership" },
      //   ],
      // },
      // {
      //   id: 6,
      //   title: "Valves",
      //   dropdown_menus: [
      //     { id: 1, title: "Cryogenic Valves", link: "#" },
      //     { id: 2, title: "High Pressure Valve", link: "#" },
      //     { id: 3, title: "High Temperature Ball Valve", link: "#" },
      //     { id: 4, title: "Control Valves", link: "#" },
      //     { id: 5, title: "Sanitary Valves", link: "#" },
      //     { id: 6, title: "Accessories", link: "#" },
      //   ],
      // },
      // {
      //   id: 7,
      //   title: "Fire & Safety",
      //   dropdown_menus: [
      //     { id: 1, title: "Shootfire Rim Steal", link: "#" },
      //     { id: 2, title: "Foam Monitor", link: "#" },
      //     { id: 3, title: "Nitrogen Injection Fire Protection", link: "#" },
      //     //{id:4, title: "Mission & Values", link: "/university-mission" },
      //     // {id:5, title: "History", link: "/university-history" },
      //     // {id:6, title: "Our Leadership", link: "/university-leadership" },
      //   ],
      // },
      //   {
      // 	id:8,
      // 	title: "Isolation Joints",
      // 	link:'#',
      // 	 dropdown_menus: [
      // 	// 	{id:1, title: "Shootfire Rim Steal", link: "/about" },
      // 	// 	{id:2, title: "Foam Monitor", link: "/university-about" },
      // 	// 	{id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 	// 	//{id:4, title: "Mission & Values", link: "/university-mission" },
      // 	// 	// {id:5, title: "History", link: "/university-history" },
      // 	// 	// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 	 ],
      // },
      //  {
      // 		id:9,
      // 		title: 'Garlock Valves',
      // 		link:'#',
      // 		 dropdown_menus: [
      // 		// 	{id:1, title: "Shootfire Rim Steal", link: "/about" },
      // 		// 	{id:2, title: "Foam Monitor", link: "/university-about" },
      // 		// 	{id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 		// 	//{id:4, title: "Mission & Values", link: "/university-mission" },
      // 		// 	// {id:5, title: "History", link: "/university-history" },
      // 		// 	// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 		 ],
      // 	},
    ],
  },
  {
    id: 2,
    title: "Solutions",
    link: "#",

    pages_dropdown: [
      {
        id: 1,
        title: "Industry",
        dropdown_menus: [
          { id: 1, title: "Chemical Processing", link: "/industries" },
          { id: 2, title: "Data Center", link: "#" },
          { id: 3, title: "Fertilizer & Cement ", link: "#" },
          { id: 4, title: "Food, Pharma & Beverage", link: "#" },
          { id: 5, title: "Future Energy (Hydrogen)", link: "#" },
          { id: 6, title: "Infrastructure", link: "#" },
          { id: 7, title: "Marine", link: "#" },
          { id: 8, title: "Mining", link: "#" },
          { id: 9, title: "Nuclear", link: "#" },
          { id: 10, title: "Oil & Gas", link: "#" },
          { id: 11, title: "Paper & Pulp", link: "#" },
          { id: 12, title: "Petrochemical", link: "#" },
          { id: 13, title: "Power Generation", link: "#" },
          { id: 14, title: "Steel Manufacturing", link: "#" },
          { id: 15, title: " Water Management", link: "#" },
        ],
      },
      {
        id: 2,
        title: "Solution",
        dropdown_menus: [
          { id: 1, title: "ITW Tank Cleaning Services", link: "#" },
          { id: 2, title: "VR Product Installation Training", link: "#" },
          {
            id: 3,
            title: "Site Auditing for Expansion Joints & Gaskets",
            link: "#",
          },
          // {id:4, title: "Semi Conductors", link: "/university-mission" },
          // {id:5, title: "Marine", link: "/university-history" },
          // {id:6, title: "Petro Chemical", link: "/university-leadership" },
          // {id:7, title: "Semi Conductors", link: "/university-mission" },
          // {id:8, title: "Marine", link: "/university-history" },
          // {id:9, title: "Petro Chemical", link: "/university-leadership" },
        ],
      },
    ],
    // dropdown_menus:[
    // 	{id:1,title:"Overview", link: "/university-admission-overview" },
    // 	{id:2,title:"How to Apply", link: "/university-apply" },
    // 	{id:3,title:"Tuition & Fees", link: "/university-tuition-fees" },
    // 	{id:4,title:"Financial Aid", link: "/university-financial" },
    // 	{id:5,title:"Dates & Deadlines", link: "/university-deadlines" },
    // 	{id:6,title:"Schedule a Tour", link: "/university-schedule" },
    // ]
  },
  {
    id: 3,
    title: "Company",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "Company",
        dropdown_menus: [
          { id: 1, title: "About Us", link: "/about" },
          { id: 2, title: "Quality", link: "#" },
          { id: 3, title: "Careers", link: "/careers" },
          { id: 4, title: "Contact Us", link: "/contact" },
        ],
      },
      // {
      //   id: 2,
      //   title: "Location",
      //   dropdown_menus: [
      //     { id: 1, title: "Headquaters - Dubai", link: "#" },
      //     { id: 2, title: "Industries - Ras Ai Khaimah", link: "#" },
      //   ],
      // },
      // {
      //  id:3,
      //  title:'Shop',
      //  dropdown_menus: [
      //   {id:1,title:"Shop", link: "/shop-grid" },
      //   {id:2,title:"Single Product", link: "/shop-details/1" },
      //   {id:3,title:"Cart Page", link: "/cart" },
      //   {id:4,title:"Wishlist page", link: "/wishlist" },
      //   {id:5,title:"My Account", link: "/my-account" },
      //   {id:6,title:"Login & Register", link: "/login" },
      //  ]
      // }
    ],
  },
  //  {
  // 	id:5,
  // 	title:'Blog',
  // 	link:'#',
  // 	pages_dropdown:[
  // 		{
  // 			id:1,
  // 			title: "About",
  // 			dropdown_menus: [
  // 				{id:1, title: "About Us", link: "/about" },
  // 				{id:2, title: "University About", link: "/university-about" },
  // 				{id:3, title: "Campus", link: "/university-campus" },
  // 				{id:4, title: "Mission & Values", link: "/university-mission" },
  // 				{id:5, title: "History", link: "/university-history" },
  // 				{id:6, title: "Our Leadership", link: "/university-leadership" },
  // 			],
  // 		},
  // 		{
  // 			id:2,
  // 			title: "Get Started",
  // 			dropdown_menus: [
  // 				{id:1, title: "Events", link: "/event" },
  // 				{id:2, title: "Event Details", link: "/event-details" },
  // 				{id:3, title: "Instructor", link: "/instructor" },
  // 				{id:4, title: "Profile", link: "/my-profile" },
  // 				{id:5, title: "Become a Instructor", link: "/become-instructor" },
  // 				{id:6, title: "Maintenance", link: "/up-coming" },
  // 				{id:7, title: "Contact Us", link: "/contact" },
  // 				{id:8, title: "Membership plans", link: "/membership-plans" },
  // 				{id:9, title: "FAQs", link: "/faq" },
  // 				{id:10, title: "Privacy Policy", link: "/privacy-policy" },
  // 				{id:11, title: "404 Page", link: "/not-found" },
  // 			],
  // 		},
  // 		{
  // 			id:3,
  // 			title:'Shop',
  // 			dropdown_menus: [
  // 				{id:1,title:"Shop", link: "/shop-grid" },
  // 				{id:2,title:"Single Product", link: "/shop-details/1" },
  // 				{id:3,title:"Cart Page", link: "/cart" },
  // 				{id:4,title:"Wishlist page", link: "/wishlist" },
  // 				{id:5,title:"My Account", link: "/my-account" },
  // 				{id:6,title:"Login & Register", link: "/login" },
  // 			]
  // 		}
  // 	]
  //  },
  {
    id: 4,
    title: "Resources",
    link: "/resources",
    pages_dropdown: [
      {
        id: 1,
        title: "Tools",
        dropdown_menus: [
          { id: 1, title: "Projects", link: "/projects" },
          { id: 3, title: "Webinars", link: "/knowledgecenter" },
          { id: 4, title: "Success Stories", link: "/knowledgecenter" },
          { id: 5, title: "News", link: "/news" },
          { id: 2, title: "Blog", link: "/news-blog-details" },
          { id: 6, title: "Gallery", link: "/gallery" },
        ],
      },
    ],
  },
];

export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [
  {
    id: 3,
    title: "Products",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "Bearing Protection",
        dropdown_menus: [
          {
            id: 1,
            title: "Bearing Isolator Labyrinth Seals",
            link: "/products",
          },
          { id: 2, title: "Oil Seals", link: "#" },
          // {id:3, title: "Campus", link: "/university-campus" },
          // {id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },

      //    {
      // 			id:2,
      // 			title: "Gaskets",
      // 			dropdown_menus: [
      // 				{id:1, title: "Gaskets Sheet Material", link: "/about" },
      // 				{id:2, title: " Metallic Gaskets", link: "/university-about" },
      // 				 {id:3, title: "Non-Metallic Gaskets", link: "/university-campus" },
      // 				//{id:4, title: "Mission & Values", link: "/university-mission" },
      // 				// {id:5, title: "History", link: "/university-history" },
      // 				// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 			],
      // 		},

      {
        id: 3,
        title: "Compression Packing",
        dropdown_menus: [
          { id: 1, title: "Compression by Packing by Material", link: "#" },
          { id: 2, title: "Compression by Packing by Use", link: "#" },
        ],
      },

      {
        id: 3,
        title: "Expansion Joints",
        dropdown_menus: [
          { id: 1, title: "Rubber Expansion Joints ", link: "#" },
          { id: 2, title: "Fabric and Ducting Expansion Joints", link: "#" },
          { id: 3, title: "Common Accessories-Expansion Joints", link: "#" },
          // {id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      // 	{
      // 	id:4,
      // 	title: "Fire & Safety",
      // 	dropdown_menus: [
      // 		{id:1, title: "ShootFire Rim Steal", link: "/about" },
      // 		{id:2, title: "Foam Monitor", link: "/university-about" },
      // 	    {id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 		// {id:4, title: "Mission & Values", link: "/university-mission" },
      // 		// {id:5, title: "History", link: "/university-history" },
      // 		// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 	],
      // },
      {
        id: 5,
        title: "Gaskets",
        dropdown_menus: [
          { id: 1, title: "Gaskets Sheet Material", link: "#" },
          { id: 2, title: " Metallic Gaskets", link: "#" },
          { id: 3, title: "Non-Metallic Gaskets", link: "#" },
          //{id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      {
        id: 6,
        title: "Valves",
        dropdown_menus: [
          { id: 1, title: "Cryogenic Valves", link: "#" },
          { id: 2, title: "High Pressure Valve", link: "#" },
          { id: 3, title: "High Temperature Ball Valve", link: "#" },
          { id: 4, title: "Control Valves", link: "#" },
          { id: 5, title: "Sanitary Valves", link: "#" },
          { id: 6, title: "Accessories", link: "#" },
        ],
      },
      {
        id: 7,
        title: "Fire & Safety",
        dropdown_menus: [
          { id: 1, title: "Shootfire Rim Steal", link: "#" },
          { id: 2, title: "Foam Monitor", link: "#" },
          { id: 3, title: "Nitrogen Injection Fire Protection", link: "#" },
          //{id:4, title: "Mission & Values", link: "/university-mission" },
          // {id:5, title: "History", link: "/university-history" },
          // {id:6, title: "Our Leadership", link: "/university-leadership" },
        ],
      },
      //   {
      // 	id:8,
      // 	title: "Isolation Joints",
      // 	link:'#',
      // 	 dropdown_menus: [
      // 	// 	{id:1, title: "Shootfire Rim Steal", link: "/about" },
      // 	// 	{id:2, title: "Foam Monitor", link: "/university-about" },
      // 	// 	{id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 	// 	//{id:4, title: "Mission & Values", link: "/university-mission" },
      // 	// 	// {id:5, title: "History", link: "/university-history" },
      // 	// 	// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 	 ],
      // },
      //  {
      // 		id:9,
      // 		title: 'Garlock Valves',
      // 		link:'#',
      // 		 dropdown_menus: [
      // 		// 	{id:1, title: "Shootfire Rim Steal", link: "/about" },
      // 		// 	{id:2, title: "Foam Monitor", link: "/university-about" },
      // 		// 	{id:3, title: "Nitrogen Injection Fire Protection", link: "/university-campus" },
      // 		// 	//{id:4, title: "Mission & Values", link: "/university-mission" },
      // 		// 	// {id:5, title: "History", link: "/university-history" },
      // 		// 	// {id:6, title: "Our Leadership", link: "/university-leadership" },
      // 		 ],
      // 	},
    ],
  },
  {
    id: 4,
    title: "Solutions",
    link: "#",

    pages_dropdown: [
      {
        id: 1,
        title: "Industry",
        dropdown_menus: [
          { id: 1, title: "Oil and Gas", link: "#" },
          { id: 2, title: "Infrastructure", link: "#" },
          { id: 3, title: "Food Pharma Beverage", link: "#" },
          { id: 4, title: "Semi Conductors", link: "#" },
          { id: 5, title: "Marine", link: "#" },
          { id: 6, title: "Petro Chemical", link: "#" },
        ],
      },
      {
        id: 2,
        title: "Solution",
        dropdown_menus: [
          { id: 1, title: "ITW Service", link: "#" },
          { id: 2, title: "BUtterfly Valve Troubleshooting", link: "#" },
          {
            id: 3,
            title: "Industrial Fugitive Emission Control Programme",
            link: "#",
          },
          // {id:4, title: "Semi Conductors", link: "/university-mission" },
          // {id:5, title: "Marine", link: "/university-history" },
          // {id:6, title: "Petro Chemical", link: "/university-leadership" },
          // {id:7, title: "Semi Conductors", link: "/university-mission" },
          // {id:8, title: "Marine", link: "/university-history" },
          // {id:9, title: "Petro Chemical", link: "/university-leadership" },
        ],
      },
    ],
    // dropdown_menus:[
    // 	{id:1,title:"Overview", link: "/university-admission-overview" },
    // 	{id:2,title:"How to Apply", link: "/university-apply" },
    // 	{id:3,title:"Tuition & Fees", link: "/university-tuition-fees" },
    // 	{id:4,title:"Financial Aid", link: "/university-financial" },
    // 	{id:5,title:"Dates & Deadlines", link: "/university-deadlines" },
    // 	{id:6,title:"Schedule a Tour", link: "/university-schedule" },
    // ]
  },

  {
    id: 5,
    title: "Company",
    link: "#",
    pages_dropdown: [
      {
        id: 1,
        title: "About",
        dropdown_menus: [
          { id: 1, title: "Team", link: "#" },
          { id: 2, title: "Quality", link: "#" },
          { id: 3, title: "Careers", link: "#" },
          { id: 4, title: "Contact Us", link: "/contact" },
        ],
      },
      {
        id: 2,
        title: "Location",
        dropdown_menus: [
          { id: 1, title: "Headquaters - Dubai", link: "#" },
          { id: 2, title: "Industries - Ras Ai Khaimah", link: "#" },
        ],
      },
      // {
      //  id:3,
      //  title:'Shop',
      //  dropdown_menus: [
      //   {id:1,title:"Shop", link: "/shop-grid" },
      //   {id:2,title:"Single Product", link: "/shop-details/1" },
      //   {id:3,title:"Cart Page", link: "/cart" },
      //   {id:4,title:"Wishlist page", link: "/wishlist" },
      //   {id:5,title:"My Account", link: "/my-account" },
      //   {id:6,title:"Login & Register", link: "/login" },
      //  ]
      // }
    ],
  },
  //  {
  // 	id:5,
  // 	title:'Blog',
  // 	link:'#',
  // 	pages_dropdown:[
  // 		{
  // 			id:1,
  // 			title: "About",
  // 			dropdown_menus: [
  // 				{id:1, title: "About Us", link: "/about" },
  // 				{id:2, title: "University About", link: "/university-about" },
  // 				{id:3, title: "Campus", link: "/university-campus" },
  // 				{id:4, title: "Mission & Values", link: "/university-mission" },
  // 				{id:5, title: "History", link: "/university-history" },
  // 				{id:6, title: "Our Leadership", link: "/university-leadership" },
  // 			],
  // 		},
  // 		{
  // 			id:2,
  // 			title: "Get Started",
  // 			dropdown_menus: [
  // 				{id:1, title: "Events", link: "/event" },
  // 				{id:2, title: "Event Details", link: "/event-details" },
  // 				{id:3, title: "Instructor", link: "/instructor" },
  // 				{id:4, title: "Profile", link: "/my-profile" },
  // 				{id:5, title: "Become a Instructor", link: "/become-instructor" },
  // 				{id:6, title: "Maintenance", link: "/up-coming" },
  // 				{id:7, title: "Contact Us", link: "/contact" },
  // 				{id:8, title: "Membership plans", link: "/membership-plans" },
  // 				{id:9, title: "FAQs", link: "/faq" },
  // 				{id:10, title: "Privacy Policy", link: "/privacy-policy" },
  // 				{id:11, title: "404 Page", link: "/not-found" },
  // 			],
  // 		},
  // 		{
  // 			id:3,
  // 			title:'Shop',
  // 			dropdown_menus: [
  // 				{id:1,title:"Shop", link: "/shop-grid" },
  // 				{id:2,title:"Single Product", link: "/shop-details/1" },
  // 				{id:3,title:"Cart Page", link: "/cart" },
  // 				{id:4,title:"Wishlist page", link: "/wishlist" },
  // 				{id:5,title:"My Account", link: "/my-account" },
  // 				{id:6,title:"Login & Register", link: "/login" },
  // 			]
  // 		}
  // 	]
  //  },
  {
    id: 6,
    title: "Resources",
    link: "/resources",
    // 👈 destination page
    pages_dropdown: [
      {
        id: 1,
        title: "Tools",
        dropdown_menus: [
          { id: 1, title: "Manuals & Guides", link: "/resources/manuals" },
          { id: 2, title: "Brochures", link: "/resources/brochures" },
          { id: 3, title: "Webinars", link: "/resources/webinars" },
          {
            id: 4,
            title: "Success Stories",
            link: "/resources/success-stories",
          },
          { id: 5, title: "News", link: "resources/news" },
        ],
      },
    ],
  },

  // {
  //     id:1,
  //     title:'Home',
  //     link:'#',
  //     home_dropdown:[
  //         { id: 1, title: "University Classic", link: "/", img: "/assets/img/menu/home-1.jpg" },
  // 		{ id: 2, title: "Online Course", link: "/home-online-course", img: "/assets/img/menu/home-2.jpg" },
  // 		{ id: 3, title: "Kids Education", link: "/home-kids-education", img: "/assets/img/menu/home-3.jpg" },
  // 		{ id: 4, title: "Gym Coaching", link: "/home-gym-coaching", img: "/assets/img/menu/home-4.jpg" },
  // 		{ id: 5, title: "High School", link: "/home-high-school", img: "/assets/img/menu/home-5.jpg" },
  // 		{ id: 6, title: "Books Shop", link: "/home-books-shop", img: "/assets/img/menu/shop.jpg" },
  // 		{ id: 7, title: "Coming Soon", link: "#", img: "/assets/img/menu/coming-soon-1.jpg" },
  // 		{ id: 8, title: "Coming Soon", link: "#", img: "/assets/img/menu/coming-soon-2.jpg" },
  //     ]
  // },
  // {
  // 	id:2,
  // 	title:'Product',
  // 	link:'#',
  // 	academic_dropdown:[
  // 		{
  // 			id:1,
  // 			title:'Product',
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Overview", link: "/university-about" },
  // 				{ id: 2, title: "Undergraduate", link: "/university-program" },
  // 				{ id: 3, title: "Graduate Program", link: "/university-program" },
  // 				{ id: 4, title: "Off-campus learning", link: "/course-categories" },
  // 				{ id: 5, title: "Online Education", link: "/course-categories" },
  // 				{ id: 6, title: "Schools", link: "/university-program" },
  // 			]
  // 		},
  // 		{
  // 			id:2,
  // 			title:'Admission',
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Admission Overview", link: "/university-admission-overview" },
  // 				{ id: 2, title: "How to Apply", link: "/university-apply" },
  // 				{ id: 3, title: "Tuition & Fees", link: "/university-tuition-fees" },
  // 				{ id: 4, title: "Financial Aid", link: "/university-financial" },
  // 				{ id: 5, title: "Dates & Deadlines", link: "/university-deadlines" },
  // 				{ id: 6, title: "Schedule a Tour", link: "/university-schedule" },
  // 			]
  // 		}
  // 	]
  // },
  // {
  // 	id:3,
  // 	title:'Courses',
  // 	link:'#',
  // 	course_dropdown:[
  // 		{
  // 			id: 1,
  //             title: "Course Layout",
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Course Categories", link: "/course-categories" },
  // 				{ id: 2, title: "Course With Filter", link: "/course-with-filter" },
  // 				{ id: 3, title: "Course Open Filter", link: "/course-open-filter" },
  // 				{ id: 4, title: "Course with Tab", link: "/course-with-tab" },
  // 				{ id: 5, title: "Course with Tab List", link: "/course-with-tab-list" },
  // 				{ id: 6, title: "Course Column Two", link: "/course-column-2" },
  // 			]
  // 		},
  // 		{
  // 			id: 2,
  // 			title: "Course Layout",
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Course With Sidebar", link: "/course-with-sidebar" },
  // 				{ id: 2, title: "Course Details", link: "/course-details/1" },
  // 				{ id: 3, title: "Course Details Two", link: "/course-details-2/1" },
  // 				{ id: 4, title: "Course Lesson", link: "/course-lesson", new: true },
  // 				{ id: 5, title: "Create Course", link: "/dashboard/create-new-course", new: true },
  // 			]
  // 		}
  // 	]
  // },
  // {
  // 	id:4,
  // 	title:'Dashboard',
  // 	link:'#',
  // 	dashboard_dropdown:[
  // 		{
  // 			id: 1,
  // 			title:"Instructor Dashboard",
  // 			link:'#',
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Dashboard", link: "/dashboard/instructor-dashboard" },
  // 				{ id: 2, title: "Profile", link: "/dashboard/instructor-profile" },
  // 				{ id: 3, title: "Enrolled Courses", link: "/dashboard/instructor-enroll-course" },
  // 				{ id: 4, title: "Wishlist", link: "/dashboard/instructor-wishlist" },
  // 				{ id: 5, title: "Reviews", link: "/dashboard/instructor-reviews" },
  // 				{ id: 6, title: "My Quiz Attempts", link: "/dashboard/instructor-quiz-attempts" },
  // 				{ id: 7, title: "Order History", link: "/dashboard/instructor-order" },
  // 				{ id: 8, title: "My Course", link: "/dashboard/instructor-my-course" },
  // 				{ id: 9, title: "Announcements", link: "/dashboard/instructor-announcements" },
  // 				{ id: 10, title: "Quiz Attempts", link: "/dashboard/instructor-quiz" },
  // 				{ id: 11, title: "Assignments", link: "/dashboard/instructor-assignment" },
  // 				{ id: 12, title: "Settings", link: "/dashboard/instructor-setting-profile" },
  // 			]
  // 		},
  // 		{
  // 			id: 2,
  // 			title:"Student Dashboard",
  // 			link:'#',
  // 			dropdown_menus:[
  // 				{ id: 1, title: "Dashboard", link: "/dashboard/student-dashboard" },
  // 				{ id: 2, title: "Profile", link: "/dashboard/student-profile" },
  // 				{ id: 3, title: "Enrolled Courses", link: "/dashboard/student-enroll-course" },
  // 				{ id: 4, title: "Wishlist", link: "/dashboard/student-wishlist" },
  // 				{ id: 5, title: "Reviews", link: "/dashboard/student-reviews" },
  // 				{ id: 6, title: "My Quiz Attempts", link: "/dashboard/student-my-quiz" },
  // 				{ id: 7, title: "Settings", link: "/dashboard/student-setting-profile" },
  // 			]
  // 		}
  // 	]
  // },
  // {
  // 	id:5,
  // 	title:'Pages',
  // 	link:'#',
  // 	pages_dropdown:[
  // 		{
  // 			id:1,
  // 			title: "About",
  // 			dropdown_menus: [
  // 				{id:1, title: "About Us", link: "/about" },
  // 				{id:2, title: "University About", link: "/university-about" },
  // 				{id:3, title: "Campus", link: "/university-campus" },
  // 				{id:4, title: "Mission & Values", link: "/university-mission" },
  // 				{id:5, title: "History", link: "/university-history" },
  // 				{id:6, title: "Our Leadership", link: "/university-leadership" },
  // 			],
  // 		},
  // 		{
  // 			id:2,
  // 			title: "Get Started",
  // 			dropdown_menus: [
  // 				{id:1, title: "Events", link: "/event" },
  // 				{id:2, title: "Event Details", link: "/event-details/1" },
  // 				{id:3, title: "Instructor", link: "/instructor" },
  // 				{id:4, title: "Profile", link: "/my-profile" },
  // 				{id:5, title: "Become a Instructor", link: "/become-instructor" },
  // 				{id:6, title: "Maintenance", link: "/up-coming" },
  // 				{id:7, title: "Contact Us", link: "/contact" },
  // 				{id:8, title: "Membership plans", link: "/membership-plans" },
  // 				{id:9, title: "FAQs", link: "/faq" },
  // 				{id:10, title: "Privacy Policy", link: "/privacy-policy" },
  // 				{id:11, title: "404 Page", link: "/not-found" },
  // 			],
  // 		},
  // 		{
  // 			id:3,
  // 			title:'Shop',
  // 			dropdown_menus: [
  // 				{id:1,title:"Shop", link: "/shop-grid" },
  // 				{id:2,title:"Single Product", link: "/shop-details/1" },
  // 				{id:3,title:"Cart Page", link: "/cart" },
  // 				{id:4,title:"Wishlist page", link: "/wishlist" },
  // 				{id:5,title:"My Account", link: "/my-account" },
  // 				{id:6,title:"Login & Register", link: "/login" },
  // 			]
  // 		}
  // 	]
  //  },
  //  {
  // 	id:6,
  // 	title:'Blog',
  // 	link:'#',
  // 	dropdown_menus:[
  // 		{id:1,title:"Blog 3 Column", link:"/blog-stories" },
  // 		{id:2,title:"Blog Grid Sidebar", link:"/blog-stories-sidebar" },
  // 		{id:3,title:"Blog List Sidebar", link:"/blog-list" },
  // 		{id:4,title:"Blog Standard", link:"/blog-standard" },
  // 		{id:5,title:"Blog Details", link:"/blog-details/1" },
  // 		{id:6,title:"Blog Details Full Width", link:"/blog-details-full-width/1" },
  // 	]
  //  }
];
