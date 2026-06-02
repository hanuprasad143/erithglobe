// // "use client";
// // import { SubmitHandler, useForm } from "react-hook-form";
// // import { useState } from "react";
// // import ReCAPTCHA from "react-google-recaptcha";
// // import ErrMsg from "../err-msg";

// // type Inputs = {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   inquiryReason: string;
// //   preferredLanguage: string;
// //   companyName: string;
// //   requestDetails: string;
// //   country: string;
// //   businessAddress: string;
// //   phone: string;
// //   state: string;
// //   city: string;
// //   postalCode: string;
// //   agreeUpdates: boolean;
// //   recaptcha: string;
// // };

// // export default function ContactForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     setValue,
// //     formState: { errors },
// //   } = useForm<Inputs>();

// //   const [recaptchaVerified, setRecaptchaVerified] = useState(false);

// //   const onSubmit: SubmitHandler<Inputs> = (data) => {
// //     if (!recaptchaVerified) {
// //       alert("Please verify you are not a robot before submitting.");
// //       return;
// //     }
// //     console.log("Form Submitted:", data);
// //   };

// //   const handleRecaptchaChange = (value: string | null) => {
// //     if (value) {
// //       setRecaptchaVerified(true);
// //       setValue("recaptcha", value);
// //     } else {
// //       setRecaptchaVerified(false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="contact-section mx-auto px-3"
// //       style={{ maxWidth: "1200px" }}
// //     >
// //       {/* Heading */}
// //       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
// //         Learn More
// //       </h4>
// //       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
// //         Submit an Inquiry
// //       </h1>

// //       <form
// //         id="contact-form"
// //         className="row g-3 "
// //         onSubmit={handleSubmit(onSubmit)}
// //       >
// //         {/* Row 1 */}
// //         <div className="row g-3">
// //           {/* Email */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-envelope field-icon"></i>
// //               <input
// //                 type="email"
// //                 {...register("email", { required: "Email required" })}
// //                 placeholder="Email"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
// //             </div>
// //           </div>

// //           {/* First Name */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("firstName", { required: "First Name required" })}
// //                 placeholder="First Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.firstName && (
// //                 <ErrMsg msg={errors.firstName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Last Name */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("lastName", { required: "Last Name required" })}
// //                 placeholder="Last Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.lastName && (
// //                 <ErrMsg msg={errors.lastName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Inquiry Reason */}
// //           {/* <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-question-circle field-icon"></i>
// //               <select
// //                 {...register("inquiryReason", {
// //                   required: "Select inquiry reason",
// //                 })}
// //                 className="ps-5 uniform-field form-select"
// //               >
// //                 <option value="">Inquiry Reason</option>
// //                 <option value="general">General</option>
// //                 <option value="support">Support</option>
// //                 <option value="sales">Sales</option>
// //               </select>
// //               {errors.inquiryReason && (
// //                 <ErrMsg msg={errors.inquiryReason.message ?? ""} />
// //               )}
// //             </div>
// //           </div> */}

// //           {/* Preferred Language */}
// //           <div className="col-md-6">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-language field-icon"></i>
// //               <select
// //                 {...register("preferredLanguage", {
// //                   required: "Select language",
// //                 })}
// //                 className="ps-5 uniform-field form-select"
// //               >
// //                 <option value="">Preferred Language</option>
// //                 <option value="english">English</option>
// //                 <option value="french">French</option>
// //                 <option value="spanish">Spanish</option>
// //               </select>
// //               {/* {errors.preferredLanguage && (
// //                 <ErrMsg msg={errors.preferredLanguage.message ?? ""} />
// //               )} */}
// //             </div>
// //           </div>

// //           {/* Company Name */}
// //           <div className="col-md-6">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-building field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("companyName")}
// //                 placeholder="Company Name"
// //                 className="ps-5 uniform-field"
// //               />
// //             </div>
// //           </div>

// //           {/* Request Details */}
// //           <div className="col-12">
// //             <div className="tp-contact-input position-relative">
// //               <i
// //                 className="fa fa-pencil field-icon"
// //                 style={{ top: "12px" }}
// //               ></i>
// //               <textarea
// //                 {...register("requestDetails", {
// //                   required: "Request details required",
// //                 })}
// //                 placeholder="Request Details"
// //                 className="ps-5 pt-3 uniform-field"
// //                 rows={4}
// //               ></textarea>
// //               {errors.requestDetails && (
// //                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Row 2 */}
// //         <div className="row g-3 mt-2">
// //           {/* Country */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-globe field-icon"></i>
// //               <select
// //                 {...register("country", { required: "Select country" })}
// //                 className="uniform-field form-select ps-5"
// //               >
// //                 <option value="">Select Country</option>
// //                 <option value="usa">USA</option>
// //                 <option value="uk">UK</option>
// //                 <option value="india">India</option>
// //               </select>
// //             </div>
// //             {/* {errors.country && <ErrMsg msg={errors.country.message ?? ""} />} */}
// //           </div>

// //           {/* Business Address */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-map-marker field-icon"></i>
// //               <input
// //                 {...register("businessAddress")}
// //                 placeholder="Business Address"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           {/* Phone Number */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-phone field-icon"></i>
// //               <input
// //                 // type="tel"
// //                 {...register("phone", { required: "Phone number required" })}
// //                 placeholder="Phone Number"
// //                 className="uniform-field form-control ps-5"
// //               />
// //               {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
// //             </div>
// //           </div>

// //           {/* State */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-map field-icon"></i>
// //               <input
// //                 {...register("state")}
// //                 placeholder="State"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           {/* City */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-city field-icon"></i>
// //               <input
// //                 {...register("city")}
// //                 placeholder="City"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           {/* Postal Code */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-mail-bulk field-icon"></i>
// //               <input
// //                 {...register("postalCode")}
// //                 placeholder="Postal Code"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Updates Checkbox */}
// //         {/* <div className="mt-3 d-flex align-items-center gap-2">
// //           <input
// //             type="checkbox"
// //             {...register("agreeUpdates", { required: true })}
// //             style={{ width: "18px", height: "18px", cursor: "pointer" }}
// //           />
// //           <span style={{ fontSize: "14px" }}>
// //             <i className="fa fa-bell me-1" style={{ color: "#fecb00" }}></i>I
// //             agree to receive updates and news from Erith Global.
// //           </span>
// //         </div>
// //         {errors.agreeUpdates && (
// //           <ErrMsg msg="You must agree before submitting" />
// //         )} */}

