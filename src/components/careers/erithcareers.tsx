"use client";
// import usePagination from "@/hooks/use-pagination";
import ErithCareessidebarArea from "../blog/sidebar/careers-sidebar-area";
// import { blog_standard_data } from "@/data/blog-data";
// import Pagination from "../ui/pagination";
// import { BlogQuoteItemOne, BlogQuoteItemTwo } from "./single/blog-quote-item";
// import BlogStandardItem from "./single/blog-standard-item";
import ErithJobs from "./erithjobroles";

export default function ErithCareersArea() {
  //   const { currentItems } = usePagination(blog_standard_data, 5);
  return (
    <section className="tp-blog-standard-area p-relative pt-40 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper" style={{ marginRight: "30px" }}>
              {/* {currentItems
                .slice(0, 1)
                .map((blog) =>
                  blog.postboxQuote1 ? (
                    <BlogQuoteItemOne key={blog.id} blog={blog} />
                  ) : blog.postboxQuote2 ? (
                    <BlogQuoteItemTwo key={blog.id} blog={blog} />
                  ) : (
                    <BlogStandardItem key={blog.id} blog={blog} />
                  ),
                )} */}
              <ErithJobs />
            </div>

            {/* <div className="tp-event-inner-pagination tp-postbox-item-pagination">
              <div className="tp-dashboard-pagination">
                <div className="tp-pagination">
                  <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    isCenter={true}
                  />
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-lg-4">
            {/* blog sidebar area */}
            <ErithCareessidebarArea />
            {/* blog sidebar area */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mt-30">
                <h5
                  style={{
                    fontSize: "25px",
                    color: "#292929",
                    marginBottom: "0",
                  }}
                >
                  Erith&apos;s truly values work-life balance. We work hard and
                  deliver, but at the end of the day you can switch off.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
