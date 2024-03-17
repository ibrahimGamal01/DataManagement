import MasterClass from "./MasterClass";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <header
                id='up'
                className='relative z-10 sm:h-3/5 md:h-3/5'
                style={{
                    // backgroundImage: "url('https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4')",
                    backgroundImage: "/hero_intro.mp4",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <motion.video
                    id='background-video'
                    autoPlay
                    loop
                    muted
                    className='absolute inset-0 w-full h-full object-cover -z-10'
                >
                    <source
                        // src='https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4'
                        src='/hero_intro.mp4'
                        type='video/mp4'
                    />
                    Your browser does not support the video tag.
                </motion.video>
                <div
                    className='h-screen bg-opacity-50 bg-black flex items-center justify-center'
                    style={{ background: "rgba(0,0,0,0.5)" }}
                >
                    <div className='text-center mt-20'>
                        <MasterClass title="TechTaleForge" color="white" width="400px" />
                        <h1 className='text-white font-bold text-5xl xs:text-5xl md:text-6xl mt-4'>
                            <span className='text-white'>The New</span> Hisory Book
                        </h1>
                        <p className='text-gray-200 text-lg xs:text-lg md:text-lg leading-tight mt-6 mb-4 mx-12 md:mx-6 sm:mx-10'>
                            <span className='text-gray-400'>Forge the Past Past into the Future,{" "}</span>
                            <span className='text-white'> Keep legacies alive</span>
                        </p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='mt-5 inline-flex items-center justify-center gap-x-6 '>
                            <a
                                href='#'
                                style={{
                                    background: "radial-gradient(46.800000000000004% 50% at 50% 100%,#0442c8 0%,rgba(5,41,118,.7) 100%)",
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                }}
                                className='flex items-center rounded-md px-8 py-7 text-sm font-semibold
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
                        </motion.div>
                    </div>
                </div>
            </header>7
        </motion.div>
    );
}


