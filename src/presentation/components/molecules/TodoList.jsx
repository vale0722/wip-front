import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';

export default function TodoList({
  options,
  onChange,
  defaultValue,
  children,
  placeholder,
  inputComponent,
}) {
  const [items, setItems] = useState(JSON.parse(JSON.stringify(defaultValue)));
  const [clear, setClear] = useState([]);
  const [inputForm, setInputForm] = useState(null);
  const [optionsFiltered, setOptionsFiltered] = useState(
    _.difference(options ?? [], defaultValue)
  );
  const [selected, setSelected] = useState({});

  const addItem = () => {
    items.push(selected);
    setItems(JSON.parse(JSON.stringify(items)));
    onChange(JSON.parse(JSON.stringify(items)));
    setSelected({ key: 'default' });
    setClear(true);
    const loostIncludes = (arr, value) => arr.some((item) => item === value);

    const filtered = options
      ? options.filter(
          (option) => !loostIncludes(_.map(items, 'key'), option.key)
        )
      : [];
    setOptionsFiltered(filtered);
    createInputForm();
  };

  const selectValue = (selectedOption) => {
    if (selectedOption && selectedOption.key !== 'default') {
      const value =
        options.filter(
          (item) => String(item.key) === String(selectedOption)
        )[0] ?? null;
      setSelected(value);
    }
  };

  const removeItem = (selectedOption) => {
    setItems(items.filter((item) => selectedOption.key !== item.key));
    setOptionsFiltered(_.difference(options ?? [], items));
    onChange(items);
  };

  useEffect(() => {
    setOptionsFiltered(_.difference(options ?? [], items));
    createInputForm();
  }, [items]);

  const itemsList = items.map((itm) => (
    <form key={uuidv4()} action='#'>
      <li className='border border-gray-50 rounded-xl gap-4 shadow-sm p-2 flex justify-between items-center'>
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
        <span className='w-full'>{itm.label}</span>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <button type='button' onClick={() => removeItem(itm)}>
          <FontAwesomeIcon className='text-red-600' icon={faTrash} />
        </button>
      </li>
    </form>
  ));

  const createInputForm = () => {
    setInputForm(
      inputComponent ? (
        React.createElement(inputComponent, {
          setSelected,
          clear,
          key: uuidv4(),
          setClear,
        })
      ) : options ? (
        <select
          className='block form-input !p-2'
          defaultValue='default'
          key={uuidv4()}
          onInput={(event) => selectValue(event.target.value)}
        >
          <option value='default' disabled>
            {placeholder}
          </option>
          {optionsFiltered.map((option) =>
            children ? (
              React.cloneElement(children, {
                option,
                key: option.key ?? uuidv4(),
              })
            ) : (
              <option key={option.key ?? uuidv4()} value={option.key}>
                {option.label}
              </option>
            )
          )}
        </select>
      ) : (
        <input
          key={uuidv4()}
          placeholder={placeholder}
          onInput={(event) =>
            setSelected({
              key: uuidv4(),
              label: event.target.value,
            })
          }
          className='block form-input !p-2'
        />
      )
    );
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex gap-2 w-full mb-2'>
        {inputForm}
        <button
          type='button'
          disabled={selected.key === 'default'}
          onClick={addItem}
          className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
        >
          Agregar
        </button>
      </div>
      <ul className='flex flex-col gap-1'>{itemsList}</ul>
    </div>
  );
}
