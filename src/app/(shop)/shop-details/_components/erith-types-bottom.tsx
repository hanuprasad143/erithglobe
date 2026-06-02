"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import Image from "next/image";
// import TypeDownloads from "@/components/products/typedownloads";
import NiceSelect from "@/components/ui/nice-select";
import ExploreMore from "./explore_more";
const results = [
  { id: "home", title: "Description" },
  { id: "profile", title: "Specifications" },
  { id: "contact", title: "Downloads" },
  { id: "features", title: "Features & Benefits" },
  { id: "insights", title: "Product Insights" },
];

type Product = {
  id: number;
  subcategory_id: number;
  name: string;
  slug: string;
  serial_number?: string | null;
  short_description?: string | null;
  banner_image?: string | null;
  has_types?: boolean;
  show_description?: boolean;
  show_specifications?: boolean;
  show_downloads?: boolean;
  show_features?: boolean;
  show_insights?: boolean;
  link?: string | null;
  show_in_navbar?: boolean;
  product_category?: string | null;
  menu_order?: number;
  type_style_title?: string | null;
};

type Specification = {
  id: number;
  product_id: number;

  title?: string | null;

  created_at?: string;

  values?: string[];
};

type Feature = {
  id: number;

  product_id: number;

  feature?: string | null;

  created_at?: string;
};

type Insight = {
  id: number;

  product_id: number;

  title?: string | null;

  content?: string | null;

  created_at?: string;
};

type Download = {
  id: number;

  product_id: number;

  product_type: string;

  document_type?: string | null;

  language?: string | null;

  title?: string | null;

  file_url?: string | null;

  created_at?: string;
};

type Description = {
  id: number;

  product_id: number;

  title?: string | null;

  subtitle?: string | null;

  content?: string | null;

  image?: string | null;

  show_explore?: boolean;

  product_slug?: string | null;

  created_at?: string;
};

type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  product: Product;
};

