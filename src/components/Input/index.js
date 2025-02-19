import React from 'react';

const Input = ({ type, name, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-bold block mb-2'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className='border border-gray-400 p-2 rounded-md w-full mb-4'
      />
    </div>
  );
};

export default Input;
