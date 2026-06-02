// import { Metadata } from "next";
// import ShopGridArea from "./_components/shop-grid-area";

// export const metadata: Metadata = {
//     title: "Shop Grid - Acadia",
// };

// export default function ShopPage() {
//   return (
//     <main>
//         {/* shop grid area start */}
//         <ShopGridArea/>
//         {/* shop grid area end */}
//     </main>
//   )
// }



// -----------******************* code commented on dated 30-05-2026 ******************------------------//


import { Suspense } from "react";
import { Metadata } from "next";
import ShopGridArea from "./_components/shop-grid-area";

export const metadata: Metadata = {
  title: "Shop Grid - Acadia",
};

export default function ShopPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopGridArea />
      </Suspense>
    </main>
  );
}