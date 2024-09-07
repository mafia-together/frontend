import { ReactNode } from 'react';
import { createHashRouter } from 'react-router-dom';

import { CreateRoom } from './pages/CreateRoom';
import FirstPage from './pages/FirstPage';
import Game from './pages/Game';
import InputCode from './pages/InputCode';
import InputName from './pages/InputName';
import NotFound from './pages/NotFound';
import CheckInAppBrowser from './routers/CheckInAppBrowser';

interface RouteElement {
  path: string;
  element: ReactNode;
  redirectPath?: string;
  errorElement?: ReactNode;
}

const routes: RouteElement[] = [
  {
    path: '/',
    element: <FirstPage />,
  },
  {
    path: 'create',
    element: (
      <CheckInAppBrowser>
        <CreateRoom />
      </CheckInAppBrowser>
    ),
  },
  {
    path: '/participate',
    element: (
      <CheckInAppBrowser>
        <InputCode />
      </CheckInAppBrowser>
    ),
  },
  {
    path: '/name',
    element: <InputName />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// const router = createBrowserRouter(routes)
const router = createHashRouter(routes);

export default router;
