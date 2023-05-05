import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faPen,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import DeleteTopic from 'presentation/components/molecules/DeleteTopic';
import StoreTopic from 'presentation/components/molecules/StoreTopic';
import EditTopic from 'presentation/components/molecules/EditTopic';

export default function Topics({ setIsLoading, refresh }) {
  const topics = useSelector((state) => state.areaTopics.value);
  const [topicActive, setTopicActive] = useState({});

  return (
    <div className='container flex flex-col h-full w-full my-4 contents'>
      <div className='flex justify-end'>
        <a
          href='#store-topic'
          className='text-gray-600 text-sm items-center font-semibold gap-2 my-4 cursor-pointer flex justify-end items-center p-2 rounded-full hover:bg-primary-200'
        >
          Agregar Tema
          <FontAwesomeIcon className='text-xl' icon={faPlus} />
        </a>
      </div>
      <div className='flex flex-col h-full w-full gap-2 py-2 overflow-y-scroll contents'>
        <div className='overflow-x-auto h-full w-full contents'>
          <table className='table w-full'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {topics.length
                ? topics.map((topic) => (
                    <tr key={topic.key}>
                      <td>{topic.name}</td>
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
                                href='#update-topic'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setTopicActive(topic)}
                              >
                                Actualizar
                                <FontAwesomeIcon icon={faPen} />
                              </a>
                            </li>
                            <li>
                              <a
                                href='#confirm-delete-topic'
                                className='flex justify-between w-full cursor-pointer'
                                onClick={() => setTopicActive(topic)}
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
      <DeleteTopic
        setIsLoading={setIsLoading}
        topicActive={topicActive}
        setTopicActive={setTopicActive}
        refresh={refresh}
      />
      <EditTopic
        setIsLoading={setIsLoading}
        topicActive={topicActive}
        setTopicActive={setTopicActive}
        refresh={refresh}
      />
      <StoreTopic setIsLoading={setIsLoading} refresh={refresh} />
    </div>
  );
}
