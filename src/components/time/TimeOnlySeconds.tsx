import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { roomInfoState } from '../../recoil/roominfo/atom';

export const TimeOnlySeconds = () => {
  const ONE_SECOND = 1000;

  const [roomInfo] = useRecoilState(roomInfoState);

  const hanleTimeString = (lastTime: number) => {
    return `${Math.trunc(lastTime % 60)}`;
  };

  const [seconds, setSeconds] = useState('10');

  const timer = useRef<number>(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      const tempTime = Math.trunc((+new Date(roomInfo.endTime) - +new Date()) / ONE_SECOND);

      const timeString = hanleTimeString(tempTime);
      setSeconds(timeString);
    }, 1000);

    return () => clearInterval(timer.current);
  }, [roomInfo]);

  return <div>{seconds}</div>;
};
