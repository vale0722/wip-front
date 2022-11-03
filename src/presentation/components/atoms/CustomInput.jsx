import React from 'react';

export default function CustomInput({ name, placeholder, value, onInput }) {
  return (
    <div className='flex flex col gap-2'>
      <label className='text-xs font-bold'>{name}</label>
      <input
        onInput={onInput}
        value={value}
        placeholder={placeholder}
        className='block form-input !p-2'
      />
    </div>
  );
}
