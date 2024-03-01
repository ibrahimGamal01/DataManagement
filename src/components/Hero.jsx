// import { useState } from 'react'
// // import { Dialog } from '@headlessui/react'
// // import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import SVGComponent from './SVGComponent'

// const navigation = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Marketplace', href: '#' },
//     { name: 'Company', href: '#' },
// ]

// export default function Hero() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//     return (
//         <div className="bg-white">
//             <header className="absolute inset-x-0 top-0 z-50">
//                 <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                     <div className="flex lg:flex-1">
//                         <a href="#" className="" >
//                             <span className="sr-only">TechTaleForge</span>
//                             <SVGComponent />
//                         </a>
//                     </div>
//                     <div className="flex lg:hidden">
//                         <button
//                             type="button"
//                             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                             onClick={() => setMobileMenuOpen(true)}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
//                         </button>
//                     </div>
//                     <div className="hidden lg:flex lg:gap-x-12">
//                         {navigation.map((item) => (
//                             <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
//                                 {item.name}
//                             </a>
//                         ))}
//                     </div>
//                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                         {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//                             Log in <span aria-hidden="true">&rarr;</span>
//                         </a> */}
//                     </div>
//                 </nav>

//             </header>

//             <div className="relative isolate px-6 pt-14 lg:px-8">
//                 <div
//                     className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//                     aria-hidden="true"
//                 >
//                     <div
//                         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#daa247] to-[#03aa3b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                     />
//                 </div>
//                 <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//                     <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//                         <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                             Announcing our next round of funding.{' '}
//                             <a href="#" className="font-semibold text-indigo-700">
//                                 <span className="absolute inset-0" aria-hidden="true" />
//                                 Read more <span aria-hidden="true">&rarr;</span>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="text-center">
//                         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                             Data to enrich your online business
//                         </h1>
//                         <p className="mt-6 text-lg leading-8 text-gray-600">
//                             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//                             fugiat veniam occaecat fugiat aliqua.
//                         </p>
// <div className="mt-10 flex items-center justify-center gap-x-6 ">
//     <a
//         href="#"
//         className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition ease-in-out delay-150 bg-gradient-to-br from-blue-900 to-blue-500 hover:-translate-y-1 hover:scale-10 hover:from-indigo-900 hover:to-indigo-600 duration-300"
//     >
//         Get started
//     </a>

//                             <a href="#" className="text-sm font-semibold leading-6 text-gray-900 ">
//                                 Learn more <span aria-hidden="true">→</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//                     aria-hidden="true"
//                 >
//                     <div
//                         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a6ff80] to-[#f50000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//                         style={{
//                             clipPath:
//                                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'); 
  @font-face { 
    font-family:Inter Placeholder;
    src:local("Arial");
    ascent-override:90%;
    descent-override:22.43%;
    line-gap-override:0%;
    size-adjust:107.64%;
  } 
  body {  
    font-size:12px;
    font-family:sans-serif;
    background:hsl(222,14%,7%);
  }  
  body { 
    --border-bottom-width:  1px;  
    --border-color:  rgba(148, 177, 240, .07);  
    --border-left-width:  1px;  
    --border-right-width:  1px;  
    --border-style:  solid;  
    --border-top-width:  1px;  
    --framer-font-family:  "Lexend Zetta", sans-serif;  
    --framer-font-size:  10px;  
    --framer-font-style:  normal;  
    --framer-font-weight:  600;  
    --framer-letter-spacing:  1px;  
    --framer-line-height:  1.4em;  
    --framer-text-alignment:  start;  
    --framer-text-color:  #ffffff;  
    --framer-text-decoration:  none;  
    --framer-text-transform:  none; 
  } 
  * { 
    box-sizing: border-box; 
    -webkit-font-smoothing: inherit;
  } 
  body, html { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
    font-size: 12px; 
    font-family: sans-serif;
  } 
  :root { 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  } 
`;

const Masterclass = styled.div`
  --border-bottom-width: 1px;
  --border-color: rgba(148, 177, 240, 0.07);
  --border-left-width: 1px;
  --border-right-width: 1px;
  --border-style: solid;
  --border-top-width: 1px;
  background: radial-gradient(
    38.5% 50% at 50% 100%,
    rgba(9, 87, 165, 0.5) 0%,
    rgba(182, 209, 237, 0.1) 100%
  );
  border-radius: 33px;
  flex: none;
  height: 26px;
  overflow: hidden;
  position: relative;
  width: 148px;
  will-change: var(--framer-will-change-override, transform);
  margin: auto !important;
  margin-bottom: 2.5rem;
`;

const RichTextContainer = styled.div`
  flex: none;
  height: auto;
  left: 50%;
  position: absolute;
  top: 52%;
  transform: translate(-50%, -50%);
  white-space: pre;
  width: auto;
`;

const H3 = styled.h3`
  margin: 0;
  font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
  font-style: var(--framer-font-style, normal);
  font-weight: var(--framer-font-weight, 400);
  color: white;
  font-size: calc(
    var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1)
  );
  letter-spacing: var(--framer-letter-spacing, 0);
  text-transform: var(--framer-text-transform, none);
  text-decoration: var(--framer-text-decoration, none);
  line-height: var(--framer-line-height, 1.2em);
  text-align: var(--framer-text-alignment, start);
