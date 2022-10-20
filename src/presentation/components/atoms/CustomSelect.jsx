import React from 'react';

export default function CustomSelect({
  name,
  placeholder,
  value,
  options,
  onInput,
}) {
  return (
    <div className='flex flex col gap-2'>
      <label className='text-xs font-bold'>{name}</label>
      <select
        className='block form-input !p-2'
        defaultValue='default'
        value={value}
        onInput={onInput}
      >
        <option value='default' disabled>
          {placeholder}
        </option>
        {options.map((option, key) => (
          <option value={key}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
