import React from "react";

const InputField = ({ label, id, type = "text", register, errors }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      {...register(id)}
      type={type}
      className={`form-control ${errors[id] ? "is-invalid" : ""}`}
      id={id}
    />
    {errors[id] && <p className="text-danger">{errors[id].message}</p>}
  </div>
);

export default InputField;
