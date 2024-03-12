import styled from "styled-components";
import MasterClass from "./MasterClass";

const SVGTick = (props) => (
  <svg
    height="18px"
    width="18px"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 310.277 310.277"
    xmlSpace="preserve"
    fill="##343A48"
    stroke="##343A48"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path
          style={{
            fill: "#343A48",
          }}
          d="M155.139,0C69.598,0,0,69.598,0,155.139c0,85.547,69.598,155.139,155.139,155.139 c85.547,0,155.139-69.592,155.139-155.139C310.277,69.598,240.686,0,155.139,0z M144.177,196.567L90.571,142.96l8.437-8.437 l45.169,45.169l81.34-81.34l8.437,8.437L144.177,196.567z"
        />
      </g>
    </g>
  </svg>
);

const BigCardContainer = styled.div`
  background: radial-gradient(
    50% 20% at 50% 0%,
    rgba(4, 66, 200, 0.2) 0%,
    #191B20 100%
  );
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

function Pricing() {
  return (
    <div>
      <main>
        <div className='container mx-auto'>
          <div className='max-w-2xl mx-auto'>
            <MasterClass
              title='PRICING'
              color='gray'
            />
            <h1 className='max-w-2xl my-5 m-auto text-3xl font-bold tracking-tight justify-center text-center text-blue-600 xl:text-5xl dark:text-black sm:flex sm:items-center'>
              <span className='bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-gray-100'>
                Purchase for life
              </span>
            </h1>
            <p className='text-center text-base mt-6 text-gray-400 mb-8 lg:mx-30 md:mx:36 sm:mx-16'>
              Keep the legacy alive, No worries about the data ever being lost.
              This is a one time purchase and you are good to go.
            </p>
          </div>

          <div className='p-5 grid grid-cols-1 md:grid-cols-3 md:align-middle gap-5 lg:mx-24 md:mx-20'>
            {/* standard */}
            <BigCardContainer className='p-5 shadow rounded-xl h-max'>
              <div className='flex flex-col gap-2 py-5 text-gray-200'>
                <h2 className='text-xl font-sans font-semibold'>The Basics</h2>
                <p style={{
                  fontFamily: "Lexend Zetta"
                }}
                  className="text-gray-500 line-through">$3500</p>
                <p>
                  <span
                    style={{
                      fontFamily: "inherit"
                    }}
                    className='font-bold text-5xl'>$2000</span>{" "}
                  <span
                    style={{
                      fontFamily: "Lexend Zetta"
                    }}
                    className="text-gray-500 text-sm"> usd</span>
                </p>
              </div>
              {/* <div className='text-center flex flex-col gap-2 py-5 text-gray-200'>
                <h2 className='text-xl font-bold '>Standard</h2>
                <p>Best for multiple project handling</p>
                <p>
                  <span className='font-bold text-4xl'>$50</span>{" "}
                  <span>/ Year</span>
                </p>
              </div> */}
              <ul className='px-2 py-5 flex flex-col gap-3'>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>3 users</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>10 projects</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Tracking and debugging</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>View analytical report</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Real time report</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Active support system</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Notification system</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Invoicing system</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Tax & billing system</span>
                </li>
              </ul>
              <a
                href='#'
                style={{
                  background:
                    "radial-gradient(46.800000000000004% 40% at 50% 100%,#0A399D 0%,#1C2231 100%)",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderWidth: "1px",
                  borderColor: "#242D44",
                }}
                className='flex justify-center rounded-md px-8 py-7 text-sm font-semibold 
                                          text-white focus-visible:outline focus-visible:outline-2 
                                          focus-visible:outline-offset-2 focus-visible:outline-blue-200 transition ease-in-out delay-150 
                                          hover:-translate-y-1 hover:text-white hover:bg-red-600 brightness-75 duration-300'
              >
                Purchase
                <span className='ml-1 font-bold hover:translate-x-1 hover:text-blue-500 transition-transform duration-300'>
                  <svg
                    id='Capa_1'
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
            </BigCardContainer>

            {/* starter */}
            <BigCardContainer className='p-5 shadow rounded-xl h-max'>
              <div className='flex flex-col gap-2 py-5 text-gray-200'>
                <h2 className='text-xl font-sans font-semibold'>The Basics</h2>
                <p style={{
                  fontFamily: "Lexend Zetta"
                }}
                  className="text-gray-500 line-through">$6000</p>
                <p>
                  <span
                    style={{
                      fontFamily: "inherit"
                    }}
                    className='font-bold text-5xl'>$4500</span>{" "}
                  <span
                    style={{
                      fontFamily: "Lexend Zetta"
                    }}
                    className="text-gray-500 text-sm"> usd</span>
                </p>
              </div>
              <ul className='px-2 py-5 flex flex-col gap-3'>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Signle User License</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Research Background</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Tracking and debugging</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>View report</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Real time report</span>
                </li>
                <li className='flex gap-2 items-center'>
                  <SVGTick />
                  <span className='text-gray-400'>Support system</span>
                </li>
              </ul>
              <a
                href='#'
                style={{
                  background:
                    "radial-gradient(46.800000000000004% 40% at 50% 100%,#1b263f 0%,#1b263f 100%)",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderWidth: "1px",
                  borderColor: "#242D44",
                }}
                className='flex justify-center rounded-md px-8 py-7 text-sm font-semibold 
                                          text-white focus-visible:outline focus-visible:outline-2 
                                          focus-visible:outline-offset-2 focus-visible:outline-blue-200 transition ease-in-out delay-150 
                                          hover:-translate-y-1 hover:text-white hover:bg-red-600 brightness-75 duration-300'
              >
                Purchase
                <span className='ml-1 font-bold hover:translate-x-1 hover:text-blue-500 transition-transform duration-300'>
                  <svg
                    id='Capa_1'
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
            </BigCardContainer>

            {/* pro */}
            <BigCardContainer className='px-5 pb-7 pt-5 shadow rounded-xl h-max'>
              <div className='flex flex-col gap-2 py-5 text-gray-200'>
                <h2 className='text-xl font-sans font-semibold'>The Ultra</h2>
                <p style={{
                  fontFamily: "Lexend Zetta"
                }}
                  className="text-sm text-gray-500">STARTING FROM</p>
                <p>
                  <span
                    style={{
                      fontFamily: "inherit"
                    }}
                    className='font-bold text-5xl'>$30,000</span>{" "}
                  <span
                    style={{
                      fontFamily: "Lexend Zetta"
                    }}
                    className="text-gray-500 text-sm"> usd</span>
                </p>
              </div>
              <div className="text-gray-400 mb-5 px-2">
                <span className="text-white">We come to you.</span> Our team will fly out to your location, and we will work with you to get the best solution for your needs.

              </div>
              <a
                href='#'
                style={{
                  background:
                    "radial-gradient(46.800000000000004% 40% at 50% 100%,#0A399D 0%,#1C2231 100%)",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderWidth: "1px",
                  borderColor: "#242D44",
                }}
                className='flex justify-center rounded-md px-8 py-7 text-sm font-semibold 
                                          text-white focus-visible:outline focus-visible:outline-2 
                                          focus-visible:outline-offset-2 focus-visible:outline-blue-200 transition ease-in-out delay-150 
                                          hover:-translate-y-1 hover:text-white hover:bg-red-600 brightness-75 duration-300'
              >
                Purchase
                <span className='ml-1 font-bold hover:translate-x-1 hover:text-blue-500 transition-transform duration-300'>
                  <svg
                    id='Capa_1'
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
            </BigCardContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pricing;
