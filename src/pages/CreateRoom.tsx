/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { createRoom } from '../axios/http';
import BottomButton from '../components/button/BottomButton';
import CountGroup from '../components/etc/CountGroup';
import JobCount from '../components/etc/JobCount';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import { notifyUseToast } from '../components/toast/NotifyToast';
import TopEnter from '../components/top/TopEnter';
import { VariablesCSS } from '../styles/VariablesCSS';
export function CreateRoom() {
  const navigate = useNavigate();

  // const MIN_MAFIA = 1;
  // const MIN_TOTAL = 3;

  /* data */
  const [jobCount, setjobCount] = useState({
    total: 0,
    mafia: 0,
    doctor: 0,
    police: 0,
  });

  const onCountjob = (job: string, number: number) => {
    switch (job) {
      case 'MAFIA':
        if (number <= 2) {
          setjobCount({ ...jobCount, mafia: number });
        }
        break;
      case 'DOCTOR':
        setjobCount({ ...jobCount, doctor: number });
        break;
      case 'POLICE':
        setjobCount({ ...jobCount, police: number });
        break;
      default:
        setjobCount({ ...jobCount, total: number });
        break;
    }
  };

  interface RoomCreationResult {
    result: boolean;
    message: string;
  }

  const canCreateRoom = (): RoomCreationResult => {
    // // 총 인원이 게임 최소 요건을 충족하는지 확인
    // const isTotalJobCountValid = jobCount.total >= MIN_TOTAL;

    // // 마피아 역할 수가 최소 마피아 수 요구 사항을 충족하는지 확인
    // const isMafiaCountValid = jobCount.mafia >= MIN_MAFIA;

    // // 시민팀이 더 많은지 확인 = 총 인원이 마피아 팀의 2배보다 큰지 확인
    // const isMafiaRatioValid = jobCount.total > jobCount.mafia * 2;

    // // 총 인원이 직업수(마피아, 의사, 경찰) 역할 수의 합 이상인지 확인
    // const isRolesCountSufficient =
    //   jobCount.total >= jobCount.mafia + jobCount.doctor + jobCount.police;

    // switch (true) {
    //   case !isTotalJobCountValid:
    //     return { result: false, message: `총인원은 ${MIN_TOTAL}명 이상이어야 합니다.` };
    //   case !isMafiaCountValid:
    //     return { result: false, message: `마피아가 최소 ${MIN_MAFIA}명 이상이어야 합니다.` };
    //   case !isMafiaRatioValid:
    //     return { result: false, message: `시민팀이 더 많아야 합니다.` };
    //   case !isRolesCountSufficient:
    //     return { result: false, message: `총인원이 직업 수 이상이어야 합니다.` };
    // }

    // 게임시작가능
    return { result: true, message: '게임 시작가능합니다.' };
  };

  /* 이동 */
  const onCreateRoom = async () => {
    if (canCreateRoom().result) {
      const roomCode = await createRoom(jobCount);
      navigate(`/name?code=${roomCode.code}`);
    } else {
      notifyUseToast(canCreateRoom().message, 'LOBBY');
    }
  };

  return (
    <AppContainerCSS>
      <div>
        <TopEnter use="createRoom" />
        <div css={middle}>
          <div css={totalCount}>
            <div css={iconGroup}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20C17.25 20 14.8958 19.0208 12.9375 17.0625C10.9792 15.1042 10 12.75 10 10C10 7.25 10.9792 4.89583 12.9375 2.9375C14.8958 0.979167 17.25 0 20 0C22.75 0 25.1042 0.979167 27.0625 2.9375C29.0208 4.89583 30 7.25 30 10C30 12.75 29.0208 15.1042 27.0625 17.0625C25.1042 19.0208 22.75 20 20 20ZM0 40V33C0 31.5833 0.365 30.2817 1.095 29.095C1.825 27.9083 2.79333 27.0017 4 26.375C6.58333 25.0833 9.20833 24.115 11.875 23.47C14.5417 22.825 17.25 22.5017 20 22.5C22.75 22.5 25.4583 22.8233 28.125 23.47C30.7917 24.1167 33.4167 25.085 36 26.375C37.2083 27 38.1775 27.9067 38.9075 29.095C39.6375 30.2833 40.0017 31.585 40 33V40H0Z"
                  fill="#F8F8F8"
                />
              </svg>
              <p>총인원</p>
            </div>
            <CountGroup job="total" count={jobCount.total} onCountJob={onCountjob} />
          </div>
          <JobCount job="MAFIA" count={jobCount.mafia} onCountJob={onCountjob} />
          <JobCount job="DOCTOR" count={jobCount.doctor} onCountJob={onCountjob} />
          <JobCount job="POLICE" count={jobCount.police} onCountJob={onCountjob} />
        </div>
        <Toaster containerStyle={{ bottom: `calc(${VariablesCSS.bottombutton} + 4px)` }} />
        <div onClick={onCreateRoom}>
          <BottomButton use="complete" daynight="night" ready={canCreateRoom()?.result} />
        </div>
      </div>
    </AppContainerCSS>
  );
}

const middle = () => css`
  height: calc((var(--vh, 1vh) * 100) - ${VariablesCSS.top} - ${VariablesCSS.bottombutton});
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const totalCount = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  margin-top: 34px;
  margin-bottom: 64px;
  font-family: 'Cafe24Ssurround';
  color: ${VariablesCSS.light};
`;

const iconGroup = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 0 auto;
  font-size: 28px;
`;
