import React from "react";

const InputSelect = ({ name, label, value, error, options, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="custom-select"
        id={name}
        name={name}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputSelect;