export default function ErithTypesBottom({ product }: Props) {
  const [activeTab, setActiveTab] = useState("home");

  // const [specifications, setSpecifications] = useState<Specification>([]);
  const [specifications, setSpecifications] = useState<Specification[]>([]);
  const [loadingSpecs, setLoadingSpecs] = useState(false);

  const [features, setFeatures] = useState<Feature[]>([]);
  const [loadingFeatures, setLoadingFeatures] = useState(false);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [loadingDownloads, setLoadingDownloads] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [descriptions, setDescriptions] = useState<Description[]>([]); // ✅ for type_descriptions
  const [loadingDescriptions, setLoadingDescriptions] = useState(false); // ✅ loading state

  /* RESET TAB WHEN PRODUCT CHANGES */

  const documentTypes = [
    { value: "", label: "All Document Types" },
    ...Array.from(
      new Set(downloads.map((d: Download) => d.document_type).filter(Boolean)),
    ).map((type) => ({
      value: type || "",
      label: type || "",
    })),
  ];

  const languages = [
    { value: "", label: "All Languages" },
    ...Array.from(
      new Set(downloads.map((d: Download) => d.language).filter(Boolean)),
    ).map((lang) => ({
      value: lang || "",
      label: lang || "",
    })),
  ];

  const filteredDownloads = downloads.filter((d: Download) => {
    const typeMatch = selectedType ? d.document_type === selectedType : true;
    const languageMatch = selectedLanguage
      ? d.language === selectedLanguage
      : true;
    return typeMatch && languageMatch;
  });

  useEffect(() => {
    setActiveTab("home");
  }, [product]);

  /* FETCH PRODUCT DETAILS ON TAB CHANGE */
  // useEffect(() => {
  //   if (activeTab !== "home" || !product?.id) return;

  //   const fetchDescriptions = async () => {
  //     try {
  //       setLoadingDescriptions(true);

  //       const res = await fetch(
  //         `https://backend-test-yeyr.onrender.com/api/type-descriptions/${product.id}`,
  //       );

  //       const data = await res.json();
  //       setDescriptions(data || []);
  //     } catch (error) {
  //       console.error("Descriptions API error:", error);
  //       setDescriptions([]);
  //     } finally {
  //       setLoadingDescriptions(false);
  //     }
  //   };

  //   fetchDescriptions();
  // }, [activeTab, product?.id]);

  useEffect(() => {
    if (activeTab !== "home" || !product?.id) return;

    const fetchDescriptions = async () => {
      try {
        setLoadingDescriptions(true);

        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/type-descriptions/${product.id}`,
        );

        if (!res.ok) throw new Error("Failed to fetch descriptions");

        const data = await res.json();
        setDescriptions(data || []);
      } catch (error) {
        console.error("Descriptions API error:", error);
        setDescriptions([]);
      } finally {
        setLoadingDescriptions(false);
      }
    };

    fetchDescriptions();
  }, [activeTab, product?.id]);
  /* FETCH SPECIFICATIONS */
  useEffect(() => {
    if (activeTab !== "profile" || !product?.id) return;

    const fetchSpecs = async () => {
      try {
        setLoadingSpecs(true);

        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/type-specifications/${product.id}`,
        );

        const data = await res.json();
        setSpecifications(data || []);
      } catch (error) {
        console.error("Specifications API error:", error);
        setSpecifications([]);
      } finally {
        setLoadingSpecs(false);
      }
    };

    fetchSpecs();
  }, [activeTab, product?.id]);

  useEffect(() => {
    if (activeTab !== "contact" || !product?.id) return;

    const fetchDownloads = async () => {
      try {
        setLoadingDownloads(true);

        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/type-downloads/${product.id}`,
        );

        const data = await res.json();
        setDownloads(data || []);
      } catch (error) {
        console.error("Downloads API error:", error);
        setDownloads([]);
      } finally {
        setLoadingDownloads(false);
      }
    };

    fetchDownloads();
  }, [activeTab, product?.id]);

  /* FETCH TYPE FEATURES */
  useEffect(() => {
    if (activeTab !== "features" || !product?.id) return;

    const fetchFeatures = async () => {
      try {
        setLoadingFeatures(true);

        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/type-features/${product.id}`,
        );

        const data = await res.json();
        setFeatures(data || []);
      } catch (error) {
        console.error("Features API error:", error);
        setFeatures([]);
      } finally {
        setLoadingFeatures(false);
      }
    };

    fetchFeatures();
  }, [activeTab, product?.id]);

  /* FETCH PRODUCT INSIGHTS */
  useEffect(() => {
    if (activeTab !== "insights" || !product?.id) return;

    const fetchInsights = async () => {
      try {
        setLoadingInsights(true);

        const res = await fetch(
          `https://backend-test-yeyr.onrender.com/api/type-insights/${product.id}`,
        );

        const data = await res.json();
        setInsights(data || []);
      } catch (error) {
        console.error("Insights API error:", error);
        setInsights([]);
      } finally {
        setLoadingInsights(false);
      }
    };

    fetchInsights();
  }, [activeTab, product?.id]);

  if (!product) return null;

  return (
    <div className="tp-product-details-bottom">
      <div className="container">
        {/* TAB MENU */}
        <nav>
          <ul className="nav" style={{ paddingLeft: 0 }}>
            {results
              .filter((nav) => {
                if (nav.id === "home" && !product?.show_description)
                  return false;
                if (nav.id === "profile" && !product?.show_specifications)
                  return false;
                if (nav.id === "contact" && !product?.show_downloads)
                  return false;
                if (nav.id === "features" && !product?.show_features)
                  return false;
                if (nav.id === "insights" && !product?.show_insights)
                  return false;
                return true;
              })
              .map((nav) => (
                <li key={nav.id} className="nav-item">
                  <button
                    className={`nav-link ${activeTab === nav.id ? "active" : ""}`}
                    onClick={() => setActiveTab(nav.id)}
                    style={{
                      fontSize: "12px",
                      color: activeTab === nav.id ? "#fff" : "#000",
                      padding: "6px 16px",
                      backgroundColor:
                        activeTab === nav.id ? "#1d3a72" : "#f5f5f5",
                      border:
                        activeTab === nav.id
                          ? "2px solid #1d3a72"
                          : "1px solid #ccc",
                      borderRadius: "10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
          </ul>
        </nav>

        {/* TAB CONTENT */}
        <div className="tab-content">
          {/* DESCRIPTION */}
          {activeTab === "home" && product?.show_description && (
            // do not remove this code --------//
            // <div className="col-md-10 mt-5">
            //   {/* Loading state */}
            //   {loadingDescriptions && <p>Loading descriptions...</p>}

            //   {/* No descriptions */}
            //   {!loadingDescriptions &&
            //     (!descriptions || descriptions.length === 0) && (
            //       <p>No descriptions available.</p>
            //     )}

            //   {/* Render all type_descriptions */}
            //   {!loadingDescriptions &&
            //     descriptions &&
            //     descriptions.length > 0 && (
            //       <div className="descriptions-list">
            //         {descriptions.map((desc) => (
            //           <div key={desc.id} className="mb-3 w-100">
            //             {/* Use title if available, fallback to product description */}
            //             <h4 className="mb-3 w-100">
            //               <Link
            //                 style={{
            //                   color: "#292929",
            //                   fontSize: "25px",
            //                   display: "block",
            //                   width: "100%",
            //                 }}
            //                 href={`/product/${product?.slug}`}
            //               >
            //                 {desc.title || product?.description}
            //               </Link>
            //             </h4>

            //             {/* Optional content */}
            //             {desc.content && (
            //               <div className="d-flex flex-column flex-md-row align-items-start mb-3">
            //                 {/* Text content */}
            //                 <div className="flex-grow-1">
            //                   <p style={{ lineHeight: "1.4" }}>
            //                     {desc.content}
            //                   </p>
            //                   {/* <p style={{ lineHeight: "1.4" }}>Explore more</p> */}
            //                   {/* {desc.show_explore && desc.product_slug && (
            //                     <ExploreMore slug={desc.product_slug} />
            //                   )} */}
            //                   {desc.show_explore && desc.product_slug && (
            //                     <ExploreMore slug={desc.product_slug} />
            //                   )}
            //                 </div>

            //                 {/* Image */}
            //                 {desc.image && (
            //                   <Image
            //                     src={`https://backend-test-yeyr.onrender.com/uploads/${desc.image}`}
            //                     alt={desc.title || product?.name}
            //                     width={200}
            //                     height={200}
            //                     className="ms-md-4 mt-3 mt-md-0"
            //                   />
            //                 )}
            //               </div>
            //             )}
            //           </div>
            //         ))}
            //       </div>
            //     )}

            //   {/* Product short description and Learn More */}
            // </div>
            // do not remove this code --------//
            <div className="col-md-10 mt-5">
              {/* Loading state */}
              {loadingDescriptions && <p>Loading descriptions...</p>}

              {/* No descriptions */}
              {!loadingDescriptions &&
                (!descriptions || descriptions.length === 0) && (
                  <p>No descriptions available.</p>
                )}

              {/* Render all type_descriptions */}
              {!loadingDescriptions &&
                descriptions &&
                descriptions.length > 0 && (
                  <div className="descriptions-list">
                    {descriptions.map((desc) => (
                      <div key={desc.id} className="mb-4 w-100">
                        {/* Title */}
                        <h4
                          className="mb-3 w-100"
                          style={{ fontSize: "25px", color: "#292929" }}
                        >
                          {/* <Link
                            style={{
                              color: "#292929",
                              fontSize: "25px",
                              display: "block",
                              width: "100%",
                            }}
                            href={`/product/${product?.slug}`}
                          > */}
                          {desc.title || product?.short_description}
                          {/* </Link> */}
                        </h4>

                        {/* Content + Image */}
                        {desc.content && (
                          <div>
                            {/* Float Image */}
                            {desc.image && (
                              <Image
                                src={`https://backend-test-yeyr.onrender.com/uploads/${desc.image}`}
                                alt={desc.title || product?.name}
                                width={200}
                                height={200}
                                style={{
                                  float: "right",
                                  marginLeft: "15px",
                                  marginBottom: "10px",
                                }}
                              />
                            )}

                            {/* Text */}
                            <p style={{ lineHeight: "1.6" }}>{desc.content}</p>

                            {/* Clear float so next content doesn't break */}
                            <div style={{ clear: "both" }} />

                            {/* Explore More */}
                            {desc.show_explore && desc.product_slug && (
                              <ExploreMore slug={desc.product_slug} />
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* SPECIFICATIONS */}
          {activeTab === "profile" && product?.show_specifications && (
            <div
              className="container mt-5"
              style={{
                paddingTop: "0",
                paddingBottom: "30px",
              }}
            >
              <h5
                style={{
                  color: "#292929",
                  marginTop: "0",
                  marginBottom: "30px",
                  lineHeight: "1.2",
                  fontSize: "25px",
                }}
              >
                Specifications
              </h5>

              {loadingSpecs && <p>Loading specifications...</p>}

              {!loadingSpecs && specifications.length === 0 && (
                <p>No specifications available.</p>
              )}

              <div
                className="row"
                style={{
                  rowGap: "5px",
                  alignItems: "stretch",
                  marginTop: "0",
                  marginBottom: "0",
                  paddingTop: "0",
                  paddingBottom: "0",
                }}
              >
                {specifications.map((spec: Specification) => (
                  <div
                    key={spec.id}
                    className="col-lg-6 col-md-6 d-flex"
                    style={{
                      marginBottom: "0",
                      paddingTop: "0",
                      paddingBottom: "0",
                    }}
                  >
                    <div
                      className="tp-apply-process-box h-70"
                      style={{
                        padding: "4px 5px",
                        width: "100%",
                        marginTop: "0",
                        marginBottom: "0",
                        borderTop: "none",
                      }}
                    >
                      <h4
                        style={{
                          marginTop: "0",
                          marginBottom: "2px",
                          fontSize: "15px",
                          color: "#292929",
                          lineHeight: "1.3",
                        }}
                      >
                        {spec.title}
                      </h4>

                      {spec.values?.map((val: string, i: number) => (
                        <p
                          key={i}
                          style={{
                            marginTop: "0",
                            marginBottom: "0",
                            lineHeight: "1.4",
                            fontSize: "14px",
                          }}
                        >
                          {val}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* DOWNLOADS */}
          {activeTab === "contact" && product?.show_downloads && (
            <section className="tp-shop-service-area pb-30">
              <div className="container px-0">
                {/* FILTERS */}
                <div className="row mb-20">
                  <div className="col-lg-6 col-md-6 col-12 custom-select-box">
                    <NiceSelect
                      options={documentTypes}
                      defaultCurrent={0}
                      onChange={(item: SelectOption) =>
                        setSelectedType(item?.value || "")
                      }
                      name="documentType"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-12 custom-select-box">
                    <NiceSelect
                      options={languages}
                      defaultCurrent={0}
                      onChange={(item: SelectOption) =>
                        setSelectedLanguage(item?.value || "")
                      }
                      name="language"
                    />
                  </div>
                </div>

                {/* LOADING */}
                {loadingDownloads && (
                  <div className="text-center py-5">
                    <p>Loading downloads...</p>
                  </div>
                )}

                {/* CARDS */}
                {!loadingDownloads && (
                  <div className="row">
                    {filteredDownloads.length === 0 ? (
                      <div className="text-center py-5">
                        <p>No downloads available.</p>
                      </div>
                    ) : (
                      filteredDownloads.map((service: Download) => (
                        <div
                          key={service.id}
                          className="col-lg-6 col-md-6 mt-5 mb-10"
                        >
                          <div
                            style={{
                              border: "1px solid #e5e5e5",
                              borderRadius: "10px",
                              padding: "24px",
                              height: "100%",
                              backgroundColor: "white",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <div className="d-flex align-items-start mb-3">
                              <div
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "16px",
                                  fontSize: "20px",
                                }}
                              >
                                <svg
                                  // class="w-6 h-6 text-gray-800 dark:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="#fecb00"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"
                                  />
                                </svg>
                              </div>

                              <div style={{ flex: 1 }}>
                                <h5
                                  style={{
                                    color: "#000",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                    marginBottom: "6px",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {service.document_type}
                                </h5>

                                <p
                                  style={{
                                    color: "#333",
                                    fontSize: "13px",
                                    marginBottom: "0",
                                    lineHeight: "1.5",
                                  }}
                                >
                                  {service.title}
                                </p>
                              </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-start mt-4">
                              <a
                                // href={`https://backend-test-yeyr.onrender.com${service.file_url}`}
                                href={`https://backend-test-yeyr.onrender.com/uploads/${service.file_url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button
                                  style={{
                                    backgroundColor: "#1d3a72",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    padding: "8px 18px",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                  }}
                                >
                                  Download
                                </button>
                              </a>

                              <span
                                style={{
                                  color: "#666",
                                  fontSize: "13px",
                                  marginLeft: "20px",
                                }}
                              >
                                {service.language}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* FEATURES */}
          {activeTab === "features" && product?.show_features && (
            <div className="container mt-5">
              <h5
                style={{
                  color: "#292929",
                  marginBottom: "30px",
                  fontSize: "25px",
                }}
              >
                More Details
              </h5>

              <p
                style={{
                  fontSize: "28px",
                  color: "#000",
                  marginBottom: "16px",
                }}
              >
                Features & Benefits
              </p>

              {loadingFeatures && <p>Loading features...</p>}

              {!loadingFeatures && features.length === 0 && (
                <p>No features available.</p>
              )}

              <ul
                style={{
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.5",
                  paddingLeft: "24px",
                  listStyle: "none",
                }}
              >
                {features.map((item: Feature) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "5px",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        marginRight: "8px",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      •
                    </span>

                    <span>{item.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* INSIGHTS */}
          {activeTab === "insights" && product?.show_insights && (
            <div className="container mt-5">
              <h5
                style={{
                  color: "#292929",
                  marginBottom: "30px",
                  fontSize: "25px",
                }}
              >
                Insights
              </h5>
              {loadingInsights && <p>Loading insights...</p>}

              {!loadingInsights && insights.length === 0 && (
                <p>No insights available.</p>
              )}

              <ul
                style={{
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.8",
                  paddingLeft: "24px",
                  listStyle: "none",
                }}
              >
                {insights.map((item: Insight) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        marginRight: "8px",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      •
                    </span>

                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
