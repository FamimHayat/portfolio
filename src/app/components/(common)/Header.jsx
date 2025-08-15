import React from "react";

const Header = ({ headingText }) => {
  return (
    <div>
      <h2 className="text-6xl text-center text-lightBrand font-headerFont font-semibold my-10 md:my-15 lg:my-20 text-shadow-light">
        {headingText}
      </h2>
    </div>
  );
};

export default Header;
