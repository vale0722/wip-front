import React, { useState } from 'react';
import services from 'domain/services';

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

export default function EditIndicator({
  setIsLoading,
  indicatorActive,
  setIndicatorActive,
  refresh,
}) {
  const [description, setDescription] = useState();
  const [type, setType] = useState();

  const editIndicator = () => {
    services.indicators
      .update(setIsLoading, indicatorActive.key, {
        description,
        type,
      })
      .then(() => {
        setIndicatorActive({});
        refresh();
      });
  };

  return (
    <div
      id='update-indicator'
      className='modal modal-bottom sm:modal-middle cursor-pointer'
    >
      <div className='modal-box relative gap-4 bg-white shadow p-8 rounded-lg flex flex-col items-start justify-between'>
        <div className='flex flex-col h-full w-full gap-2'>
          <div className='flex flex-col gap-2 mb-6 justify-center items-center'>
            <span className='text-xl font-semibold'>
              Editar Indicador de desempeño
            </span>
            <div className='h-32 w-32'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                data-name='Layer 1'
                className='h-full w-full'
                viewBox='0 0 813 423.80418'
              >
                <path
                  d='M951.08008,652.12182a45.62764,45.62764,0,0,1-3.8999,7.78027c-.43018.68018-.88038,1.3501-1.36036,2H905.98c-.27978-.21-.5498-.43018-.83008-.64014-1.3999-.10986-2.79-.25-4.1499-.3999.14014-.12012.29-.24023.43018-.35986-.72022.06006-1.43995.11963-2.16016.1499.56982.06982,1.1499.14014,1.73.21-.43018.3501-.87012.7002-1.31982,1.04h-1.74024l1.16992-1.25c-.92968.02979-1.85009.04981-2.77978.02979l2.91015-.77979,3.13965-.83984c.12012.09961.25.1997.37012.2998a53.22011,53.22011,0,0,0,3.68018-76.39014,71.33813,71.33813,0,0,1,30.35009,46.01026,41.55661,41.55661,0,0,1,.39991,13.7998c.35009-.38964.6997-.77978,1.03955-1.17968A54.16,54.16,0,0,0,949.66016,597.012,71.38083,71.38083,0,0,1,951.08008,652.12182Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#e6e6e6'
                />
                <circle
                  cx='558.84183'
                  cy='51.48317'
                  r='28.08173'
                  fill='#2f2e41'
                />
                <polygon
                  points='649.907 412.099 637.647 412.098 631.814 364.81 649.909 364.811 649.907 412.099'
                  fill='#ffb8b8'
                />
                <path
                  d='M628.88964,408.59511h23.64387a0,0,0,0,1,0,0V423.482a0,0,0,0,1,0,0H614.00278a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,628.88964,408.59511Z'
                  fill='#2f2e41'
                />
                <polygon
                  points='524.845 410.494 513.008 407.302 519.685 360.126 537.155 364.837 524.845 410.494'
                  fill='#ffb8b8'
                />
                <path
                  d='M696.876,640.62164H720.5199a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H681.98917a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,696.876,640.62164Z'
                  transform='translate(-0.611 -398.30924) rotate(15.08956)'
                  fill='#2f2e41'
                />
                <path
                  d='M741.57717,431.39381,705.07092,638.26255l18.72115,3.74423,58.97164-146.025,43.9947,145.08894,22.46539-2.80818s-10.29664-207.80479-43.05865-225.58989Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#2f2e41'
                />
                <path
                  d='M683.68176,505.3971a10.05581,10.05581,0,0,0,3.59591-14.99417l20.13339-29.5233-18.56746-.28816-16.27242,28.08a10.11027,10.11027,0,0,0,11.11058,16.72562Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#ffb8b8'
                />
                <path
                  d='M816.60194,468.89086a10.05578,10.05578,0,0,0,3.59592-14.99417l20.13339-29.52331-18.56746-.28816-16.27242,28.08a10.11027,10.11027,0,0,0,11.11057,16.72563Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#ffb8b8'
                />
                <circle
                  cx='559.55677'
                  cy='60.56367'
                  r='24.56103'
                  fill='#ffb8b8'
                />
                <path
                  d='M806.16515,336.852c-.93606-3.74423-16.849-2.80817-16.849-2.80817s-17.91856-4.11948-17.749-3.60437c-15.09987-1.1623-33.51936,4.5066-36.20207,5.36633-5.4886,1.51424-15.97532,6.14623-23.538,9.55316a4.38074,4.38074,0,0,0-2.21091,5.75542l23.06847,52.66575,3.2762,34.16611,75.82067-23.40144C793.06034,407.05631,807.1012,340.59622,806.16515,336.852Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#348a90'
                />
                <polygon
                  points='606.113 99.69 612.336 98.127 646.363 165.214 648.235 203.593 626.706 186.744 626.706 171.767 604.241 142.749 606.113 99.69'
                  fill='#348a90'
                />
                <path
                  d='M717.7077,342.93637l-7.20562,3.20249a2.50317,2.50317,0,0,0-1.449,1.85561L694.77429,429.5217l-14.04087,41.18654,18.72115,9.36057,21.52933-51.48317,7.48846-37.44231Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#348a90'
                />
                <path
                  d='M727.29984,287.08328c4.985-1.63684,10.2436.92924,15.11328,2.88268,4.79927,1.9252,9.92693,3.31258,15.089,3.0093s10.38267-2.48332,13.50355-6.60636,3.67009-10.30225.58085-14.449c-2.03364-2.72985-5.27861-4.2874-8.52808-5.30162-6.94293-2.167-14.71345-2.24184-21.313.81534s-11.7747,9.51567-12.31843,16.76856'
                  transform='translate(-193.5 -238.09791)'
                  fill='#2f2e41'
                />
                <path
                  d='M751.59383,267.51935c-1.67441-11.33607,4.53512-23.106,13.01014-27.32821s18.41768-1.73148,26.05251,4.55592,13.2005,15.94924,17.34295,26.21986,7.01073,21.27122,10.38593,31.98265c2.99761,9.5131,6.51648,19.03195,12.20956,26.30764s13.97217,12.0102,21.90508,10.01114c-6.51732,8.7627-18.507,7.24543-25.94521-.24973s-11.305-19.21018-14.34878-30.61366-5.69221-23.33512-11.5804-32.785c-10.47519-16.81146-31.03124-21.86216-45.71131-11.23144'
                  transform='translate(-193.5 -238.09791)'
                  fill='#2f2e41'
                />
                <rect y='421.80418' width='813' height='2' fill='#3f3d56' />
                <path
                  d='M620.04,468.00979H265.21616A10.72787,10.72787,0,0,1,254.5,457.29363V372.75506a10.72787,10.72787,0,0,1,10.71616-10.71615H620.04a10.72787,10.72787,0,0,1,10.71616,10.71615v84.53857A10.72787,10.72787,0,0,1,620.04,468.00979ZM265.21616,364.42027a8.3449,8.3449,0,0,0-8.33479,8.33479v84.53857a8.3449,8.3449,0,0,0,8.33479,8.33479H620.04a8.3449,8.3449,0,0,0,8.33479-8.33479V372.75506a8.3449,8.3449,0,0,0-8.33479-8.33479Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#3f3d56'
                />
                <path
                  d='M602.77509,450.14953h-320.294a1.19069,1.19069,0,1,1,0-2.38137h320.294a1.19069,1.19069,0,1,1,0,2.38137Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#e6e6e6'
                />
                <path
                  d='M316.41557,410.857h-26.195a1.19069,1.19069,0,0,0,0,2.38137h11.90684v21.05441a5.99643,5.99643,0,0,0,5.543,6.06156c.07442.00349.15116.00465.22907.00465a5.76158,5.76158,0,0,0,4.70576-2.593,1.19022,1.19022,0,0,0-1.90463-1.42789,3.379,3.379,0,0,1-2.9302,1.63719,3.59514,3.59514,0,0,1-3.26159-3.68252V413.23832h11.90684a1.19069,1.19069,0,1,0,0-2.38137Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#348a90'
                />
                <circle
                  cx='212.21688'
                  cy='266.82308'
                  r='9.52547'
                  fill='#e6e6e6'
                />
                <circle
                  cx='249.12808'
                  cy='266.82308'
                  r='9.52547'
                  fill='#348a90'
                />
                <circle
                  cx='286.03929'
                  cy='266.82308'
                  r='9.52547'
                  fill='#e6e6e6'
                />
                <path
                  d='M321.97522,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#3f3d56'
                />
                <path
                  d='M331.5007,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#3f3d56'
                />
                <path
                  d='M341.02617,439.4708a1.5009,1.5009,0,0,0,0-3,1.5009,1.5009,0,0,0,0,3Z'
                  transform='translate(-193.5 -238.09791)'
                  fill='#3f3d56'
                />
              </svg>
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-xs font-bold'>Tipo</label>
              <select
                className='block form-input !p-2'
                defaultValue={indicatorActive.type ?? 'default'}
                onInput={(event) => {
                  setType(event.target.value);
                }}
              >
                <option value='default' disabled>
                  Selecciona un tipo
                </option>
                {Object.keys(TYPES).map((typeOption) => (
                  <option key={typeOption} value={typeOption}>
                    {TYPES[typeOption].label}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-xs font-bold'>Descripción</label>
              <textarea
                name='description'
                onInput={(event) => {
                  setDescription(event.target.value);
                }}
                defaultValue={indicatorActive.description}
                className='block form-input !p-2'
              >
                {indicatorActive.description}
              </textarea>
            </div>
          </div>
          <div className='flex items-end gap-3 justify-end'>
            <a
              href='#'
              className='flex items-center py-2 px-4 rounded-lg text-sm bg-gray-100 shadow-lg cursor-pointer'
            >
              Cancelar
            </a>
            <a
              href='#'
              onClick={() => editIndicator()}
              className='flex items-center py-2 px-4 rounded-lg text-sm bg-primary-500 text-white shadow-lg'
            >
              Confirmar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
