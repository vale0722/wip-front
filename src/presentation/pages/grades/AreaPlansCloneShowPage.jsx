import React, { useEffect, useState } from 'react';
import Header from 'presentation/components/atoms/Header';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from 'domain/helpers/store';
import { getAreaPlanClone } from 'domain/reducers/area_plan_clone.reducer';
import services from 'domain/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPencil } from '@fortawesome/free-solid-svg-icons';

export default function AreaPlansCloneShowPage({ setIsLoading }) {
  const plan = useSelector((state) => state.areaPlanClone);
  const [activityFormValue, setActivityFormValue] = useState();
  const [creativeAgent, setCreativeAgent] = useState(
    plan.id ? plan.creative_agenda.activities : []
  );
  const [tasks, setTasks] = useState(plan.id ? plan.tasks : []);
  const [activities, setActivities] = useState(plan.id ? plan.activities : []);
  const { clone: cloneId } = useParams();

  useEffect(() => {
    store.dispatch(getAreaPlanClone(setIsLoading, cloneId));
  }, []);

  useEffect(() => {
    setCreativeAgent(plan.id ? plan.creative_agenda.activities : []);
    setTasks(plan.id ? plan.tasks : []);
    setActivities(plan.id ? plan.activities : []);
  }, [plan]);

  const resolveActivity = async (key) => {
    const newActivities = [...activities];
    newActivities[key].done = !newActivities[key].done;
    setActivities(newActivities);
    await services.areaPlanClone.resolveActivity(
      setIsLoading,
      newActivities[key].id
    );
  };

  const resolveTask = async (key) => {
    const newTasks = [...tasks];
    newTasks[key].done = !newTasks[key].done;
    setTasks(newTasks);
    await services.areaPlanClone.resolveTask(setIsLoading, newTasks[key].id);
  };

  const updateFieldOnChange = async (key, withValue) => {
    const newCreativeAgent = [...creativeAgent];

    if (withValue) {
      newCreativeAgent[key].description = activityFormValue;
      await services.areaPlanClone.updateActivityAgent(
        setIsLoading,
        newCreativeAgent[key].id,
        {
          description: newCreativeAgent[key].description,
        }
      );
      setActivityFormValue(null);
    }

    newCreativeAgent[key].form = !newCreativeAgent[key].form;
    setCreativeAgent(newCreativeAgent);
  };

  return (
    <div className='flex flex-col h-full w-full'>
      <Header height='h-full' />
      <main className='py-2 bg-white bg-opacity-30 grid grid-cols-1 lg:grid-cols-6 gap-6 my-8 w-3xl px-2 mx-auto'>
        <aside className='col-span-2 flex flex-col gap-6'>
          <div className='bg-white shadow rounded-lg p-4'>
            <div className='flex flex-col gap-3 text-center items-center'>
              <div
                className='w-32 h-32 text-primary-500 hover:text-primary-500 transition ease-in duration-200 hover:scale-105 font-bold border-2 h-full w-full border-primary-500 bg-white flex items-center justify-center rounded-full'
                data-tip={plan.id ? plan.group.letter : ''}
              >
                {plan.id ? plan.group.letter : ''}
              </div>
              <p className='font-semibold text-xl capitalize text-primary-500'>
                {plan.id ? plan.grade.name : ''}
              </p>
            </div>
          </div>
          <div className='bg-white shadow rounded-lg p-4'>
            <div className='flex flex-col gap-3 text-center items-center'>
              <p className='font-semibold'>{plan.name}</p>
              <p className='text-sm font-semibold'>{plan.week}</p>
              <p className='text-xs text-gray-300'>
                {plan.initial_date} / {plan.end_date}
              </p>
            </div>
          </div>
          <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-4'>
              Competencias
            </h3>
            <div className='bg-white shadow rounded-lg p-4'>
              <ul className='list-disc px-4'>
                {plan.id
                  ? plan.competences.length
                    ? plan.competences.map((competence) => (
                        <li>
                          <span className='badge badge-primary badge-sm mr-2'>
                            {competence.competence.subject.name}
                          </span>
                          {competence.competence.description}
                        </li>
                      ))
                    : 'No se definieron competencias para esta planeación'
                  : ''}
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-gray-600 text-xl font-semibold mb-4'>
              Indicadores
            </h3>
            <div className='bg-white shadow rounded-lg p-4'>
              <ul className='list-disc px-4'>
                {plan.id
                  ? plan.indicators.length
                    ? plan.indicators.map((indicator) => (
                        <li>
                          <span className='badge badge-primary badge-sm mr-2'>
                            {indicator.indicator.type}
                          </span>
                          <span className='badge badge-secondary badge-sm mr-2'>
                            {indicator.indicator.subject.name}
                          </span>
                          {indicator.indicator.description}
                        </li>
                      ))
                    : 'No se definieron competencias para esta planeación'
                  : ''}
              </ul>
            </div>
          </div>
        </aside>
        <article className='col-span-4 mx-10 gap-3'>
          <div className='flex gap-3 justify-end mb-3'>
            <Link className='btn btn-primary px-4 py-2 !text-sm' to='/'>
              Descargar
            </Link>
            <label
              htmlFor='my-modal-4'
              className='btn btn-primary px-4 py-2 !text-sm'
            >
              Agenda Creativa
            </label>
            <input type='checkbox' id='my-modal-4' className='modal-toggle' />
            <label htmlFor='my-modal-4' className='modal cursor-pointer'>
              <label className='modal-box relative' htmlFor=''>
                <div className='flex flex-col gap-3 text-center items-center justify-center h-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    data-name='Layer 1'
                    className='w-72'
                    viewBox='0 0 864.67004 439.09557'
                  >
                    <path
                      d='M280.56657,643.16411a3.61323,3.61323,0,0,1-2.61865-6.26262c.0911-.36213.15647-.62217.24758-.9843q-.0489-.11821-.09838-.23627a9.70311,9.70311,0,0,0-17.89849.06651c-2.92738,7.05051-6.65446,14.11307-7.57216,21.5678a28.70572,28.70572,0,0,0,.50391,9.87235,115.08618,115.08618,0,0,1-10.46893-47.79893,111.08234,111.08234,0,0,1,.689-12.392q.57081-5.05966,1.58378-10.0473a116.41926,116.41926,0,0,1,23.087-49.34152,30.98263,30.98263,0,0,0,12.88556-13.36892,23.63378,23.63378,0,0,0,2.14933-6.45822c-.62729.08228-1.26489.13369-1.89218.17479-.19542.01024-.40108.02055-.5965.03087l-.0737.0033a3.57989,3.57989,0,0,1-2.94009-5.83225q.40627-.5.813-.99948c.41139-.51423.833-1.01814,1.24434-1.53228a1.7836,1.7836,0,0,0,.13369-.15432c.47313-.58619.94609-1.16206,1.41921-1.74825a10.35174,10.35174,0,0,0-3.39366-3.28044c-4.74084-2.77661-11.28133-.85357-14.70586,3.43477-3.43476,4.28825-4.0826,10.30437-2.88976,15.66217a41.48513,41.48513,0,0,0,5.73842,12.793c-.25715.32912-.52454.64792-.78161.977a117.17121,117.17121,0,0,0-12.22973,19.37481,48.70929,48.70929,0,0,0-2.908-22.62447c-2.78347-6.71479-8.00064-12.37-12.595-18.17495-5.51857-6.97261-16.83489-3.9296-17.80713,4.90927q-.01412.12837-.02757.25666,1.02363.57747,2.004,1.22585a4.9011,4.9011,0,0,1-1.976,8.91908l-.09994.01543a48.7668,48.7668,0,0,0,1.28544,7.29124,50.20988,50.20988,0,0,0,24.99983,31.46837c.40108.20566.79193.41131,1.193.60674a119.59776,119.59776,0,0,0-6.43767,30.296A113.43513,113.43513,0,0,0,240.615,629.189l-.03086-.216a29.974,29.974,0,0,0-10.23242-17.3076c-7.87437-6.46853-18.99939-8.8505-27.49445-14.04993a5.62527,5.62527,0,0,0-8.61571,5.47251q.01709.11352.03474.227a32.92633,32.92633,0,0,1,3.69184,1.779q1.02362.5776,2.004,1.22585a4.90116,4.90116,0,0,1-1.976,8.91917l-.1.01535c-.072.01031-.13369.02063-.20557.031a48.80767,48.80767,0,0,0,8.97767,14.05785,50.25446,50.25446,0,0,0,36.44572,15.9913h.01032a119.56213,119.56213,0,0,0,8.03167,23.447H279.8476c.10291-.3188.19542-.64792.288-.96672a32.59875,32.59875,0,0,1-7.93916-.473c2.12878-2.61214,4.25747-5.24482,6.38625-7.85688a1.77949,1.77949,0,0,0,.13369-.15424c1.07979-1.33685,2.16988-2.66347,3.24966-4.00032l.00058-.00165a47.75027,47.75027,0,0,0-1.39916-12.16412Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#f2f2f2'
                    />
                    <path
                      d='M852.65038,626.07129a3.61324,3.61324,0,0,0,6.03532-3.10689c.16339-.33577.28076-.57685.44415-.91262q.11352-.059.22737-.11749a9.70311,9.70311,0,0,1,13.65425,11.57246c-2.2983,7.27991-3.99239,15.08381-8.08884,21.37938a28.70531,28.70531,0,0,1-6.74062,7.23058,115.086,115.086,0,0,0,38.78046-29.83977,111.0789,111.0789,0,0,0,7.44964-9.92667q2.8202-4.23942,5.25561-8.70834A116.4192,116.4192,0,0,0,923.762,561.02114a30.98263,30.98263,0,0,1-1.25506-18.52541,23.63329,23.63329,0,0,1,2.51246-6.32579c.42707.46676.88191.91654,1.3355,1.35178.143.13363.2937.27391.43661.4076l.05427.05a3.5799,3.5799,0,0,0,6.00427-2.57062q.01094-.64416.02118-1.28825c.01619-.65834.01791-1.31537.0341-1.97359a1.78372,1.78372,0,0,1-.003-.20416c.01528-.75315.024-1.4983.03931-2.25144a10.35177,10.35177,0,0,1,4.70872-.32585c5.41534.92691,9.18265,6.60877,9.04285,12.09491-.13192,5.49266-3.50883,10.5136-7.87058,13.84588a41.48483,41.48483,0,0,1-12.62645,6.09609c-.01506.41739-.01566.83348-.03079,1.25082a117.17187,117.17187,0,0,1-3.11292,22.69933,48.70934,48.70934,0,0,1,16.78913-15.44177c6.45251-3.34683,14.08539-4.31619,21.338-5.801,8.71154-1.7835,15.41268,7.82971,10.467,15.21963q-.07183.10732-.14412.21415-1.15508-.217-2.32269-.3519a4.9011,4.9011,0,0,0-4.22918,8.09745l.06654.07614a48.76688,48.76688,0,0,1-5.67719,4.75227,50.20988,50.20988,0,0,1-39.38818,7.9888c-.43932-.1008-.8708-.195-1.30353-.30365A119.59716,119.59716,0,0,1,904.07275,627.131a113.43489,113.43489,0,0,1-11.8529,13.96316l.16265-.14541a29.974,29.974,0,0,1,18.97168-6.65811c10.18988.11873,20.23677,5.45726,30.08469,6.94673a5.62528,5.62528,0,0,1,3.07055,9.734q-.08614.07589-.17273.15138a32.92409,32.92409,0,0,0-3.97042-1.01507q-1.15516-.2169-2.32269-.35191a4.90116,4.90116,0,0,0-4.22924,8.09752l.06666.07613c.04844.05422.089.10185.1374.156a48.80765,48.80765,0,0,1-15.91957,4.9789,50.25443,50.25443,0,0,1-38.18445-11.22315l-.0079-.00664a119.56255,119.56255,0,0,1-21.23958,12.773l-21.9567-18.4693c.12646-.31021.26753-.62163.40188-.9252a32.59878,32.59878,0,0,0,6.38,4.74863c.0524-3.36931.11809-6.75428.17043-10.12352a1.78079,1.78079,0,0,1-.003-.2041c.03424-1.71812.054-3.435.08823-5.15316l.00062-.00163a47.75,47.75,0,0,1,8.901-8.4081Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#f2f2f2'
                    />
                    <path
                      d='M378.34249,470.8766a5.653,5.653,0,0,1-3.85342-7.76467l-14.74-13.6493,10.1381-2.48964,12.443,13.34329a5.68369,5.68369,0,0,1-3.98775,10.56032Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#ffb6b6'
                    />
                    <path
                      d='M333.36189,433.65024l-15.44982-45.09888a14.26783,14.26783,0,0,1,8.864-18.10225h0a14.25264,14.25264,0,0,1,18.71875,11.40364l6.17529,41.87151L377.503,450.17965l-6.79467,9.68138Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#3f3d56'
                    />
                    <polygon
                      points='140.192 415.96 151.222 415.96 156.469 373.418 140.19 373.418 140.192 415.96'
                      fill='#ffb6b6'
                    />
                    <path
                      d='M304.1224,640.97135l17.43511-1.04064v7.47l16.57605,11.448a4.666,4.666,0,0,1-2.65139,8.50572H301.924Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M317.49312,446.58359s-3.43856-3.602-10.02855,4.90805c-6.08832,7.70612-5.78562,9.21045-5,19,.64,7-5.63145,42.18191.61855,48.16195l5.04,112.68s15.29054,4.29144,16.01054-2.90857l39.47945-143.28144L358.896,448.5102Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <polygon
                      points='222.852 414.894 232.517 409.58 216.619 369.773 202.354 377.616 222.852 414.894'
                      fill='#ffb6b6'
                    />
                    <path
                      d='M384.62277,642.37754l14.77686-9.31185,3.5989,6.54585,20.04089,2.04573a4.666,4.666,0,0,1,1.77453,8.73087l-18.18929,10.00045-4.35934,2.39676-6.8581,3.77057Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M302.68664,465.59561s-.19953,18.15167-1.8743,28.78386a38.89,38.89,0,0,0,5.88473,27.82731c3.93332,5.82568,9.72644,11.25648,18.08434,13.48559l58.70385,96.3122s15.4665-3.60617,12.62858-10.26235L361.67871,477.16553,339.8958,447.33667Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M302.21164,414.24147l-1.74707,56.25017,58.25355-16.12072,1.02494-2.7812,2.49738-9.47136s-5.77587-13.62672-4.59816-45.35682l-14.71486-39.23243-23.308-.47635-.13.13A63.075,63.075,0,0,0,302.21164,414.24147Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#3f3d56'
                    />
                    <path
                      d='M419.39883,437.359a5.653,5.653,0,0,1-7.2583-4.73879l-19.62539-4.29111,7.476-7.28622,17.49044,5.192a5.68369,5.68369,0,0,1,1.91725,11.12415Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#ffb6b6'
                    />
                    <path
                      d='M361.75389,428.07905l-36.18313-31.03849a14.26783,14.26783,0,0,1-1.53828-20.09713h0a14.25262,14.25262,0,0,1,21.91621.33815l26.55277,32.95918,35.67981,9.70458-.94777,11.78977Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#3f3d56'
                    />
                    <path
                      d='M355.46456,319.09478a25.145,25.145,0,1,1-.88007-6.60685A25.145,25.145,0,0,1,355.46456,319.09478Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#ffb8b8'
                    />
                    <path
                      d='M346.31106,285.9935c-2.038-.06054-1.3384-3.902-2.98037-5.1275q-.012.05577-.02485.11132a4.00216,4.00216,0,0,1-7.64817.3263,6.08258,6.08258,0,0,0-3.862-4.05153c-.10225,3.56059-2.79555,6.65086-6.0086,8.18873s-6.8766,1.79379-10.43833,1.84647c-3.56172.05261-7.17472-.06663-10.6286.805-3.45381.87154-6.81329,2.92075-8.28893,6.16283-1.4757,3.24208-.42281,7.70573,2.80391,9.21464-2.4997.01331-4.62078,2.076-5.4851,4.42159a17.5571,17.5571,0,0,0-.542,7.41887c.70251,9.19517,2.41529,19.09484,9.1109,25.43625,5.103,4.83307,12.40716,6.78,19.43551,6.75191,7.02835-.02819,5.79256-.6742,12.58822-2.46805,0,0,6.4608-18.52155,4.83392-20.34359-1.62688-1.822-2.97817-4.1535-2.68374-6.57835s2.90035-4.597,5.16184-3.674c-.38025-.9721-.66675-1.15727-.84619-1.10791a8.595,8.595,0,0,0,.29882-.845,9.61594,9.61594,0,0,1,6.00542-6.36825,7.4573,7.4573,0,0,1,8.15078,2.4667C362.70474,301.60118,358.08821,286.34324,346.31106,285.9935Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M778.58664,470.8766a5.65306,5.65306,0,0,0,3.85343-7.76467l14.74-13.6493-10.1381-2.48964-12.443,13.34329a5.68369,5.68369,0,0,0,3.98775,10.56032Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M786.2208,459.861l-6.79467-9.68138,25.83293-26.45539,6.17528-41.87151a14.25265,14.25265,0,0,1,18.71876-11.40364h0a14.26784,14.26784,0,0,1,8.864,18.10225l-15.44981,45.09888Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#e6e6e6'
                    />
                    <polygon
                      points='681.407 415.96 670.377 415.96 665.13 373.418 681.409 373.418 681.407 415.96'
                      fill='#9e616a'
                    />
                    <path
                      d='M855.00516,667.3544H821.447a4.666,4.666,0,0,1-2.65138-8.50572l16.576-11.448v-7.47l17.43512,1.04064Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M839.436,446.58359s8.92,15.81,15.51,24.32c6.08832,7.70612,5.30416,11.7985,4.51855,21.58805-.64,7,.63145,20.18191-5.61855,26.16195l-5.04,112.68s-15.29054,4.29144-16.01054-2.90857L793.316,485.14358l4.71711-36.63338Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <polygon
                      points='598.747 414.894 589.082 409.58 604.981 369.773 619.245 377.616 598.747 414.894'
                      fill='#9e616a'
                    />
                    <path
                      d='M761.52191,666.55592l-6.85809-3.77057-4.35934-2.39676-18.1893-10.00045a4.666,4.666,0,0,1,1.77453-8.73087l20.04089-2.04573,3.59891-6.54585,14.77686,9.31185Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M854.2425,465.59561s.19953,18.15167,1.8743,28.78386a38.89009,38.89009,0,0,1-5.88473,27.82731c-3.93332,5.82568-9.72645,11.25648-18.08435,13.48559l-58.70384,96.3122s-15.46651-3.60617-12.62859-10.26235l34.43514-144.57669,21.78291-29.82886Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M837.43967,357.18271l-.12994-.13-23.308.47635-14.71487,39.23243c1.17772,31.7301-4.59815,45.35682-4.59815,45.35682l2.49738,9.47136-7.72151,46.90192,74.23677-15.02027-8.98385-69.2299A63.075,63.075,0,0,0,837.43967,357.18271Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#e6e6e6'
                    />
                    <path
                      d='M737.53031,437.359a5.65309,5.65309,0,0,0,7.2583-4.73879l19.62538-4.29111-7.476-7.28622-17.49045,5.192a5.68369,5.68369,0,0,0-1.91724,11.12415Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M749.69563,431.73511l-.94777-11.78977,35.67981-9.70458,26.55277-32.95918a14.25262,14.25262,0,0,1,21.91621-.33815h0a14.26782,14.26782,0,0,1-1.53828,20.09713l-36.18312,31.03849Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#e6e6e6'
                    />
                    <path
                      d='M802.34464,312.48793a25.145,25.145,0,1,1-.88007,6.60685A25.145,25.145,0,0,1,802.34464,312.48793Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M810.61808,285.9935c2.038-.06054,27.40055,1.24111,30.96227,1.29379,3.56173.05261,7.17472-.06663,10.6286.805,3.45381.87154,6.8133,2.92075,8.28893,6.16283,1.4757,3.24208,1.81687,11.29068,2.68119,13.63623a17.55694,17.55694,0,0,1,.542,7.41887c-.70252,9.19517-2.4153,19.09484-9.11091,25.43625-5.103,4.83307-12.40716,6.78-19.43551,6.75191-7.02835-.02819-5.79255-.6742-12.58822-2.46805,0,0-6.4608-18.52155-4.83392-20.34359,1.62689-1.822,2.97818-4.1535,2.68374-6.57835s-2.90035-4.597-5.16184-3.674c.38026-.9721.66676-1.15727.84619-1.10791a8.595,8.595,0,0,1-.29882-.845,9.61594,9.61594,0,0,0-6.00542-6.36825,7.45729,7.45729,0,0,0-8.15077,2.4667C794.2244,301.60118,798.84092,286.34324,810.61808,285.9935Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M417.64777,435.53279c32.582-4.26938,68.95531-8.62111,97.46784,11.47489,11.48329,8.09356,20.46943,19.8,23.21108,33.76506,1.73334,8.829,1.18193,17.89867,1.29376,26.83973.10016,8.0073.82,15.99739,3.51841,23.58691,4.563,12.8339,13.50461,23.73331,24.56727,31.55676A73.75631,73.75631,0,0,0,608.549,575.9756c32.37859.80833,61.90081-16.74765,82.51318-40.69608,22.13679-25.71958,34.83516-57.617,45.91656-89.27223q2.19174-6.26094,4.33955-12.53712c.6296-1.82944-2.26726-2.61525-2.89283-.79751-11.07451,32.17952-22.43073,65.01514-43.07523,92.51777-18.93359,25.22334-46.45875,45.27506-78.73657,47.59289-14.71459,1.05664-29.51993-1.84144-42.30031-9.33362-11.734-6.87874-21.56489-17.239-27.00141-29.77931a61.39607,61.39607,0,0,1-4.6062-22.40731c-.32546-8.90187.32848-17.85065-.76936-26.7159-1.75965-14.20967-8.97651-26.60606-19.8118-35.86669a81.89441,81.89441,0,0,0-38.1206-17.74023c-17.476-3.29283-35.36737-2.148-52.91686-.10055-4.48487.52322-8.96243,1.10644-13.43936,1.69308-1.88706.24727-1.91167,3.25049,0,3Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#3f3d56'
                    />
                    <path
                      d='M685.51455,362.90161c-5.71,6.06-14.01,9.27-22.31,9.91a43.63512,43.63512,0,0,1-46.98-42.97c-.09-6.7,1.37-13.37,1.04-20.07-.82-16.55-12.44-31.59-11.2-48.12l7.96,2.47q-8.01-2.52-16.02-5.04a20.85262,20.85262,0,0,1-5.22-2.19c-4.66-3.06-6.03-9.81-3.79-14.92,2.25-5.11,7.43994-8.53,12.91-9.67a29.22641,29.22641,0,0,1,11.26.07,44.765,44.765,0,0,1,5.26,1.27,34.91334,34.91334,0,0,1,30.31,4.12,34.81452,34.81452,0,0,1,12.18,14.75,34.15167,34.15167,0,0,1,2.87,11.88995c.6,11.16-4.16,22.72-3.48,33.5a25.35108,25.35108,0,0,0,1.95,8.57c5.9,13.73,24.45,19.16,29.1,33.37C693.94455,347.75165,691.22458,356.84162,685.51455,362.90161Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <polygon
                      points='522.187 347.025 514.529 354.962 480.27 329.2 491.573 317.486 522.187 347.025'
                      fill='#9e616a'
                    />
                    <path
                      d='M709.04277,587.74825l-5.434,5.63225-3.45411,3.58014L685.7424,611.89872a4.666,4.666,0,0,1-7.96215-3.99765l3.27052-19.87778-5.37582-5.1866,12.85458-11.8248Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <polygon
                      points='448.577 362.145 438.648 366.948 415.399 330.936 430.053 323.848 448.577 362.145'
                      fill='#9e616a'
                    />
                    <path
                      d='M630.70236,608.866l-7.04525,3.40807-4.47832,2.16634-18.6857,9.039a4.666,4.666,0,0,1-6.09074-6.50231l9.93663-17.52386-3.25291-6.7245,16.14834-6.6556Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M632.436,393.58359s8.92,15.81,15.51,24.32c6.08832,7.70612,5.30416,11.7985,4.51855,21.58805-.64,7,.63145,20.18191-5.61855,26.16195l-2.73146,61.0674,33.69145,38.6126s-13.62144,19.35806-14.34144,12.15805L613.58582,531.113,586.316,432.14358l4.71711-36.63338Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M647.2425,412.59561s.19953,18.15167,1.8743,28.78386a38.89009,38.89009,0,0,1-5.88473,27.82731c-3.93332,5.82568-9.72645,11.25648-18.08435,13.48559l-28.57824,46.88677,15.8744,45.42543s-22.81723,13.14326-19.97931,6.48707l-27.61881-59.0611,23.40467-98.265,21.78291-29.82886Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M630.43967,304.18271l-.12994-.13-23.308.47635-14.71487,39.23243c1.17772,31.7301-4.59815,45.35682-4.59815,45.35682l2.49738,9.47136,1.02494,2.7812,65.49032,29.10045-8.98385-69.2299A63.075,63.075,0,0,0,630.43967,304.18271Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#87d2d7'
                    />
                    <path
                      d='M530.53031,384.359a5.65309,5.65309,0,0,0,7.2583-4.73879l19.62538-4.29111-7.476-7.28622-17.49045,5.192a5.68369,5.68369,0,0,0-1.91724,11.12415Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M542.69563,378.73511l-.94777-11.78977,35.67981-9.70458,26.55277-32.95918a14.25262,14.25262,0,0,1,21.91621-.33815h0a14.26782,14.26782,0,0,1-1.53828,20.09713l-36.18312,31.03849Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#87d2d7'
                    />
                    <path
                      d='M681.54438,432.18288a5.65306,5.65306,0,0,0-3.98522-7.69786l-2.29673-19.95731-8.00076,6.70576,3.40762,17.92374a5.68368,5.68368,0,0,0,10.87509,3.02567Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M677.17178,419.51389l-11.82532-.24208-6.06907-36.47457-30.12332-29.73118a14.25264,14.25264,0,0,1,1.86647-21.83921h0a14.26784,14.26784,0,0,1,19.84074,3.55055l27.24435,39.11971Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#87d2d7'
                    />
                    <path
                      d='M595.34464,259.48793a25.145,25.145,0,1,1-.88007,6.60685A25.145,25.145,0,0,1,595.34464,259.48793Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#9e616a'
                    />
                    <path
                      d='M592.14957,405.327a27.25006,27.25006,0,0,1-22.31075-11.74227c-1.38473-2.08944-2.58017-4.68085-1.773-7.21346a3.78713,3.78713,0,0,1,4.06988-2.86845c1.975.27644,3.67373,1.78634,4.99787,3.17081a54.65916,54.65916,0,0,1,4.91726,6.30091c2.34809,3.31795,6.91858,8.68928,3.38509,12.663-2.9718,3.34211-7.97082,3.62517-11.97158,4.83014-4.32328,1.3021-8.74944,4.22333-9.13781,9.15083-.37768,4.792,4.22584,8.025,8.47134,8.71938A15.68265,15.68265,0,0,0,586.63,423.34333a21.22818,21.22818,0,0,0,5.1722-14.02407,1.50128,1.50128,0,0,0-3.0003-.0524c-.07386,4.688-1.61009,9.47585-5.08235,12.76093-3.25084,3.07558-8.417,4.54134-12.65317,2.7299-2.09522-.89594-4.04446-2.78189-3.72-5.23555.29781-2.25182,2.12714-4.01533,4.03872-5.032,4.3235-2.29936,9.516-2.096,13.73269-4.74919,4.021-2.53006,5.6249-6.76329,3.79778-11.25141a36.09526,36.09526,0,0,0-4.26152-7.00753,67.79867,67.79867,0,0,0-5.02432-6.5279c-2.71034-2.97907-6.95891-5.86608-11.04005-3.73942-4.65137,2.4238-4.34149,8.502-2.18943,12.47788,4.90736,9.06615,15.57938,14.59545,25.69685,14.63465a1.50129,1.50129,0,0,0,.05239-3.0003Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M660.30459,297.90161l-39.86-8.15c-1.45-7.65,11.94-17.96,15.42-30.53-6.22-.75-14.55005-2-21.76-3.63-7.21-1.64-13.31-3.65-15.07-5.94a24.01676,24.01676,0,0,1,28.33-18.71l4.88995,1c.16.03.32.07.48005.11a23.87959,23.87959,0,0,1,14.65,10.05,56.812,56.812,0,0,1,13.53,10.41,34.15167,34.15167,0,0,1,2.87,11.88995C664.38455,275.56165,659.62454,287.12165,660.30459,297.90161Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#2f2e41'
                    />
                    <path
                      d='M1032.335,668.35778a1.18647,1.18647,0,0,1-1.19006,1.19H168.855a1.19,1.19,0,0,1,0-2.38h862.29A1.18651,1.18651,0,0,1,1032.335,668.35778Z'
                      transform='translate(-167.66498 -230.45221)'
                      fill='#ccc'
                    />
                  </svg>
                  <h1 className='text-3xl text-primary-500 font-bold'>
                    Agenda creativa
                  </h1>
                  <h4 className='text-md text-start'>
                    <ul className='list-disc px-4'>
                      {creativeAgent.length
                        ? creativeAgent.map((activity, key) => (
                            <li className='flex gap-4 items-center justify-between'>
                              <span>{activity.title}</span>
                              {!activity.form ? (
                                <div className='flex gap-4 items-center justify-between'>
                                  {activity.description}
                                  <button
                                    type='button'
                                    onClick={() => updateFieldOnChange(key)}
                                    className='flex items-center p-2 rounded-full text-sm bg-primary-300 hover:bg-primary-500 text-white shadow-lg'
                                  >
                                    <FontAwesomeIcon icon={faPencil} />
                                  </button>
                                </div>
                              ) : (
                                <div className='flex gap-4 items-center justify-between'>
                                  <input
                                    onInput={(e) => {
                                      setActivityFormValue(e.target.value);
                                      return true;
                                    }}
                                    defaultValue={activity.description}
                                    placeholder='descripción'
                                    className='block form-input !p-2'
                                  />
                                  <button
                                    type='button'
                                    onClick={() =>
                                      updateFieldOnChange(key, true)
                                    }
                                    className='flex items-center p-2 rounded-full text-sm bg-primary-300 hover:bg-primary-500 text-white shadow-lg'
                                  >
                                    <FontAwesomeIcon icon={faFloppyDisk} />
                                  </button>
                                </div>
                              )}
                            </li>
                          ))
                        : 'No se definió una agenda creativa'}
                    </ul>
                  </h4>
                </div>
              </label>
            </label>
          </div>
          <div className='bg-white flex flex-col shadow rounded-lg p-8 gap-3 '>
            <div className='flex flex-col text-gray-500'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Temas/Ejes/Contenidos
              </h3>
              <ul className='list-disc px-4'>
                {plan.id
                  ? plan.topics.length
                    ? plan.topics.map((topic) => (
                        <li>
                          <span className='badge badge-primary badge-sm mr-2'>
                            {topic.topic.subject.name}
                          </span>
                          {topic.topic.name}
                        </li>
                      ))
                    : 'No se definieron competencias para esta planeación'
                  : ''}
              </ul>
            </div>
            <hr />
            <div className='flex flex-col text-gray-500'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Pregunta
              </h3>
              {plan.question}
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Actividades
              </h3>
              {activities.length
                ? activities.map((activity, key) => (
                    <div className='flex justify-between items-center'>
                      <div className='collapse w-full collapse-arrow text-sm capitalize'>
                        <input type='checkbox' className='peer' />
                        <div className='collapse-title text-gray-500 font-medium'>
                          {activity.title}
                        </div>
                        <div className='collapse-content'>
                          <p>{activity.description}</p>
                        </div>
                      </div>
                      <div className='form-control'>
                        <input
                          onChange={() => resolveActivity(key)}
                          checked={activity.done}
                          type='checkbox'
                          className='checkbox checkbox-accent'
                        />
                      </div>
                    </div>
                  ))
                : ''}
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Tareas
              </h3>
              {tasks.length
                ? tasks.map((task, key) => (
                    <div className='flex justify-between items-center'>
                      <div className='collapse w-full collapse-arrow text-sm capitalize'>
                        <input type='checkbox' className='peer' />
                        <div className='collapse-title text-gray-500 font-medium'>
                          {task.title}
                        </div>
                        <div className='collapse-content'>
                          <p>{task.description}</p>
                        </div>
                      </div>
                      <div className='form-control'>
                        <input
                          onChange={() => resolveTask(key)}
                          checked={task.done}
                          type='checkbox'
                          className='checkbox checkbox-accent'
                        />
                      </div>
                    </div>
                  ))
                : ''}
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Anexos
              </h3>
              {plan.id
                ? !plan.annexes.length
                  ? ''
                  : plan.annexes.map((annexe) => (
                      <div className='collapse collapse-arrow text-sm'>
                        <input type='checkbox' className='peer' />
                        <div className='collapse-title text-gray-500 font-medium capitalize'>
                          {annexe.title}
                        </div>
                        <div className='collapse-content'>
                          <p>
                            {annexe.type === 'link' ? (
                              <a
                                className='link link-primary'
                                href={annexe.value}
                              >
                                {annexe.value}
                              </a>
                            ) : (
                              annexe.value
                            )}
                          </p>
                        </div>
                      </div>
                    ))
                : ''}
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Referencias
              </h3>
              {plan.id
                ? !plan.references.length
                  ? ''
                  : plan.references.map((reference) => (
                      <div className='collapse collapse-arrow text-sm capitalize'>
                        <input type='checkbox' className='peer' />
                        <div className='collapse-title text-gray-500 font-medium'>
                          {reference.title}
                        </div>
                        <div className='collapse-content'>
                          <p>{reference.value}</p>
                          <span className='text-xs text-gray-300'>
                            - {reference.author}
                          </span>
                        </div>
                      </div>
                    ))
                : ''}
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Orientaciones para el docente
              </h3>
              <ul className='list-disc px-4'>
                {plan.id
                  ? JSON.parse(plan.orientations).map((orientation) => (
                      <li>{orientation}</li>
                    ))
                  : ''}
              </ul>
            </div>
            <hr />
            <div className='flex flex-col'>
              <h3 className='text-gray-600 text-xl font-semibold mb-4'>
                Adaptaciones
              </h3>
              <ul className='list-disc px-4'>
                {plan.id
                  ? JSON.parse(plan.adaptations).map((adaptation) => (
                      <li>{adaptation}</li>
                    ))
                  : ''}
              </ul>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
