import { ReactNode } from 'react';
import { createHashRouter } from 'react-router-dom';

import { CreateRoom } from './pages/CreateRoom';
import FirstPage from './pages/FirstPage';
import Game from './pages/Game';
import InputCode from './pages/InputCode';
import InputName from './pages/InputName';
import NotFound from './pages/NotFound';
import CheckAuth from './routers/CheckAuth';

interface RouteElement {
  path: string;
  element: ReactNode;
  redirectPath?: string;
  errorElement?: ReactNode;
}

const routes: RouteElement[] = [
  {
    path: '/',
    element: (
      <CheckAuth>
        <FirstPage />
      </CheckAuth>
    ),
  },
  {
    path: 'create',
    element: (
      <CheckAuth>
        <CreateRoom />
      </CheckAuth>
    ),
  },
  {
    path: '/participate',
    element: (
      <CheckAuth>
        <InputCode />
      </CheckAuth>
    ),
  },
  {
    path: '/name',
    element: (
      <CheckAuth>
        <InputName />
      </CheckAuth>
    ),
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
