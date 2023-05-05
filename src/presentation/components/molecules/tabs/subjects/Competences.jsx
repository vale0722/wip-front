import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteCompetence from 'presentation/components/molecules/DeleteCompetence';
import StoreCompetence from 'presentation/components/molecules/StoreCompetence';
import EditCompetence from 'presentation/components/molecules/EditCompetence';

export default function Competences({ setIsLoading, refresh }) {
  const competences = useSelector((state) => state.areaCompetences.value);
  const [competenceActive, setCompetenceActive] = useState({});

  return (
    <div className='container flex flex-col h-full w-full my-4 contents'>
      <div className='flex justify-end'>
        <a
          href='#store-competence'
          className='text-gray-600 text-sm items-center font-semibold gap-2 my-4 cursor-pointer flex justify-end items-center p-2 rounded-full hover:bg-primary-200'
        >
          Agregar competencia
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
              {competences.length
                ? competences.map((competence) => (
                    <tr key={competence.key}>
                      <td>{competence.label}</td>
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
                                href='#update-competence'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setCompetenceActive(competence)}
                              >
                                Actualizar
                                <FontAwesomeIcon icon={faPen} />
                              </a>
                            </li>
                            <li>
                              <a
                                href='#confirm-delete-competence'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setCompetenceActive(competence)}
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
      <DeleteCompetence
        setIsLoading={setIsLoading}
        competenceActive={competenceActive}
        setCompetenceActive={setCompetenceActive}
        refresh={refresh}
      />
      <EditCompetence
        setIsLoading={setIsLoading}
        competenceActive={competenceActive}
        setCompetenceActive={setCompetenceActive}
        refresh={refresh}
      />
      <StoreCompetence setIsLoading={setIsLoading} refresh={refresh} />
    </div>
  );
}
