// Commented out due to no use

// import emailjs from 'emailjs-com';
// import React, { forwardRef } from 'react';
// import { useDashboardSharedVariable } from '../../shared/dashboard.shared.tsx';

// interface SignupFormProps {
//   handleSignUp: () => void;
// }

// const SignupForm: React.FC<SignupFormProps> = forwardRef(() => {
//   const { handleSignUp } = useDashboardSharedVariable();

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_9gc4oee',
//         'template_a54szlf',
//         e.target as HTMLFormElement,
//         'pFuS6DzkRF7vqH-Gd'
//       )
//       .then(
//         (result) => {
//           console.log('Email sent successfully:', result.text);
//           handleSignUp();
//         },
//         (error) => {
//           console.log('Error sending email:', error.text);
//         }
//       );
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-md p-6 max-w-md w-full z-50">
//         <form
//           onSubmit={handleFormSubmit}
//           className="flex flex-col items-center"
//         >
//           <div className="mb-4 w-full">
//             <label
//               htmlFor="fullName"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               className="mt-1 p-2 border rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4 w-full">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 p-2 border rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4 w-full">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="mt-1 p-2 border rounded-md w-full"
//               rows={4}
//               required
//             ></textarea>
//           </div>
//           <div className="flex w-full justify-around">
//             <button
//               type="submit"
//               className="bg-emerald text-white px-4 py-2 rounded-md hover:bg-emerald-dark"
//             >
//               Request Early Access
//             </button>
//             <button
//               type="button"
//               onClick={handleSignUp}
//               className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md hover:bg-gray-400"
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// });

// export default SignupForm;