// //         {/* reCAPTCHA */}
// //         <div className="mt-4">
// //           <ReCAPTCHA
// //             sitekey="6LcS5usrAAAAAP5BQiBQzD3jTPPvmba6ldHrIPH3"
// //             onChange={handleRecaptchaChange}
// //           />
// //         </div>

// //         {/* Submit Button */}
// //         {/* <div className="row mt-4">
// //           <div className="col-3">
// //             <button
// //               type="submit"
// //               className="tp-btn-inner w-100"
// //               style={{
// //                 backgroundColor: "#1d3a72",
// //                 fontWeight: 600,
// //                 borderRadius: "10px",
// //                 height: "50px",
// //                 marginBottom: "5px",
// //                 fontSize:"13px"
// //               }}
// //             >
// //               Send Message
// //             </button>
// //           </div>
// //         </div> */}
// //         <div className="row mt-4">
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
// //             <button
// //               type="submit"
// //               className="tp-btn-inner w-100"
// //               style={{
// //                 backgroundColor: "#1d3a72",
// //                 fontWeight: 600,
// //                 borderRadius: "10px",
// //                 height: "50px",
// //                 marginBottom: "5px",
// //                 fontSize: "13px",
// //               }}
// //             >
// //               Send Message
// //             </button>
// //           </div>
// //         </div>
// //       </form>

// //       {/* Styles */}
// //       <style jsx>{`
// //         .uniform-field {
// //           height: 50px;
// //           width: 100%;
// //           border: 1px solid #ccc;
// //           border-radius: 6px;
// //           font-size: 15px;
// //           outline: none;
// //           transition: border 0.3s ease;
// //         }

// //         .uniform-field:focus {
// //           border-color: #1d3a72;
// //           box-shadow: 0 0 3px rgba(29, 58, 114, 0.35);
// //         }

// //         textarea.uniform-field {
// //           height: auto;
// //           min-height: 100px;
// //           resize: vertical;
// //         }

// //         .field-icon {
// //           position: absolute;
// //           left: 12px;
// //           top: 50%;
// //           transform: translateY(-50%);
// //           color: #fecb00;
// //           pointer-events: none;
// //         }

// //         /* 🔹 BUTTON FIX (no color bleed, no bottom glow) */
// //         .tp-btn-inner {
// //           border: none;
// //           outline: none;
// //           box-shadow: none;
// //         }

// //         .tp-btn-inner:hover,
// //         .tp-btn-inner:focus,
// //         .tp-btn-inner:active {
// //           outline: none;
// //           box-shadow: none;
// //           background-color: #1d3a72;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // "use client";

// // import { SubmitHandler, useForm } from "react-hook-form";
// // import { useState } from "react";
// // import { usePathname } from "next/navigation";
// // import ErrMsg from "../err-msg";

// // type Inputs = {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   preferredLanguage: string;
// //   companyName: string;
// //   requestDetails: string;
// //   country: string;
// //   businessAddress: string;
// //   phone: string;
// //   state: string;
// //   city: string;
// //   postalCode: string;
// // };

// // export default function ContactForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm<Inputs>();

// //   const [loading, setLoading] = useState(false);
// //   const pathname = usePathname(); // ✅ current page

// //   const onSubmit: SubmitHandler<Inputs> = async (data) => {
// //     setLoading(true);

// //     const finalData = {
// //       ...data,
// //       page: pathname, // ✅ page tracking
// //       fullUrl: window.location.href, // ✅ full URL
// //     };

// //     try {
// //       const res = await fetch("https://backend-test-yeyr.onrender.com/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(finalData),
// //       });

// //       const result = await res.json();

// //       if (result.success) {
// //         alert("Form submitted successfully!");
// //         reset();
// //       } else {
// //         alert(result.message || "Something went wrong");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       alert("Server error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="contact-section mx-auto px-3"
// //       style={{ maxWidth: "1200px" }}
// //     >
// //       {/* Heading */}
// //       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
// //         Learn More
// //       </h4>
// //       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
// //         Submit an Inquiry
// //       </h1>

// //       <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
// //         {/* Row 1 */}
// //         <div className="row g-3">
// //           {/* Email */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-envelope field-icon"></i>
// //               <input
// //                 type="email"
// //                 {...register("email", { required: "Email required" })}
// //                 placeholder="Email"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
// //             </div>
// //           </div>

// //           {/* First Name */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 {...register("firstName", { required: "First Name required" })}
// //                 placeholder="First Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.firstName && (
// //                 <ErrMsg msg={errors.firstName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Last Name */}
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 {...register("lastName", { required: "Last Name required" })}
// //                 placeholder="Last Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.lastName && (
// //                 <ErrMsg msg={errors.lastName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Preferred Language */}
// //           <div className="col-md-6">
// //             <div className="position-relative">
// //               <i className="fa fa-language field-icon"></i>
// //               <select
// //                 {...register("preferredLanguage", {
// //                   required: "Select language",
// //                 })}
// //                 className="ps-5 uniform-field form-select"
// //               >
// //                 <option value="">Preferred Language</option>
// //                 <option value="english">English</option>
// //                 <option value="french">French</option>
// //                 <option value="spanish">Spanish</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* Company Name */}
// //           {/* <div className="col-md-6">
// //             <div className="position-relative">
// //               <i className="fa fa-building field-icon"></i>
// //               <input
// //                 {...register("companyName")}
// //                 placeholder="Company Name"
// //                 className="ps-5 uniform-field"
// //               />
// //             </div>
// //           </div> */}
// //           <div className="col-md-6">
// //             <div className="position-relative">
// //               <i className="fa fa-building field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("companyName")}
// //                 placeholder="Company"
// //                 className="ps-5 uniform-field"
// //               />
// //               {/* {errors.companyName && (
// //                 <ErrMsg msg={errors.companyName.message ?? ""} />
// //               )} */}
// //             </div>
// //           </div>

