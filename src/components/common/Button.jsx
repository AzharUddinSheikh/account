import React from "react";

function Button({ children, type }) {
  return (
    <button type={type} className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
