import React, { useState, useEffect } from 'react';

export default function Task({ setSelected, clear }) {
  const [task, setTask] = useState({});
  useEffect(() => {
    setTask({});
  }, [clear]);

  return (
    <div className='flex gap-4 w-full'>
      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Titulo</label>
        <input
          onInput={(event) => {
            task.title = event.target.value;
            task.label = `${task.title}: ${task.value}`;
            const data = {
              value: task.value,
              label: task.label,
              title: task.title,
            };
            setSelected(data);
          }}
          className='block form-input !p-2'
        />
      </div>

      <div className='flex flex-col gap-2'>
        <label className='text-xs font-bold'>Descripción</label>
        <div className='flex flex col gap-2'>
          <input
            onInput={(event) => {
              task.value = event.target.value;
              task.label = `${task.title}: ${task.value}`;
              const data = {
                value: task.value,
                label: task.label,
                title: task.title,
              };
              setSelected(data);
            }}
            value={task.value}
            placeholder='Ingrese una descripción'
            className='block form-input !p-2'
          />
        </div>
      </div>
    </div>
  );
}
