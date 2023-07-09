import React from "react";

function InputType({ labelText, inputType, value, onChange, name, labelFor }) {
  return (
    <>
      <div className="mb-2">
        <label htmlFor={labelFor} className="form-label  d-flex">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </>
  );
}

export default InputType;
