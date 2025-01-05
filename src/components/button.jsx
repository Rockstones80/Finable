import React from "react";

const button = (props) => {
  return (
    <button className="bg-green-500 text-white font-Nunito py-1 px-4 rounded-full md:ml-5 hover:cursor-pointer hover:bg-green-900 duration-500">
      {props.children}
    </button>
  );
};

export default button;