// //           {/* Request Details */}
// //           <div className="col-12">
// //             <div className="position-relative">
// //               <i
// //                 className="fa fa-pencil field-icon"
// //                 style={{ top: "12px" }}
// //               ></i>
// //               <textarea
// //                 {...register("requestDetails", {
// //                   required: "Request details required",
// //                 })}
// //                 placeholder="Request Details"
// //                 className="ps-5 pt-3 uniform-field"
// //                 rows={4}
// //               ></textarea>
// //               {errors.requestDetails && (
// //                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Row 2 */}
// //         <div className="row g-3 mt-2">
// //           <div className="col-md-4">
// //             <select
// //               {...register("country", { required: "Select country" })}
// //               className="uniform-field form-select"
// //             >
// //               <option value="">Select Country</option>
// //               <option value="india">India</option>
// //               <option value="usa">USA</option>
// //               <option value="uk">UK</option>
// //             </select>
// //           </div>

// //           <div className="col-md-4">
// //             <input
// //               {...register("businessAddress")}
// //               placeholder="Business Address"
// //               className="uniform-field"
// //             />
// //           </div>

// //           <div className="col-md-4">
// //             <input
// //               {...register("phone", { required: "Phone number required" })}
// //               placeholder="Phone Number"
// //               className="uniform-field"
// //             />
// //             {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
// //           </div>

// //           <div className="col-md-4">
// //             <input
// //               {...register("state")}
// //               placeholder="State"
// //               className="uniform-field"
// //             />
// //           </div>

// //           <div className="col-md-4">
// //             <input
// //               {...register("city")}
// //               placeholder="City"
// //               className="uniform-field"
// //             />
// //           </div>

// //           <div className="col-md-4">
// //             <input
// //               {...register("postalCode")}
// //               placeholder="Postal Code"
// //               className="uniform-field"
// //             />
// //           </div>
// //         </div>

// //         {/* Submit Button */}
// //         <div className="row mt-4">
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
// //             <button
// //               type="submit"
// //               className="tp-btn-inner w-100"
// //               disabled={loading}
// //               style={{
// //                 backgroundColor: "#1d3a72",
// //                 fontWeight: 600,
// //                 borderRadius: "10px",
// //                 height: "50px",
// //                 fontSize: "13px",
// //                 color: "#fff",
// //               }}
// //             >
// //               {loading ? "Submitting..." : "Send Message"}
// //             </button>
// //           </div>
// //         </div>
// //       </form>

// //       {/* Styles */}
// //       <style jsx>{`
// //         .uniform-field {
// //           height: 50px;
// //           width: 100%;
// //           border: 1px solid #ccc;
// //           border-radius: 6px;
// //           padding-left: 40px;
// //           font-size: 15px;
// //         }

// //         textarea.uniform-field {
// //           min-height: 100px;
// //           padding-top: 10px;
// //         }

// //         .field-icon {
// //           position: absolute;
// //           left: 12px;
// //           top: 50%;
// //           transform: translateY(-50%);
// //           color: #fecb00;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // "use client";
// // import { SubmitHandler, useForm } from "react-hook-form";
// // import { useState } from "react";
// // import { usePathname } from "next/navigation";
// // import ErrMsg from "../err-msg";

// // type Inputs = {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   preferredLanguage: string;
// //   companyName: string;
// //   requestDetails: string;
// //   country: string;
// //   businessAddress: string;
// //   phone: string;
// //   state: string;
// //   city: string;
// //   postalCode: string;
// // };

// // export default function ContactForm() {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm<Inputs>();

// //   const [loading, setLoading] = useState(false);
// //   const pathname = usePathname();

// //   const onSubmit: SubmitHandler<Inputs> = async (data) => {
// //     setLoading(true);

// //     const finalData = {
// //       ...data,
// //       page: pathname,
// //       fullUrl: window.location.href,
// //     };

// //     try {
// //       const res = await fetch("https://backend-test-yeyr.onrender.com/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(finalData),
// //       });

// //       const result = await res.json();

// //       if (result.success) {
// //         alert("Form submitted successfully!");
// //         reset();
// //       } else {
// //         alert(result.message || "Something went wrong");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       alert("Server error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div
// //       className="contact-section mx-auto px-3"
// //       style={{ maxWidth: "1200px" }}
// //     >
// //       {/* Heading */}
// //       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
// //         Learn More
// //       </h4>
// //       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
// //         Submit an Inquiry
// //       </h1>

// //       <form
// //         id="contact-form"
// //         className="row g-3"
// //         onSubmit={handleSubmit(onSubmit)}
// //       >
// //         {/* Row 1 */}
// //         <div className="row g-3">
// //           {/* Email */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-envelope field-icon"></i>
// //               <input
// //                 type="email"
// //                 {...register("email", { required: "Email required" })}
// //                 placeholder="Email"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
// //             </div>
// //           </div>

// //           {/* First Name */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("firstName", { required: "First Name required" })}
// //                 placeholder="First Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.firstName && (
// //                 <ErrMsg msg={errors.firstName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Last Name */}
// //           <div className="col-md-4">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-user field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("lastName", { required: "Last Name required" })}
// //                 placeholder="Last Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {errors.lastName && (
// //                 <ErrMsg msg={errors.lastName.message ?? ""} />
// //               )}
// //             </div>
// //           </div>

// //           {/* Preferred Language */}
// //           <div className="col-md-6">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-language field-icon"></i>
// //               <select
// //                 {...register("preferredLanguage", {
// //                   required: "Select language",
// //                 })}
// //                 className="ps-5 uniform-field form-select"
// //               >
// //                 <option value="">Preferred Language</option>
// //                 <option value="english">English</option>
// //                 <option value="french">French</option>
// //                 <option value="spanish">Spanish</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* Company Name */}
// //           <div className="col-md-6">
// //             <div className="tp-contact-input position-relative">
// //               <i className="fa fa-building field-icon"></i>
// //               <input
// //                 type="text"
// //                 {...register("companyName")}
// //                 placeholder="Company Name"
// //                 className="ps-5 uniform-field"
// //               />
// //               {/* {errors.companyName && (
// //                 <ErrMsg msg={errors.companyName.message ?? ""} />
// //               )} */}
// //             </div>
// //           </div>

