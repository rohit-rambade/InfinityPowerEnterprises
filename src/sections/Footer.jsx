import logo from "../assets/lightning-bolt.svg";
const Footer = () => {
  return (
    <footer className="text-gray-600 font-poppins bg-black ">
      <div className="container px-5 py-8 mx-auto flex justify-center items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="logo" className="w-1/12" />
          <span className="ml-3 text-xl text-gray-300">
            Infinity Power Enterprises
          </span>
        </a>
        <p className="text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Infinity Power Enterprises
        </p>
      </div>
    </footer>
  );
};

export default Footer;
