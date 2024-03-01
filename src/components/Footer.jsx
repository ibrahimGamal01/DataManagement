import SVGComponent from './SVGComponent';

const Footer = () => (
  <footer className="bg-white rounded-sm shadow dark:bg-black border-top-white">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://techtaleforge.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <SVGComponent className="" />
          <span className="text-2xl whitespace-nowrap dark:text-white transition duration-500 hover:text-indigo-500">TechTaleForge</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://techtaleforge.com/" className="hover:underline">TechTaleForge™</a>. All Rights Reserved.</span>
    </div>
  </footer>
);

export default Footer;
