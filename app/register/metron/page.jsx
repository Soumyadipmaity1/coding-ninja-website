// "use client"

// import React, { useState } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import { BsArrowRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import AnimatedBackground from '@components/animatedbackground';
// // import { fadeIn } from "@/components/ui/variants";

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     Name: '',
//     RollNo: '',
//     Email: '',
//     Contact: '',
//     Branch: '',
//     Suggestion: '',
//     Question: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const formEle = e.target;
//     const formData = new FormData(formEle);

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbxhVjFpZ_1tRbDQz6YeF3LV6IJ5GAF-aFQPMBwN9ZPt3092HBWQBuvhYaf9ulR6QzI3Bw/exec",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (response.status === 200) {
//         formEle.reset();
//         setFormData({
//           Name: '',
//           RollNo: '',
//           Email: '',
//           Contact: '',
//           Branch: '',
//           Suggestion: '',
//           Question: ''
//         });
//         toast.success('Registration submitted successfully!', {
//           style: {
//             border: '1px solid #ee6220',
//             padding: '16px',
//             color: '#ee6220',
//             background: '#020617',
//             zIndex: 9999999,
//           },
//           iconTheme: {
//             primary: '#ee6220',
//             secondary: '#ee6220',
//           },
//         });
//       } else {
//         throw new Error('Server responded with an error');
//       }
//     } catch (error) {
//       toast.error('Failed to submit registration. Please try again.', {
//         style: {
//           border: '1px solid #ff4b4b',
//           padding: '16px',
//           color: '#ff4b4b',
//           background: '#020617',
//           zIndex: 9999999,
//         },
//         iconTheme: {
//           primary: '#ff4b4b',
//           secondary: '#020617',
//         },
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className=" py-20 text-black pt-28">
//       {/* <AnimatedBackground/> */}
//       <Toaster position="bottom-right" reverseOrder={false} containerStyle={{ zIndex: 10000000 }} />
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           className="text-5xl font-extrabold text-white text-center mb-10"
//         >
//           Let's <span className="text-[#ee6220]">Register.</span>
//         </motion.h2>

//         <motion.form
//           initial="hidden"
//           animate="show"
//           exit="hidden"
//           onSubmit={handleSubmit}
//           className="max-w-lg mx-auto space-y-4"
//         >
//           <input
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//             required
//           />
          
//           <input
//             type="text"
//             name="RollNo"
//             value={formData.RollNo}
//             onChange={handleChange}
//             placeholder="Roll No"
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//             required
//           />
          
//           <input
//             type="email"
//             name="Email"
//             value={formData.Email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//             required
//           />
          
//           <input
//             type="text"
//             name="Contact"
//             value={formData.Contact}
//             onChange={handleChange}
//             placeholder="Contact"
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//             required
//           />
          
//           <select
//             name="Branch"
//             value={formData.Branch}
//             onChange={handleChange}
//             className="block w-full px-4 py-3 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//             required
//           >
//             <option value="">Select Branch</option>
//             <option value="CSE">Computer Science</option>
//             <option value="ECE">Electronics & Communication</option>
//             <option value="ME">Mechanical</option>
//             <option value="CE">Civil</option>
//           </select>
          
//           <textarea
//             name="Suggestion"
//             value={formData.Suggestion}
//             onChange={handleChange}
//             placeholder="Suggestion"
//             rows={3}
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//           ></textarea>
          
//           <textarea
//             name="Question"
//             value={formData.Question}
//             onChange={handleChange}
//             placeholder="Any Question?"
//             rows={3}
//             className="block w-full px-4 py-2 rounded-[6px] bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-[#ee6220] dark:focus:ring-[#7dd3fc] focus:bg-white dark:focus:bg-gray-900 transition duration-300 outline-none focus:ring-1"
//           ></textarea>
          
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full px-6 py-3 rounded-[8px] text-white bg-[#ee6220] dark:bg-[#ee6220] hover:bg-[#ff712f] dark:hover:bg-[#ee6220] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ee6220] dark:focus:ring-[#38bdf8] transition duration-300 flex items-center justify-center"
//           >
//             {isSubmitting ? (
//               <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//             ) : (
//               <>
//                 <span className="mr-2">Submit</span>
//                 <BsArrowRight className="text-lg" />
//               </>
//             )}
//           </button>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;





import React from 'react'

function page() {
  return (
    <div className='flex h-screen justify-center text-center items-center sm:text-6xl text-3xl text-orange-500 font-mono'>
      Registration Closed 
    </div>
  )
}

export default page
