import { ReactNode } from 'react';
import { createHashRouter } from 'react-router-dom';

import { CreateRoom } from './pages/CreateRoom';
import FirstPage from './pages/FirstPage';
import Game from './pages/Game';
import InputCode from './pages/InputCode';
import InputName from './pages/InputName';
import NotFound from './pages/NotFound';

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
    element: <CreateRoom />,
  },
  {
    path: '/participate',
    element: <InputCode />,
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
