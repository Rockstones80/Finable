// import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, icon: Icon, className = "", ...props }) => {
  return (
    <button 
      className={`bg-green-500 text-white font-sans py-3 px-8 text-lg font-semibold rounded-full hover:cursor-pointer hover:bg-green-700 duration-500 hover:translate-y-[-4px] transform-all delay-75 inline-flex items-center gap-3 shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-6 h-6" />}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType,
  className: PropTypes.string,
};

export default Button;