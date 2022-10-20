import 'presentation/assets/styles/app.scss';
import { RenderRoutes, ROUTES } from 'domain/helpers/routes';
import { useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='App'>
      {isLoading ? (
        <main className='fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out flex items-center justify-center'>
          <MutatingDots
            color='#083A50'
            secondaryColor='#348a90'
            height='100'
            width='110'
            ariaLabel='loading-indicator'
          />
        </main>
      ) : (
        ''
      )}
      <RenderRoutes
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        routes={ROUTES}
      />
    </div>
  );
}

export default App;
