import DataSc from '../assets/DataSc'

export default function Section() {
  return (
      <div className='grid max-w-screen-xl px-10 mt-15 py-4 mx-auto lg:gap- xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='lg:hidden mb-8 lg:mb-0 lg:col-span-12 flex justify-center'>
          <DataSc className='w-full h-full object-cover' />
        </div>

        <div className='lg:col-span-7'>
          <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
            Software Tools for Data Management
          </h1>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            We offer a variety of tools and services to help you manage your data, including data management, data analysis, data visualization, and data integration.
          </p>
        
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
            className='inline-flex my-4 items-center justify-center px-8 py-6 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
          >
            Speak to Sales
          </a>
        </div>

        <div className='hidden lg:block lg:col-span-5 justify-center'>
          <DataSc className='w-full h-full object-cover' />
        </div>
      </div>
  );
}
