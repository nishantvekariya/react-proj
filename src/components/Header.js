import { Link } from "react-router-dom";

const Header = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt="idfc-logo"
          src="https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/n1/logo.png"
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 mt-5">
        
        {paragraph}
        <Link
          to={linkUrl}
          className="font-medium text-pink-600 hover:text-pink-500"
        >
          
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;