import React from 'react';

const InputField = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label style={{ display: "block", fontWeight: "bold" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ padding: "8px", width: "100%", fontSize: "16px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
    </div>
  );
};

export default InputField;
