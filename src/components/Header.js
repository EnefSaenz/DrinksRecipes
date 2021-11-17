import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="bg-alert">
    <h1>{title}</h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
