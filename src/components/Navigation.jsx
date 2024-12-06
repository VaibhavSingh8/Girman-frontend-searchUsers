import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navigation({ className }) {
  const linkClasses = ({ isActive }) =>
    `cursor-pointer text-lg font-normal leading-7 
   relative 
   hover:text-[#3063E6]
   transition-colors duration-300 
   after:absolute after:bottom-0 after:left-0 
   after:w-0 after:h-0.5 after:bg-[#3063E6] 
   after:transition-all after:duration-300 
   hover:after:w-full 
   ${isActive ? "text-[#3063E6] after:w-full" : ""}`;

  return (
    <nav className={`flex gap-8 items-center max-w-sm font-inter ${className}`}>
      <NavLink to="/" className={linkClasses}>
        SEARCH
      </NavLink>
      <NavLink
        to="https://girmantech.com"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        WEBSITE
      </NavLink>
      <NavLink
        to="https://www.linkedin.com/company/girmantech/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        LINKEDIN
      </NavLink>
      <NavLink to="mailto:contact@girmantech.com" className={linkClasses}>
        CONTACT
      </NavLink>
    </nav>
  );
}

export default Navigation;
