import SVGComponent from './SVGComponent';

const Footer = () => (
  <footer className="rounded-sm shadow border-top-white">
    <div className="w-full max-w-screen-xl mx-auto pb-20 pt-14">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="flex justify-center items-center my-5">
        <a href="https://techtaleforge.com/" className="flex justify-center items-center rtl:space-x-reverse">
          <SVGComponent className="mr-3" />
          <span className="text-2xl whitespace-nowrap dark:text-white transition duration-500 hover:text-indigo-500">TechTaleForge</span>
        </a>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center items-center">© 2024 <a href="https://techtaleforge.com/" className="hover:underline">TechTaleForge™</a>. All Rights Reserved.</span>
    </div>
  </footer>
);

export default Footer;