// //           {/* Request Details */}
// //           <div className="col-12">
// //             <div className="tp-contact-input position-relative">
// //               <i
// //                 className="fa fa-pencil field-icon"
// //                 style={{ top: "12px" }}
// //               ></i>
// //               <textarea
// //                 {...register("requestDetails", {
// //                   required: "Request details required",
// //                 })}
// //                 placeholder="Request Details"
// //                 className="ps-5 pt-3 uniform-field"
// //                 rows={4}
// //               ></textarea>
// //               {errors.requestDetails && (
// //                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
// //               )}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Row 2 */}
// //         <div className="row g-3 mt-2">
// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-globe field-icon"></i>
// //               <select
// //                 {...register("country", { required: "Select country" })}
// //                 className="uniform-field form-select ps-5"
// //               >
// //                 <option value="">Select Country</option>
// //                 <option value="usa">USA</option>
// //                 <option value="uk">UK</option>
// //                 <option value="india">India</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-map-marker field-icon"></i>
// //               <input
// //                 {...register("businessAddress")}
// //                 placeholder="Business Address"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-phone field-icon"></i>
// //               <input
// //                 {...register("phone", { required: "Phone number required" })}
// //                 placeholder="Phone Number"
// //                 className="uniform-field form-control ps-5"
// //               />
// //               {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-map field-icon"></i>
// //               <input
// //                 {...register("state")}
// //                 placeholder="State"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-city field-icon"></i>
// //               <input
// //                 {...register("city")}
// //                 placeholder="City"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>

// //           <div className="col-md-4">
// //             <div className="position-relative">
// //               <i className="fa fa-mail-bulk field-icon"></i>
// //               <input
// //                 {...register("postalCode")}
// //                 placeholder="Postal Code"
// //                 className="uniform-field form-control ps-5"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Submit */}
// //         <div className="row mt-4">
// //           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
// //             <button
// //               type="submit"
// //               className="tp-btn-inner w-100"
// //               disabled={loading}
// //               style={{
// //                 backgroundColor: "#1d3a72",
// //                 fontWeight: 600,
// //                 borderRadius: "10px",
// //                 height: "50px",
// //                 marginBottom: "5px",
// //                 fontSize: "13px",
// //               }}
// //             >
// //               {loading ? "Submitting..." : "Send Message"}
// //             </button>
// //           </div>
// //         </div>
// //       </form>

// //       {/* Styles (UNCHANGED) */}
// //       <style jsx>{`
// //         .uniform-field {
// //           height: 50px;
// //           width: 100%;
// //           border: 1px solid #ccc;
// //           border-radius: 6px;
// //           font-size: 15px;
// //           outline: none;
// //           transition: border 0.3s ease;
// //         }

// //         .uniform-field:focus {
// //           border-color: #1d3a72;
// //           box-shadow: 0 0 3px rgba(29, 58, 114, 0.35);
// //         }

// //         textarea.uniform-field {
// //           height: auto;
// //           min-height: 100px;
// //           resize: vertical;
// //         }

// //         .field-icon {
// //           position: absolute;
// //           left: 12px;
// //           top: 50%;
// //           transform: translateY(-50%);
// //           color: #fecb00;
// //           pointer-events: none;
// //         }

// //         .tp-btn-inner {
// //           border: none;
// //           outline: none;
// //           box-shadow: none;
// //         }

// //         .tp-btn-inner:hover,
// //         .tp-btn-inner:focus,
// //         .tp-btn-inner:active {
// //           outline: none;
// //           box-shadow: none;
// //           background-color: #1d3a72;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// "use client";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import ErrMsg from "../err-msg";
// import PhoneInput from "react-phone-input-2";

// type Inputs = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   preferredLanguage: string;
//   companyName: string;
//   requestDetails: string;
//   country: string;
//   businessAddress: string;
//   phone: string;
//   state: string;
//   city: string;
//   postalCode: string;
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//       setValue,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname();

//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("in");

//   useEffect(() => {
//     const detectCountry = async () => {
//       try {
//         const res = await fetch("https://ipapi.co/json/");
//         const data = await res.json();

//         if (data?.country_code) {
//           const code = data.country_code.toLowerCase();
//           setCountry(code);
//           setValue("country", code); // sync with form
//         }
//       } catch (err) {
//         console.error("Geo detect failed");
//       }
//     };

//     detectCountry();
//   }, []);

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     setLoading(true);

//     const finalData = {
//       ...data,
//       page: pathname,
//       fullUrl: window.location.href,
//     };

//     try {
//       const res = await fetch("https://backend-test-yeyr.onrender.com/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("Form submitted successfully!");
//         reset();
//       } else {
//         alert(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="contact-section mx-auto px-3"
//       style={{ maxWidth: "1200px" }}
//     >
//       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
//         Learn More
//       </h4>
//       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
//         Submit an Inquiry
//       </h1>

//       <form
//         id="contact-form"
//         className="row g-3"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className="row g-3">
//           {/* Email */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-envelope field-icon"></i>
//               <input
//                 type="email"
//                 {...register("email", { required: "Email required" })}
//                 placeholder="Email"
//                 className="ps-5 uniform-field"
//               />
//               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
//             </div>
//           </div>

//           {/* First Name */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 type="text"
//                 {...register("firstName", { required: "First Name required" })}
//                 placeholder="First Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.firstName && (
//                 <ErrMsg msg={errors.firstName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Last Name */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 type="text"
//                 {...register("lastName", { required: "Last Name required" })}
//                 placeholder="Last Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.lastName && (
//                 <ErrMsg msg={errors.lastName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Preferred Language (OPTIONAL) */}
//           <div className="col-md-6">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-language field-icon"></i>
//               <select
//                 {...register("preferredLanguage")}
//                 className="ps-5 uniform-field form-select"
//               >
//                 <option value="">Preferred Language</option>
//                 <option value="english">English</option>
//                 <option value="french">French</option>
//                 <option value="spanish">Spanish</option>
//               </select>
//             </div>
//           </div>

