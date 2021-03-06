import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

// const IndexScreen = lazy(() => import('~/components/screens/Index'))
const ContactFormScreen = lazy(() => import('~/components/contact/index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/">
            <ContactFormScreen />
          </Route>
          {/* <Route exact path="/">
            <IndexScreen />
          </Route> */}
          <Route path="*">
            <Page404Screen />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
