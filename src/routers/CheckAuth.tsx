import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { existGame } from '../axios/http';

interface propsType {
  children: React.ReactNode;
}

export default function CheckAuth({ children }: propsType) {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const isExist = await existGame();
      if (isExist) {
        if (confirm('이미 참가중인 방이 있습니다. 재접속 하시겠습니까?')) {
          navigate('/game');
        }
      }
    })();
  }, []);

  return <>{children}</>;
}