//           {/* Company Name (OPTIONAL) */}
//           <div className="col-md-6">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-building field-icon"></i>
//               <input
//                 type="text"
//                 {...register("companyName")}
//                 placeholder="Company Name"
//                 className="ps-5 uniform-field"
//               />
//             </div>
//           </div>

//           {/* Request Details */}
//           <div className="col-12">
//             <div className="tp-contact-input position-relative">
//               <i
//                 className="fa fa-pencil field-icon"
//                 style={{ top: "12px" }}
//               ></i>
//               <textarea
//                 {...register("requestDetails", {
//                   required: "Request details required",
//                 })}
//                 placeholder="Request Details"
//                 className="ps-5 pt-3 uniform-field"
//                 rows={4}
//               ></textarea>
//               {errors.requestDetails && (
//                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="row g-3 mt-2">
//           {/* Country (OPTIONAL) */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-globe field-icon"></i>
//               <select
//                 {...register("country")}
//                 className="uniform-field form-select ps-5"
//               >
//                 <option value="">Select Country</option>
//                 <option value="usa">USA</option>
//                 <option value="uk">UK</option>
//                 <option value="india">India</option>
//               </select>
//             </div>
//           </div>

//           {/* Business Address */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-map-marker field-icon"></i>
//               <input
//                 {...register("businessAddress")}
//                 placeholder="Business Address"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           {/* Phone */}
//           {/* <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-phone field-icon"></i>
//               <input
//                 {...register("phone", { required: "Phone number required" })}
//                 placeholder="Phone Number"
//                 className="uniform-field form-control ps-5"
//               />
//               {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
//             </div>
//           </div> */}

//           <PhoneInput
//             country={country}
//             enableSearch={true}
//             value={phone}
//             onChange={(value, data) => {
//               setPhone(value);
//               setCountry(data.countryCode);
//               setValue("country", data.countryCode); // sync dropdown
//             }}
//             inputClass="uniform-field"
//             containerClass="w-100"
//             inputStyle={{
//               width: "100%",
//               height: "50px",
//               paddingLeft: "48px",
//             }}
//           />

//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-map field-icon"></i>
//               <input
//                 {...register("state")}
//                 placeholder="State"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-city field-icon"></i>
//               <input
//                 {...register("city")}
//                 placeholder="City"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-mail-bulk field-icon"></i>
//               <input
//                 {...register("postalCode")}
//                 placeholder="Postal Code"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="row mt-4">
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//             <button
//               type="submit"
//               className="tp-btn-inner w-100"
//               disabled={loading}
//               style={{
//                 backgroundColor: "#1d3a72",
//                 fontWeight: 600,
//                 borderRadius: "10px",
//                 height: "50px",
//                 marginBottom: "5px",
//                 fontSize: "13px",
//               }}
//             >
//               {loading ? "Submitting..." : "Send Message"}
//             </button>
//           </div>
//         </div>
//       </form>

//       <style jsx>{`
//         .uniform-field {
//           height: 50px;
//           width: 100%;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 15px;
//           outline: none;
//           transition: border 0.3s ease;
//         }

//         .uniform-field:focus {
//           border-color: #1d3a72;
//           box-shadow: 0 0 3px rgba(29, 58, 114, 0.35);
//         }

//         textarea.uniform-field {
//           height: auto;
//           min-height: 100px;
//           resize: vertical;
//         }

//         .field-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #fecb00;
//           pointer-events: none;
//         }

//         .tp-btn-inner {
//           border: none;
//           outline: none;
//           box-shadow: none;
//         }

//         .tp-btn-inner:hover,
//         .tp-btn-inner:focus,
//         .tp-btn-inner:active {
//           outline: none;
//           box-shadow: none;
//           background-color: #1d3a72;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import ErrMsg from "../err-msg";

