import { HelmetProvider } from 'react-helmet-async';
import { FormProvider } from '~/components/contexts/FormContext';
import Main from '~/components/root/Main';

export const App = () => {
  return (
    <HelmetProvider>
      <FormProvider>
        <Main />
      </FormProvider>
    </HelmetProvider>
  );
};