`;

// import SVGComponent from './SVGComponent'
const Hero = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {/* <nav
                id='nav'
                className='fixed inset-x-0 top-0 flex flex-row justify-between z-20 text-white bg-transparent'
            >
                <div className='p-4'>
                    <div className='font-extrabold tracking-widest text-xl'>
                        <a
                            href='#'
                            className='transition duration-500 hover:text-indigo-500'
                        >
                            <span className="text-2xl whitespace-nowrap dark:text-white transition duration-500 hover:text-indigo-500">TechTaleForge</span>

                        </a>
                    </div>
                </div>
                <div
                    className='p-4 md:hidden'
                    onClick={toggleNav}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-menu'
                    >
                        <line
                            x1='3'
                            y1='12'
                            x2='21'
                            y2='12'
                        ></line>
                        <line
                            x1='3'
                            y1='6'
                            x2='21'
                            y2='6'
                        ></line>
                        <line
                            x1='3'
                            y1='18'
                            x2='21'
                            y2='18'
                        ></line>
                    </svg>
                </div>
                <div className='p-4 hidden md:flex flex-row justify-between font-bold'>
                    <a
                        id='hide-after-click'
                        href='#about'
                        className='mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500'
                    >
                        About
                    </a>
                    <a
                        href='#whyus'
                        className='mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500'
                    >
                        Why Us ?
                    </a>
                    <a
                        href='#showcase'
                        className='mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500'
                    >
                        Our Products
                    </a>
                </div>
            </nav>
            {isNavOpen && (
                <div
                    id='nav-opened'
                    className='fixed left-0 right-0 bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10'
                >
                    <div className='p-2 divide-y divide-gray-600 flex flex-col'>
                        <a
                            href='#about'
                            className='p-2 font-semibold hover:text-indigo-700'
                        >
                            About
                        </a>
                        <a
                            href='#whyus'
                            className='p-2 font-semibold hover:text-indigo-700'
                        >
                            Why Us ?
                        </a>
                        <a
                            href='#showcase'
                            className='p-2 font-semibold hover:text-indigo-700'
                        >
                            Our Products
                        </a>
                    </div>
                </div>
            )} */}
            
            <header
                id='up'
                className='h-screen relative z-10'
                style={{
                    backgroundImage:"url('https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <video
                    id='background-video'
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 w-full h-full object-cover -z-10'
                    // poster="https://assets.codepen.io/6093409/river.jpg"
                >
                    <source
                        src='https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4'
                        type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </video>
                <div
                    className='h-screen bg-opacity-50 bg-black flex items-center justify-center'
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className='text-center'>
                        <Masterclass>
                            <RichTextContainer>
                                <H3>TechTaleForge</H3>
                            </RichTextContainer>
                        </Masterclass>

                        <h1 className='text-white font-extrabold text-5xl xs:text-5xl md:text-6xl mt-7'>
                            <span className='text-white'>Right</span> Place To
                        </h1>
                        <p className='text-gray-200 text-2xl xs:text-2xl md:text-2xl leading-tight mt-6'>
                        <span className='text-white'>Right</span> Place To Forge the <span className='text-white'>Past</span> into the{" "}
                            <span className='text-white'>Future</span>
                        </p>
                        {/* <h1 className='text-gray-100 font-extrabold text-5xl xs:text-5xl md:text-6xl mt-9'>
                            <span className='text-gray-500'>Right</span> Place To
                        </h1>
                        <h2 className='text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight'>
                            Forge the <span className='text-yellow-200'>Past</span> into{" "}
                            the <span className='text-yellow-200'>Future</span>
                        </h2> */}
                        {/* <div className='inline-flex'>
                            <button className='inline-flex items-center justify-center p-3 my-5 mx-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-300 text-lg font-semibold  hover:-translate-y-1 hover:scale-10 hover:from-indigo-900 hover:to-indigo-600 duration-300'>
                                Purchase
                                <svg
                                    className='ml-1 font-bold'
                                    fill="currentColor"
                                    viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                >
                                    <path d="M7.72 2.47a0.75 0.75 0 0 1 1.06 0l4.5 4.5a0.75 0.75 0 0 1 0 1.06l-4.5 4.5a0.75 0.75 0 0 1 -1.06 -1.06l3.22 -3.22H2.25a0.75 0.75 0 1 1 0 -1.5h8.69L7.72 3.53a0.75 0.75 0 0 1 0 -1.06" />
                                </svg>
                            </button>
                        </div> */}
                        <div className='mt-5 inline-flex items-center justify-center gap-x-6 '>
                            <a
                                href='#'
                                style={{
                                    background: "radial-gradient(46.800000000000004% 50% at 50% 100%,#0442c8 0%,rgba(5,41,118,.7) 100%)",
                                    fontWeight: "bold", 
                                    fontSize: "1.1rem",
                                }}
                                className='flex items-center rounded-md px-8 py-6 text-sm font-semibold
                                          text-white focus-visible:outline focus-visible:outline-2 
                                          focus-visible:outline-offset-2 focus-visible:outline-blue-200 transition ease-in-out delay-150 
                                          hover:-translate-y-1 hover:text-white hover:brightness-100 brightness-75 duration-300'
                                          >
                                Get started
                                <span className='ml-1 font-bold hover:translate-x-1 hover:text-blue-500 transition-transform duration-300'>
                                    <svg
                                        id="Capa_1"
                                        fill='currentColor'
                                        viewBox='0 0 15 15'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                    >
                                        <path d='M7.72 2.47a0.75 0.75 0 0 1 1.06 0l4.5 4.5a0.75 0.75 0 0 1 0 1.06l-4.5 4.5a0.75 0.75 0 0 1 -1.06 -1.06l3.22 -3.22H2.25a0.75 0.75 0 1 1 0 -1.5h8.69L7.72 3.53a0.75 0.75 0 0 1 0 -1.06' />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a6ff80] to-[#f50000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div> */}
        </>
    );
};

export default Hero;