// type Inputs = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   inquiryReason: string;
//   preferredLanguage: string;
//   companyName: string;
//   requestDetails: string;
//   country: string;
//   businessAddress: string;
//   phone: string;
//   state: string;
//   city: string;
//   postalCode: string;
//   agreeUpdates: boolean;
//   recaptcha: string;
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const [recaptchaVerified, setRecaptchaVerified] = useState(false);

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     if (!recaptchaVerified) {
//       alert("Please verify you are not a robot before submitting.");
//       return;
//     }
//     console.log("Form Submitted:", data);
//   };

//   const handleRecaptchaChange = (value: string | null) => {
//     if (value) {
//       setRecaptchaVerified(true);
//       setValue("recaptcha", value);
//     } else {
//       setRecaptchaVerified(false);
//     }
//   };

//   return (
//     <div
//       className="contact-section mx-auto px-3"
//       style={{ maxWidth: "1200px" }}
//     >
//       {/* Heading */}
//       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
//         Learn More
//       </h4>
//       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
//         Submit an Inquiry
//       </h1>

//       <form
//         id="contact-form"
//         className="row g-3 "
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         {/* Row 1 */}
//         <div className="row g-3">
//           {/* Email */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-envelope field-icon"></i>
//               <input
//                 type="email"
//                 {...register("email", { required: "Email required" })}
//                 placeholder="Email"
//                 className="ps-5 uniform-field"
//               />
//               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
//             </div>
//           </div>

//           {/* First Name */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 type="text"
//                 {...register("firstName", { required: "First Name required" })}
//                 placeholder="First Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.firstName && (
//                 <ErrMsg msg={errors.firstName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Last Name */}
//           <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 type="text"
//                 {...register("lastName", { required: "Last Name required" })}
//                 placeholder="Last Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.lastName && (
//                 <ErrMsg msg={errors.lastName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Inquiry Reason */}
//           {/* <div className="col-md-4">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-question-circle field-icon"></i>
//               <select
//                 {...register("inquiryReason", {
//                   required: "Select inquiry reason",
//                 })}
//                 className="ps-5 uniform-field form-select"
//               >
//                 <option value="">Inquiry Reason</option>
//                 <option value="general">General</option>
//                 <option value="support">Support</option>
//                 <option value="sales">Sales</option>
//               </select>
//               {errors.inquiryReason && (
//                 <ErrMsg msg={errors.inquiryReason.message ?? ""} />
//               )}
//             </div>
//           </div> */}

//           {/* Preferred Language */}
//           <div className="col-md-6">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-language field-icon"></i>
//               <select
//                 {...register("preferredLanguage", {
//                   required: "Select language",
//                 })}
//                 className="ps-5 uniform-field form-select"
//               >
//                 <option value="">Preferred Language</option>
//                 <option value="english">English</option>
//                 <option value="french">French</option>
//                 <option value="spanish">Spanish</option>
//               </select>
//               {/* {errors.preferredLanguage && (
//                 <ErrMsg msg={errors.preferredLanguage.message ?? ""} />
//               )} */}
//             </div>
//           </div>

//           {/* Company Name */}
//           <div className="col-md-6">
//             <div className="tp-contact-input position-relative">
//               <i className="fa fa-building field-icon"></i>
//               <input
//                 type="text"
//                 {...register("companyName")}
//                 placeholder="Company Name"
//                 className="ps-5 uniform-field"
//               />
//             </div>
//           </div>

//           {/* Request Details */}
//           <div className="col-12">
//             <div className="tp-contact-input position-relative">
//               <i
//                 className="fa fa-pencil field-icon"
//                 style={{ top: "12px" }}
//               ></i>
//               <textarea
//                 {...register("requestDetails", {
//                   required: "Request details required",
//                 })}
//                 placeholder="Request Details"
//                 className="ps-5 pt-3 uniform-field"
//                 rows={4}
//               ></textarea>
//               {errors.requestDetails && (
//                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="row g-3 mt-2">
//           {/* Country */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-globe field-icon"></i>
//               <select
//                 {...register("country", { required: "Select country" })}
//                 className="uniform-field form-select ps-5"
//               >
//                 <option value="">Select Country</option>
//                 <option value="usa">USA</option>
//                 <option value="uk">UK</option>
//                 <option value="india">India</option>
//               </select>
//             </div>
//             {/* {errors.country && <ErrMsg msg={errors.country.message ?? ""} />} */}
//           </div>

//           {/* Business Address */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-map-marker field-icon"></i>
//               <input
//                 {...register("businessAddress")}
//                 placeholder="Business Address"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           {/* Phone Number */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-phone field-icon"></i>
//               <input
//                 // type="tel"
//                 {...register("phone", { required: "Phone number required" })}
//                 placeholder="Phone Number"
//                 className="uniform-field form-control ps-5"
//               />
//               {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
//             </div>
//           </div>

//           {/* State */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-map field-icon"></i>
//               <input
//                 {...register("state")}
//                 placeholder="State"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           {/* City */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-city field-icon"></i>
//               <input
//                 {...register("city")}
//                 placeholder="City"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>

//           {/* Postal Code */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-mail-bulk field-icon"></i>
//               <input
//                 {...register("postalCode")}
//                 placeholder="Postal Code"
//                 className="uniform-field form-control ps-5"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Updates Checkbox */}
//         {/* <div className="mt-3 d-flex align-items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("agreeUpdates", { required: true })}
//             style={{ width: "18px", height: "18px", cursor: "pointer" }}
//           />
//           <span style={{ fontSize: "14px" }}>
//             <i className="fa fa-bell me-1" style={{ color: "#fecb00" }}></i>I
//             agree to receive updates and news from Erith Global.
//           </span>
//         </div>
//         {errors.agreeUpdates && (
//           <ErrMsg msg="You must agree before submitting" />
//         )} */}

//         {/* reCAPTCHA */}
//         <div className="mt-4">
//           <ReCAPTCHA
//             sitekey="6LcS5usrAAAAAP5BQiBQzD3jTPPvmba6ldHrIPH3"
//             onChange={handleRecaptchaChange}
//           />
//         </div>

//         {/* Submit Button */}
//         {/* <div className="row mt-4">
//           <div className="col-3">
//             <button
//               type="submit"
//               className="tp-btn-inner w-100"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 fontWeight: 600,
//                 borderRadius: "10px",
//                 height: "50px",
//                 marginBottom: "5px",
//                 fontSize:"13px"
//               }}
//             >
//               Send Message
//             </button>
//           </div>
//         </div> */}
//         <div className="row mt-4">
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//             <button
//               type="submit"
//               className="tp-btn-inner w-100"
//               style={{
//                 backgroundColor: "#1d3a72",
//                 fontWeight: 600,
//                 borderRadius: "10px",
//                 height: "50px",
//                 marginBottom: "5px",
//                 fontSize: "13px",
//               }}
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Styles */}
//       <style jsx>{`
//         .uniform-field {
//           height: 50px;
//           width: 100%;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           font-size: 15px;
//           outline: none;
//           transition: border 0.3s ease;
//         }

//         .uniform-field:focus {
//           border-color: #1d3a72;
//           box-shadow: 0 0 3px rgba(29, 58, 114, 0.35);
//         }

//         textarea.uniform-field {
//           height: auto;
//           min-height: 100px;
//           resize: vertical;
//         }

//         .field-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #fecb00;
//           pointer-events: none;
//         }

//         /* 🔹 BUTTON FIX (no color bleed, no bottom glow) */
//         .tp-btn-inner {
//           border: none;
//           outline: none;
//           box-shadow: none;
//         }

//         .tp-btn-inner:hover,
//         .tp-btn-inner:focus,
//         .tp-btn-inner:active {
//           outline: none;
//           box-shadow: none;
//           background-color: #1d3a72;
//         }
//       `}</style>
//     </div>
//   );
// }

// "use client";

// import { SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import ErrMsg from "../err-msg";

// type Inputs = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   preferredLanguage: string;
//   companyName: string;
//   requestDetails: string;
//   country: string;
//   businessAddress: string;
//   phone: string;
//   state: string;
//   city: string;
//   postalCode: string;
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const [loading, setLoading] = useState(false);
//   const pathname = usePathname(); // ✅ current page

