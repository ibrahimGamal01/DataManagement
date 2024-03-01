import DataSc from '../assets/DataSc'

export default function Section3() {
  return (
    <section className='bg-white dark:bg-black'>
      <div className='grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        {/* Image Section */}
        <div className='lg:hidden mb-8 lg:mb-0 lg:col-span-12 flex justify-center'>
          {/* <img
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
            alt='mockup'
            className='max-w-full'
          /> */}
          <DataSc className='w-full h-full object-cover' />
        </div>

        {/* Text Section */}
        <div className='lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Software Tools for Data Management
          </h1>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            We provide a wide range of tools and services to help you manage your data. We offer a variety of tools and services to help you manage your data, including data management, data analysis, data visualization, and data integration. Our software is designed to help you manage your data in a way that is efficient and effective.
          </p>
          {/* <a
            href='#'
            className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition ease-in-out delay-150 bg-gradient-to-br from-blue-900 to-blue-500 hover:-translate-y-1 hover:scale-10 hover:from-indigo-900 hover:to-indigo-600 duration-300'
          >
            Get started
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </a> */}
          <div className='mr-2 inline-flex items-center justify-center gap-x-6 '>
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
          <a
            href='#'
            className='inline-flex items-center justify-center px-8 py-6 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            Speak to Sales
          </a>

        </div>

        {/* Image Section (Visible on Large Screens) */}
        <div className='hidden lg:block lg:col-span-5 lg:flex justify-center'>
          {/* <img
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
            alt='mockup'
            className='max-w-full'
          /> */}
          <DataSc className='w-full h-full object-cover' />
        </div>
      </div>
    </section>
  );
}
