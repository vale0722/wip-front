import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TodoListModal({
  children,
  title,
  modalComponent,
  onChange,
  defaultValue,
}) {
  const [items, setItems] = useState(defaultValue ?? []);
  const [itemsList, setItemsList] = useState('');

  const loadList = () => {
    setItemsList(
      items.map((itm) => (
        <li
          key={uuidv4()}
          className='border border-gray-50 rounded-xl gap-4 shadow-sm p-2 flex justify-between items-center'
        >
          <div className='transition duration-500 ease-in-out group-hover:scale-105 rounded-full h-5 w-5 py-1 border-2 text-white bg-gray-150 border-secondary-150'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              fill='currentColor'
              viewBox='-8 -12 28 32'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='3' cy='3' r='5' />
            </svg>
          </div>
          <span className='w-full'>
            {children
              ? React.cloneElement(children, {
                  itm,
                  key: uuidv4(),
                })
              : itm.name}
          </span>
          <button type='button' onClick={() => removeItem(itm)}>
            <FontAwesomeIcon className='text-red-600' icon={faTrash} />
          </button>
        </li>
      ))
    );
  };

  const addItem = (selected) => {
    items.push(selected);
    setItems(items);
    onChange(items);
    loadList();
  };

  const removeItem = (selectedOption) => {
    setItems(items.filter((item) => selectedOption.name !== item.name));
    onChange(items);
    loadList();
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 w-full justify-between items-center mb-2'>
        <span className='text-md font-semibold'>{title}</span>
        <label
          htmlFor='todo-list-modal'
          className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg modal-button'
        >
          Agregar
        </label>
      </div>
      <ul className='flex flex-col gap-1'>{itemsList}</ul>

      <input type='checkbox' id='todo-list-modal' className='modal-toggle' />
      <label htmlFor='todo-list-modal' className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          {React.createElement(modalComponent, {
            addItem,
            key: uuidv4(),
          })}
        </label>
      </label>
    </div>
  );
}