//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     setLoading(true);

//     const finalData = {
//       ...data,
//       page: pathname, // ✅ page tracking
//       fullUrl: window.location.href, // ✅ full URL
//     };

//     try {
//       const res = await fetch("https://backend-test-yeyr.onrender.com/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(finalData),
//       });

//       const result = await res.json();

//       if (result.success) {
//         alert("Form submitted successfully!");
//         reset();
//       } else {
//         alert(result.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="contact-section mx-auto px-3"
//       style={{ maxWidth: "1200px" }}
//     >
//       {/* Heading */}
//       <h4 className="mb-2" style={{ color: "#292929", fontSize: "18px" }}>
//         Learn More
//       </h4>
//       <h1 className="mb-4" style={{ fontSize: "60px", color: "#1d3a72" }}>
//         Submit an Inquiry
//       </h1>

//       <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
//         {/* Row 1 */}
//         <div className="row g-3">
//           {/* Email */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-envelope field-icon"></i>
//               <input
//                 type="email"
//                 {...register("email", { required: "Email required" })}
//                 placeholder="Email"
//                 className="ps-5 uniform-field"
//               />
//               {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
//             </div>
//           </div>

//           {/* First Name */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 {...register("firstName", { required: "First Name required" })}
//                 placeholder="First Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.firstName && (
//                 <ErrMsg msg={errors.firstName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Last Name */}
//           <div className="col-md-4">
//             <div className="position-relative">
//               <i className="fa fa-user field-icon"></i>
//               <input
//                 {...register("lastName", { required: "Last Name required" })}
//                 placeholder="Last Name"
//                 className="ps-5 uniform-field"
//               />
//               {errors.lastName && (
//                 <ErrMsg msg={errors.lastName.message ?? ""} />
//               )}
//             </div>
//           </div>

//           {/* Preferred Language */}
//           <div className="col-md-6">
//             <div className="position-relative">
//               <i className="fa fa-language field-icon"></i>
//               <select
//                 {...register("preferredLanguage", {
//                   required: "Select language",
//                 })}
//                 className="ps-5 uniform-field form-select"
//               >
//                 <option value="">Preferred Language</option>
//                 <option value="english">English</option>
//                 <option value="french">French</option>
//                 <option value="spanish">Spanish</option>
//               </select>
//             </div>
//           </div>

//           {/* Company Name */}
//           {/* <div className="col-md-6">
//             <div className="position-relative">
//               <i className="fa fa-building field-icon"></i>
//               <input
//                 {...register("companyName")}
//                 placeholder="Company Name"
//                 className="ps-5 uniform-field"
//               />
//             </div>
//           </div> */}
//           <div className="col-md-6">
//             <div className="position-relative">
//               <i className="fa fa-building field-icon"></i>
//               <input
//                 type="text"
//                 {...register("companyName")}
//                 placeholder="Company"
//                 className="ps-5 uniform-field"
//               />
//               {/* {errors.companyName && (
//                 <ErrMsg msg={errors.companyName.message ?? ""} />
//               )} */}
//             </div>
//           </div>

//           {/* Request Details */}
//           <div className="col-12">
//             <div className="position-relative">
//               <i
//                 className="fa fa-pencil field-icon"
//                 style={{ top: "12px" }}
//               ></i>
//               <textarea
//                 {...register("requestDetails", {
//                   required: "Request details required",
//                 })}
//                 placeholder="Request Details"
//                 className="ps-5 pt-3 uniform-field"
//                 rows={4}
//               ></textarea>
//               {errors.requestDetails && (
//                 <ErrMsg msg={errors.requestDetails.message ?? ""} />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="row g-3 mt-2">
//           <div className="col-md-4">
//             <select
//               {...register("country", { required: "Select country" })}
//               className="uniform-field form-select"
//             >
//               <option value="">Select Country</option>
//               <option value="india">India</option>
//               <option value="usa">USA</option>
//               <option value="uk">UK</option>
//             </select>
//           </div>

//           <div className="col-md-4">
//             <input
//               {...register("businessAddress")}
//               placeholder="Business Address"
//               className="uniform-field"
//             />
//           </div>

//           <div className="col-md-4">
//             <input
//               {...register("phone", { required: "Phone number required" })}
//               placeholder="Phone Number"
//               className="uniform-field"
//             />
//             {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
//           </div>

//           <div className="col-md-4">
//             <input
//               {...register("state")}
//               placeholder="State"
//               className="uniform-field"
//             />
//           </div>

//           <div className="col-md-4">
//             <input
//               {...register("city")}
//               placeholder="City"
//               className="uniform-field"
//             />
//           </div>

//           <div className="col-md-4">
//             <input
//               {...register("postalCode")}
//               placeholder="Postal Code"
//               className="uniform-field"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="row mt-4">
//           <div className="col-12 col-sm-6 col-md-4 col-lg-3">
//             <button
//               type="submit"
//               className="tp-btn-inner w-100"
//               disabled={loading}
//               style={{
//                 backgroundColor: "#1d3a72",
//                 fontWeight: 600,
//                 borderRadius: "10px",
//                 height: "50px",
//                 fontSize: "13px",
//                 color: "#fff",
//               }}
//             >
//               {loading ? "Submitting..." : "Send Message"}
//             </button>
//           </div>
//         </div>
//       </form>

//       {/* Styles */}
//       <style jsx>{`
//         .uniform-field {
//           height: 50px;
//           width: 100%;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           padding-left: 40px;
//           font-size: 15px;
//         }

//         textarea.uniform-field {
//           min-height: 100px;
//           padding-top: 10px;
//         }

