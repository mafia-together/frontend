import { Global } from '@emotion/react';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './Router';
import { BaseCss } from './styles/BaseCSS';

function App() {
  useEffect(() => {
    setScreenSize();
  }, []);
  return (
    <>
      <Global styles={BaseCss} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

function setScreenSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function setScreenReSize() {
  const vh = visualViewport?.height ? visualViewport?.height * 0.01 : window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setScreenReSize);
