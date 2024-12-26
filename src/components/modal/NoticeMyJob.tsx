/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import { myJobState } from '../../recoil/roominfo/atom';
import { VariablesCSS } from '../../styles/VariablesCSS';
import PlayerBig from '../player/PlayerBig';
import NoticeCitizen from './NoticeJobs/NoticeCitizen';
import NoticeMafia from './NoticeJobs/NoticeMafia';

type PropsType = {
  name: string;
};

const text = {
  CITIZEN: '시민',
  MAFIA: '마피아',
  DOCTOR: '의사',
  POLICE: '경찰',
};

export default function NoticeMyJob(props: PropsType) {
  const { name } = props;

  const myJob = useRecoilValue(myJobState);

  return (
    <>
      {myJob == 'MAFIA' && <NoticeMafia />}
      {myJob == 'CITIZEN' && <NoticeCitizen />}
      {(myJob == 'DOCTOR' || myJob == 'POLICE') && (
        <div css={container}>
          <PlayerBig color="day" job={myJob} name={name} />
          <p css={description}>
            당신은 <br />
            {myJob && text[myJob]}입니다.
          </p>
        </div>
      )}
    </>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${VariablesCSS.day};
  gap: 50px;
  height: 100%;
`;
const description = css`
  font-family: 'DNFForgedBlade', sans-serif;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
`;