//         .field-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           color: #fecb00;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ErrMsg from "../err-msg";
import ReCAPTCHA from "react-google-recaptcha";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  preferredLanguage: string;
  companyName: string;
  requestDetails: string;
  country: string;
  businessAddress: string;
  phone: string;
  state: string;
  city: string;
  postalCode: string;
  recaptcha: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const pathname = usePathname();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // 🔐 FIX: strict captcha validation
    const token = getValues("recaptcha");

    if (!recaptchaVerified || !token) {
      setRecaptchaError("Please complete reCAPTCHA verification");
      return;
    }

    setLoading(true);

    const finalData = {
      ...data,
      page: pathname,
      fullUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch(
        "https://backend-test-yeyr.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        },
      );

      const result = await res.json();

      if (result.success) {
        alert("Form submitted successfully!");

        reset();
        setRecaptchaVerified(false);
        setRecaptchaError(null);

        // clear captcha value
        setValue("recaptcha", "");
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setRecaptchaVerified(true);
      setRecaptchaError(null);

      setValue("recaptcha", value, { shouldValidate: true });
    } else {
      setRecaptchaVerified(false);
      setRecaptchaError("Please verify reCAPTCHA");

      setValue("recaptcha", "", { shouldValidate: true });
    }
  };

  return (
    <div
      className="contact-section mx-auto px-3 container"
      // style={{ maxWidth: "1200px" }}
    >
      {/* <div className="contact-section container mx-auto px-3"  style={{ marginBottom: "20px" }}> */}
      <h3 className="tp-about-campus-title mb-3" style={{ color: "#1d3a72" }}>
        Submit an Inquiry
      </h3>

      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          {/* Email */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-envelope field-icon"></i>
              <input
                type="email"
                {...register("email", { required: "Email required" })}
                placeholder="Email"
                className="ps-5 uniform-field"
              />
              {errors.email && <ErrMsg msg={errors.email.message ?? ""} />}
            </div>
          </div>

          {/* First Name */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-user field-icon"></i>
              <input
                type="text"
                {...register("firstName", { required: "First Name required" })}
                placeholder="First Name"
                className="ps-5 uniform-field"
              />
              {errors.firstName && (
                <ErrMsg msg={errors.firstName.message ?? ""} />
              )}
            </div>
          </div>

          {/* Last Name */}
          <div className="col-md-4">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-user field-icon"></i>
              <input
                type="text"
                {...register("lastName", { required: "Last Name required" })}
                placeholder="Last Name"
                className="ps-5 uniform-field"
              />
              {errors.lastName && (
                <ErrMsg msg={errors.lastName.message ?? ""} />
              )}
            </div>
          </div>

          {/* Preferred Language */}
          <div className="col-md-6">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-language field-icon"></i>
              <select
                {...register("preferredLanguage")}
                className="ps-5 uniform-field form-select"
              >
                <option value="">Preferred Language</option>
                <option value="english">English</option>
                <option value="french">French</option>
                <option value="spanish">Spanish</option>
              </select>
            </div>
          </div>

          {/* Company Name */}
          <div className="col-md-6">
            <div className="tp-contact-input position-relative">
              <i className="fa fa-building field-icon"></i>
              <input
                type="text"
                {...register("companyName")}
                placeholder="Company Name"
                className="ps-5 uniform-field"
              />
            </div>
          </div>

          {/* Request Details */}
          <div className="col-12">
            <div className="tp-contact-input position-relative">
              <i
                className="fa fa-pencil field-icon"
                style={{ top: "12px" }}
              ></i>
              <textarea
                {...register("requestDetails", {
                  required: "Request details required",
                })}
                placeholder="Request Details"
                className="ps-5 pt-3 uniform-field"
                rows={4}
              ></textarea>
              {errors.requestDetails && (
                <ErrMsg msg={errors.requestDetails.message ?? ""} />
              )}
            </div>
          </div>
        </div>

        <div className="row g-3 mt-2">
          {/* Country */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-globe field-icon"></i>
              <select
                {...register("country")}
                className="uniform-field form-select ps-5"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="india">India</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-map-marker field-icon"></i>
              <input
                {...register("businessAddress")}
                placeholder="Business Address"
                className="uniform-field form-control ps-5"
              />
            </div>
          </div>

          {/* Phone */}
          {/* <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-phone field-icon"></i>
              <input
                {...register("phone", { required: "Phone number required" })}
                // placeholder="Phone Number with Country code"
                placeholder="Phone Number (Including Country Code)"
                className="uniform-field form-control ps-5"
              />
              {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
            </div>
          </div> */}
          <div className="col-md-4">
            <div className="position-relative">
              <i className="fa fa-phone field-icon"></i>

              <input
                type="tel"
                inputMode="numeric"
                {...register("phone", {
                  required: "Phone number required",
                  pattern: {
                    value: /^[0-9+ ]+$/,
                    message: "Only numbers are allowed",
                  },
                })}
                placeholder="Phone Number (Including Country Code)"
                className="uniform-field form-control ps-5"
              />

              {errors.phone && <ErrMsg msg={errors.phone.message ?? ""} />}
            </div>
          </div>

          <div className="col-md-4">
            <input
              {...register("state")}
              placeholder="State"
              className="uniform-field form-control"
            />
          </div>

          <div className="col-md-4">
            <input
              {...register("city")}
              placeholder="City"
              className="uniform-field form-control"
            />
          </div>

          <div className="col-md-4">
            <input
              {...register("postalCode")}
              placeholder="Postal Code"
              className="uniform-field form-control"
            />
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="mt-4 recaptcha-wrapper">
          <ReCAPTCHA
            sitekey="6LdFCOssAAAAAMHy1HcC02jpKB2LnWYLTR9dI8gD"
            onChange={handleRecaptchaChange}
          />

          {recaptchaError && (
            <p style={{ color: "red", marginTop: "8px", fontSize: "13px" }}>
              {recaptchaError}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="row mt-4">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <button
              type="submit"
              className="tp-btn-inner w-100"
              disabled={loading}
              style={{
                backgroundColor: "#1d3a72",
                fontWeight: 600,
                borderRadius: "10px",
                height: "50px",
                fontSize: "13px",
              }}
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>

      {/* Styles (UNCHANGED) */}
      <style jsx>{`
        .uniform-field {
          height: 50px;
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
          transition: border 0.3s ease;
        }

        .uniform-field:focus {
          border-color: #1d3a72;
          box-shadow: 0 0 3px rgba(29, 58, 114, 0.35);
        }

        textarea.uniform-field {
          height: auto;
          min-height: 100px;
        }

        .field-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #fecb00;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
