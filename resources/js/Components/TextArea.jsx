import React, { useState, useEffect } from 'react';

export default function TextArea({  className = '', name, value, onChange, error, onBlur, placeholder }) {
  const [rows, setRows] = useState(2);

  useEffect(() => {
    const rowCount = value.split('\n').length;
    setRows(Math.max(rowCount, 2));
  }, [value]);

  return (
    <>
      <textarea
        className={
          `my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
          ${error ? 'border-2 border-red-500' : ''}`
          + className }
        id="keywords"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={Math.max(rows, 3)}
      />
    </>
  );
}