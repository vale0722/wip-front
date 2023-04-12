import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import services from 'domain/services';
import config from 'domain/config';
import { store } from 'domain/helpers/store';
import { getGroups } from 'domain/reducers/group.reducer';

export default function TeacherStoreForm({ setIsLoading }) {
  const groups = useSelector((state) => state.groups);
  const [data] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    grade: '',
    group: '',
  });
  const submitForm = async () => {
    setIsLoading(true);
    const response = await services.teachers.store(setIsLoading, {
      name: `${data.name} ${data.lastname}`,
      email: data.email,
      password: data.password,
      group_id: data.group,
    });
    if (response) {
      window.location.href = config.routes.teachers.show.path.replace(
        ':teacher',
        response.id
      );
      return;
    }

    alert('error');
  };

  useEffect(() => {
    store.dispatch(getGroups(setIsLoading));
  }, []);

  return (
    <div className='flex flex-col gap-6 py-10'>
      <div className='flex justify-between items-start gap-6 relative'>
        <div className='flex flex-col h-full gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between w-full'>
          <div className='flex flex-col h-full w-full gap-2'>
            <div className='flex flex-col gap-2 mb-6'>
              <span className='text-xl font-semibold'>Información general</span>
              <span className='text-sm text-gray-300'>
                Ingresa la información general del profesor a registrar
              </span>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Nombre</label>
                <input
                  type='text'
                  onInput={(event) => {
                    data.name = event.target.value;
                  }}
                  placeholder='Ingrese un nombre'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Apellído</label>
                <input
                  type='text'
                  onInput={(event) => {
                    data.lastname = event.target.value;
                  }}
                  placeholder='Ingrese su apellído'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Correo Electrónico</label>
                <input
                  onInput={(event) => {
                    data.email = event.target.value;
                  }}
                  type='text'
                  placeholder='Ingrese un correo'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Contraseña</label>
                <input
                  onInput={(event) => {
                    data.password = event.target.value;
                  }}
                  type='password'
                  placeholder='Ingrese una contraseña'
                  className='block form-input !p-2'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-md font-bold'>Grupos</label>
                <select
                  defaultValue='default'
                  onInput={(event) => {
                    data.group = event.target.value;
                  }}
                  className='block form-input !p-2'
                >
                  <option value='default' disabled>
                    Selecciona un grupo
                  </option>
                  {groups.length
                    ? groups.map((group) => (
                        <option
                          key={group.id}
                          value={group.id}
                          className='capitalize'
                        >
                          {group.name}
                        </option>
                      ))
                    : ''}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <button
          type='button'
          onClick={submitForm}
          className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
        >
          Finalizar
        </button>
      </div>
    </div>
  );
}