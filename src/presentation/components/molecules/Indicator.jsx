import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TYPES = {
  'Saber ser': {
    label: 'Saber ser',
  },
  'Saber hacer': {
    label: 'Saber hacer',
  },
  'Saber conocer': {
    label: 'Saber conocer',
  },
};

export default function Indicator({ setSelected, clear }) {
  const [indicator, setIndicator] = useState({});
  useEffect(() => {
    setIndicator({});
  }, [clear]);

  return (
    <div className='flex gap-4 w-full'>
      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Tipo</label>
        <select
          className='block form-input !p-2'
          defaultValue={indicator.type}
          onInput={(event) => {
            indicator.type = event.target.value;
            indicator.label = `${indicator.type}: ${indicator.description}`;
            setSelected({
              label: indicator.label,
              description: indicator.description,
              type: indicator.type,
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
        <label className='text-xs font-bold'>Descripción</label>
        <input
          onInput={(event) => {
            indicator.description = event.target.value;
            indicator.label = `${indicator.type}: ${indicator.description}`;
            const data = {
              label: indicator.label,
              description: indicator.description,
              type: indicator.type,
            };
            setSelected(data);
          }}
          className='block form-input !p-2'
        />
      </div>
    </div>
  );
}
