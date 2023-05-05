import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteIndicator from 'presentation/components/molecules/DeleteIndicator';
import StoreIndicator from 'presentation/components/molecules/StoreIndicator';
import EditIndicator from 'presentation/components/molecules/EditIndicator';

export default function Indicators({ setIsLoading, refresh }) {
  const indicators = useSelector((state) => state.performanceIndicators.value);
  const [indicatorActive, setIndicatorActive] = useState({});

  return (
    <div className='container flex flex-col h-full w-full my-4 contents'>
      <div className='flex justify-end'>
        <a
          href='#store-indicator'
          className='text-gray-600 text-sm items-center font-semibold gap-2 my-4 cursor-pointer flex justify-end items-center p-2 rounded-full hover:bg-primary-200'
        >
          Agregar indicador de desempeño
          <FontAwesomeIcon className='text-xl' icon={faPlus} />
        </a>
      </div>
      <div className='flex flex-col h-full w-full gap-2 py-2 overflow-y-scroll contents'>
        <div className='overflow-x-auto h-full w-full contents'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Descripción</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {indicators.length
                ? indicators.map((indicator) => (
                    <tr key={indicator.key}>
                      <td>{indicator.label}</td>
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
                                href='#update-indicator'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setIndicatorActive(indicator)}
                              >
                                Actualizar
                                <FontAwesomeIcon icon={faPen} />
                              </a>
                            </li>
                            <li>
                              <a
                                href='#confirm-delete-indicator'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setIndicatorActive(indicator)}
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
      <DeleteIndicator
        setIsLoading={setIsLoading}
        indicatorActive={indicatorActive}
        setIndicatorActive={setIndicatorActive}
        refresh={refresh}
      />
      <EditIndicator
        setIsLoading={setIsLoading}
        indicatorActive={indicatorActive}
        setIndicatorActive={setIndicatorActive}
        refresh={refresh}
      />
      <StoreIndicator setIsLoading={setIsLoading} refresh={refresh} />
    </div>
  );
}
