// import RevealOnScroll from "./Transitions/RevealOnScroll";
import Rocket from '../assets/Rocket.jsx'
const Timeline = () => {
    return (
        <>
                <section className="mb-2 overflow-hidden flex items-center justify-center max-w-screen-xl mx-auto " >
                    <div className="text-white py-8">
                        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12">
                                <p className="ml-2 text-blue-500 uppercase tracking-loose">Working Process</p>
                                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ">Working Process of TechTaleForge</p>
                                <p className="text-sm md:text-base text-gray-300 mb-4">
                                    Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the fest.
                                </p>

                                <div className='inline-flex items-center justify-center py-2 mr-auto'>
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
                            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                                <div className="container mx-auto w-full h-full" >
                                    <div className="relative wrap overflow-hidden p-10 h-full">
                                        < >
                                            <div className="border-2-2 absolute h-full border" style={{ right: '50%', border: '3px solid #0442c8', borderRadius: '20%' }}></div>
                                        </>

                                        < >
                                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                                <div className="order-1 w-5/12"></div>
                                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                    <p className="mb-3 text-base text-blue-500">1-6 May, 2021</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                                        Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)
                                                    </p>
                                                </div>
                                            </div>
                                        </>

                                        < >
                                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                                <div className="order-1 w-5/12"></div>
                                                <div className="order-1 w-5/12 px-1 py-4 text-left">
                                                    <p className="mb-3 text-base text-blue-500">6-9 May, 2021</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                                        Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.
                                                    </p>
                                                </div>
                                            </div>
                                        </>

                                        < >
                                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                                <div className="order-1 w-5/12"></div>
                                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                    <p className="mb-3 text-base text-blue-500"> 10 May, 2021</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                                        The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.
                                                    </p>
                                                </div>
                                            </div>
                                        </>

                                        < >
                                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                                <div className="order-1 w-5/12"></div>
                                                <div className="order-1 w-5/12 px-1 py-4">
                                                    <p className="mb-3 text-base text-blue-500">12 May, 2021</p>
                                                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Prize Distribution</h4>
                                                    <p className="text-sm md:text-base leading-snug text-gray-300 text-opacity-100">
                                                        The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    </div>
                                    < >
                                        <Rocket />
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-1 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0442c8] to-[#052976b3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </>

    );
}

export default Timeline;