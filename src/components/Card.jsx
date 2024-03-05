// const Card = ({ title, description, imageSrc, link }) => {
//     return (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 my-10 sm:my-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300 ">
//             <a href={link}>
//                 <img className="rounded-t-lg" src={imageSrc} alt="" />
//             </a>
//             <div className="p-5">
//                 <a href={link}>
//                     <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//                 </a>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//                 <a href={link} className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Learn more
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Card;




// const Card = ({ title, description, imageSrc, link }) => {
//     return (
//         <div className="max-w-sm border border-blue-200 rounded-md px-8 py-6 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:text-white hover:brightness-100 brightness-75 duration-300 my-10 sm:my-10">
//             <a href={link} style={{background: "radial-gradient(46.800000000000004% 50% at 50% 100%,#0442c8 0%,rgba(5,41,118,.7) 100%)", fontWeight: "bold", fontSize: "1.1rem"}}>
//                 <img className="rounded-t-lg" src={imageSrc} alt="" />
//             </a>
//             <div className="p-5">
//                 <a href={link}>
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
//                 </a>
//                 <p className="mb-3 font-normal">{description}</p>
//                 <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Read more
//                     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Card;


// const Card = ({ title, description, imageSrc, link }) => {
//     return (
//         <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-00 dark:border-gray-700 my-10 sm:my-10 transition ease-in-out delay-150 bg-gradient-to-br from-blue-900 to-blue-500 hover:-translate-y-1 hover:scale-110 hover:from-indigo-900 hover:to-indigo-600 duration-300 ">
//             <a href={link}>
//                 <img className="rounded-t-lg" src={imageSrc} alt="" />
//             </a>
//             <div className="p-5">
//                 <a href={link}>
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
//                 </a>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
//                 <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Read more
//                     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                     </svg>
//                 </a>

//             </div>
//         </div>
//     );
// };

// export default Card;

// const Card = ({ title, description, imageSrc, link }) => {
//     return (
//       <div className="relative flex flex-col mt-6 text-white bg-gray-700 shadow-md bg-clip-border rounded-xl w-96" style={{ background: '#181B20' }}>
//         <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
//           <img
//             // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
//             src={imageSrc}
//             alt="card-image"
//           />
//         </div>
//         <div className="p-6">
//           <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">{title}</h5>
//           <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit" style={{ color: '#94a2b8' }}>{description}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default Card;

const Card = ({ title, description, imageSrc, link }) => {
  return (
    <div className="relative flex flex-col mt-8 text-white bg-gray-700 shadow-md bg-clip-border rounded-xl w-96" style={{ background: '#181B20' }}>
      <div className="relative h-72 mx-6 -mt-8 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={imageSrc}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8">
        <h5 className="block mb-3 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-white">{title}</h5>
        <p className="block font-sans text-xl antialiased font-light leading-relaxed " style={{ color: '#94a2b8' }}>{description}</p>
      </div>
    </div>
  );
};

export default Card;

  