import React from "react";

const InputField = ({
  label,
  id,
  register,
  errors,
  defaultValue = "",
  type = "text",
}) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      className={`form-control ${errors[id] ? "is-invalid" : ""}`}
      id={id}
      type={type}
      defaultValue={defaultValue}
      {...register(id)}
    />
    {errors[id] && <p className="text-danger">{errors[id].message}</p>}
  </div>
);

export default InputField;
