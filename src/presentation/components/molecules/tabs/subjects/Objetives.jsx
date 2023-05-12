import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteObjetive from 'presentation/components/molecules/DeleteObjetive';
import StoreObjetive from 'presentation/components/molecules/StoreObjetive';
import EditObjetive from 'presentation/components/molecules/EditObjetive';

export default function Objetives({ setIsLoading, refresh }) {
  const objetives = useSelector((state) => state.areaObjetives.value);
  const [objetiveActive, setObjetiveActive] = useState({});

  return (
    <div className='container flex flex-col h-full w-full my-4 contents'>
      <div className='flex justify-end'>
        <a
          href='#store-objetive'
          className='text-gray-600 text-sm items-center font-semibold gap-2 my-4 cursor-pointer flex justify-end items-center p-2 rounded-full hover:bg-primary-200'
        >
          Agregar Objetivo
          <FontAwesomeIcon className='text-xl' icon={faPlus} />
        </a>
      </div>
      <div className='flex flex-col h-full w-full gap-2 py-2 overflow-y-scroll contents'>
        <div className='overflow-x-auto h-full w-full'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Descripción</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {objetives.length
                ? objetives.map((objetive) => (
                    <tr key={objetive.key}>
                      <td>{objetive.label}</td>
                      <th className='text-end'>
                        <div className='dropdown dropdown-hover dropdown-left'>
                          <label
                            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                            tabIndex='0'
                            className='cursor-pointer hover:bg-primary-200 rounded-full h-5 w-5 text-gray-400 duration-300 transition p-1'
                          >
                            <FontAwesomeIcon icon={faEllipsisV} />
                          </label>
                          <ul
                            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                            tabIndex='0'
                            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10'
                          >
                            <li>
                              <a
                                href='#update-objetive'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setObjetiveActive(objetive)}
                              >
                                Actualizar
                                <FontAwesomeIcon icon={faPen} />
                              </a>
                            </li>
                            <li>
                              <a
                                href='#confirm-delete-objetive'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setObjetiveActive(objetive)}
                              >
                                Eliminar
                                <FontAwesomeIcon icon={faTrash} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </th>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
      <DeleteObjetive
        setIsLoading={setIsLoading}
        objetiveActive={objetiveActive}
        setObjetiveActive={setObjetiveActive}
        refresh={refresh}
      />
      <EditObjetive
        setIsLoading={setIsLoading}
        objetiveActive={objetiveActive}
        setObjetiveActive={setObjetiveActive}
        refresh={refresh}
      />
      <StoreObjetive setIsLoading={setIsLoading} refresh={refresh} />
    </div>
  );
}
