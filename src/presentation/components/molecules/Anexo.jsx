import React, { useState, useEffect } from 'react';
import CustomInput from 'presentation/components/atoms/CustomInput';
import { v4 as uuidv4 } from 'uuid';

const TYPES = {
  text: {
    label: 'Texto',
    component: CustomInput,
  },
  link: {
    label: 'Link',
    component: CustomInput,
  },
};

export default function Anexo({ setSelected }) {
  const [anexo, setAnexo] = useState({
    type: 'text',
    key: uuidv4(),
    title: '',
    value: '',
  });

  useEffect(() => {
    setAnexo({
      type: 'text',
      key: uuidv4(),
      title: anexo.title,
      value: anexo.value,
    });
  }, []);

  return (
    <div className='flex gap-4 w-full'>
      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Tipo</label>
        <select
          className='block form-input !p-2'
          defaultValue={anexo.type}
          onInput={(event) => {
            anexo.type = event.target.value;
            anexo.value = '';
            setSelected({
              value: anexo.value,
              label: anexo.label,
              title: anexo.title,
              type: anexo.type,
              key: anexo.key,
            });
          }}
        >
          <option value='default' disabled>
            selecciona un tipo
          </option>
          {Object.keys(TYPES).map((type) => (
            <option key={uuidv4()} value={type}>
              {TYPES[type].label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Titulo</label>
        <input
          onInput={(event) => {
            anexo.title = event.target.value;
            anexo.label = `${anexo.title}: ${anexo.value}`;
            setSelected({
              value: anexo.value,
              label: anexo.label,
              title: anexo.title,
              type: anexo.type,
              key: anexo.key,
            });
          }}
          className='block form-input !p-2'
        />
      </div>

      {anexo.type ? (
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold'>Valor</label>
          <div className='flex flex col gap-2'>
            <input
              onInput={(event) => {
                anexo.value = event.target.value;
                anexo.label = `${anexo.title} ${anexo.value}`;
                setSelected({
                  value: anexo.value,
                  label: anexo.label,
                  title: anexo.title,
                  type: anexo.type,
                  key: anexo.key,
                });
              }}
              className='block form-input !p-2'
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
