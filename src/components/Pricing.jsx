// import { useInView } from 'react-intersection-observer';
// import { useEffect, useState } from "react";

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Pricing() {
    // const { ref, inView } = useInView({
    //     triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    //     threshold: 0.1, // Percentage of the element that is in view before the callback triggers
    //   });
  return (
    <div className="py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="font-bold tracking-tight text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Simple no-tricks pricing</h2>
          <p className="text-lg leading-8 text-gray-400">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-bold tracking-tight text-gray-100">Yearly  Membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-500">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {/* <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" /> */}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-white lg:flex lg:flex-col lg:justify-center lg:py-16"
              style={{
                background: "radial-gradient(46.800000000000004% 20% at 50% 100%,#0442F8 0%,rgba(5,41,118,.7) 100%)",
                fontWeight: "bold",
                fontSize: "1.1rem",
            }}>
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-50">Pay once, Forget about it</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$849</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-500">USD</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-gray-200 px-3 py-2 text-center text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get access
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-500">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
