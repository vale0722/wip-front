import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment,react/destructuring-assignment
  return <>{props.children}</>;
};

export { ScrollToTop };
