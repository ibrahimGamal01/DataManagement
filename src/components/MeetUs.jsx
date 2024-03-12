export default function MeetUs() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-extrabold tracking-tight text-center text-blue-600 xl:text-4xl dark:text-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
                        Don{"'"}t Have the Time!
                    </span>
                </h1>
                <p className="text-center text-base mt-6 text-gray-500 mb-8 lg:mx-36 md:mx:36 sm:mx-16">
                    Our team will be with you in seconds, have a 10-minute meeting <span className="text-white"> & get it all done.
                    </span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2">
                    <input type="email" name="email" placeholder="Enter your email" style={{ backgroundColor: "#1a1e24" }} className="w-full max-w-xs px-4 py-2 h-12 leading-tight text-gray-300 border border-gray-600 rounded-md appearance-none focus:outline-none focus:border-white" required />
                    <button type="submit" className="px-10 py-2 inline-flex items-center justify-center gap-x-1 text-white font-bold bg-blue-700 rounded-md h-12 hover:bg-blue-800 focus:outline-none focus:bg-blue-800">Get it done
                        <span className='ml-1 font-bold hover:translate-x-1 hover:text-blue-400 transition-transform duration-300'>
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
                    </button>
                </div>
            </div>
        </div>
    );

}