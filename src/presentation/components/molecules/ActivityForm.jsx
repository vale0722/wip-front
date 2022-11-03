import React, { useState } from 'react';

export default function ActivityForm({ addItem }) {
  const [selected, setSelected] = useState({
    name: '',
    description: '',
    anexos: [],
    references: [],
  });

  const addItemForm = () => {
    addItem(selected);
    setSelected({
      name: '',
      description: '',
    });
  };

  return (
    <>
      <div className='grid gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold'>Nombre</label>
          <input
            type='text'
            onInput={(event) => {
              selected.name = event.target.value;
            }}
            placeholder='Ingrese un nombre'
            className='block form-input !p-2'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold'>Descripción</label>
          <textarea
            onInput={(event) => {
              selected.description = event.target.value;
            }}
            placeholder='Ingrese una descripción'
            className='block form-input !p-2'
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='modal-action'>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <label
            htmlFor='todo-list-modal'
            onClick={addItemForm}
            className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
          >
            Guardar
          </label>
        </div>
      </div>
    </>
  );
}
