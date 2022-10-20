import React from 'react';

export default function CustomFile({ name, placeholder, value, onInput }) {
  return (
    <div className='flex flex col gap-2'>
      <label className='text-xs font-bold'>{name}</label>
      <input
        type='file'
        onInput={onInput}
        value={value}
        placeholder={placeholder}
        className='block form-input !p-2'
      />
    </div>
  );
}
