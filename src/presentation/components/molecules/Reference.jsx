import React, { useState, useEffect } from 'react';

export default function Reference({ setSelected, clear }) {
  const [reference, setReference] = useState({});
  useEffect(() => {
    setReference({});
  }, [clear]);

  return (
    <div className='flex gap-4 w-full'>
      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Título</label>
        <input
          onInput={(event) => {
            reference.title = event.target.value;
            reference.label = `${reference.title}: ${reference.value} - ${reference.author}`;
            const data = {
              value: reference.value,
              label: reference.label,
              title: reference.title,
              autor: reference.autor,
            };
            setSelected(data);
          }}
          className='block form-input !p-2'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Valor</label>
        <div className='flex flex col gap-2'>
          <input
            onInput={(event) => {
              reference.value = event.target.value;
              reference.label = `${reference.title}: ${reference.value} - ${reference.author}`;
              const data = {
                value: reference.value,
                label: reference.label,
                title: reference.title,
                author: reference.author,
              };
              setSelected(data);
            }}
            value={reference.value}
            placeholder='Ingrese un valor'
            className='block form-input !p-2'
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Autor</label>
        <div className='flex flex col gap-2'>
          <input
            onInput={(event) => {
              reference.author = event.target.value;
              reference.label = `${reference.title}: ${reference.value} - ${reference.author}`;
              const data = {
                value: reference.value,
                label: reference.label,
                title: reference.title,
                author: reference.author,
              };
              setSelected(data);
            }}
            value={reference.author}
            placeholder='Ingrese el autor'
            className='block form-input !p-2'
          />
        </div>
      </div>
    </div>
  );
}
