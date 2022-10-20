import React, { useState } from 'react';
import DateRange from 'react-date-range/dist/components/DateRangePicker';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

export default function GeneralInformation() {
  const areaPlanDataForm = useSelector((state) => state.areaPlanDataForm);
  const [date, setDate] = useState({
    startDate: areaPlanDataForm.initial_date
      ? new Date(areaPlanDataForm.initial_date)
      : null,
    endDate: areaPlanDataForm.end_date
      ? new Date(areaPlanDataForm.end_date)
      : null,
    key: 'selection',
  });

  const [dateFormat, setDateFormat] = useState('');

  const formatDate = (input) =>
    input ? dayjs(input).format('YYYY-MM-DD') : null;
  const handleSelect = (item) => {
    setDate(item.selection);
    setDateFormat(
      `${formatDate(item.selection.startDate)} / ${formatDate(
        item.selection.endDate
      )}`
    );
    areaPlanDataForm.initial_date = formatDate(item.selection.startDate);
    areaPlanDataForm.end_date = formatDate(item.selection.endDate);
  };

  function setName(event) {
    areaPlanDataForm.name = event.target.value;
  }

  function setWeeks(event) {
    areaPlanDataForm.week = event.target.value;
  }

  return (
    <div className='flex flex-col h-full w-full gap-2'>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-xl font-semibold'>Información general</span>
        <span className='text-sm text-gray-300'>¿Qué y Cuando?</span>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold'>Nombre</label>
          <input
            defaultValue={areaPlanDataForm.name}
            onInput={setName}
            type='text'
            placeholder='Ingrese un nombre'
            className='block form-input !p-2'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-bold'>Semanas</label>
          <input
            defaultValue={areaPlanDataForm.week}
            type='text'
            onInput={setWeeks}
            placeholder='Ingrese las semanas'
            className='block form-input !p-2'
          />
        </div>
        <div className='flex flex-col gap-2 col-span-2'>
          <label className='text-xs font-bold'>Rango de fechas</label>
          <div className='dropdown dropdown-end'>
            <label
              /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
              tabIndex='0'
            >
              <input
                type='text'
                value={dateFormat}
                placeholder='Ingrese las semanas'
                onChange={() => {}}
                disabled
                className='block form-input !p-2'
              />
            </label>
            <DateRange
              /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
              tabIndex='0'
              editableDateInputs
              className='!p-2 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit'
              moveRangeOnFirstSelection={false}
              showSelectionPreview={false}
              staticRanges={[]}
              inputRanges={[]}
              rangeColors={['#348a90']}
              color='#348a90'
              showDateDisplay={false}
              ranges={[date]}
              onChange={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
