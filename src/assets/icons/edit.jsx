import React from "react";

const EditIcon = ({ className, onClick, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={`size-4 text-blue-600 ${className}`}
    onClick={onClick}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
      clipRule="evenodd"
    />
  </svg>
);

export default EditIcon;
