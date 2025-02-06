import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordInput = ({ value, onChange, className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        className={`w-full py-2 px-3 rounded mt-3 font-recoleta text-l border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none ${className}`}
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-8 transform -translate-y-1/2 text-lg"
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
