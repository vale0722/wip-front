import 'presentation/assets/styles/app.scss';
import { ScrollToTop } from 'domain/helpers/scroll';
import { RenderRoutes, ROUTES } from 'domain/helpers/routes';

function App() {
  return (
    <ScrollToTop>
      <RenderRoutes routes={ROUTES}> </RenderRoutes>
    </ScrollToTop>
  );
}

export default App;
