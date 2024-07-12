/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../styles/VariablesCSS';
import { SpecialJob } from '../../type';
import CheckButton from '../button/CheckButton';
import JobIcon from '../svg/JobIcon';
import CountGroup from './CountGroup';

type PropsType = {
  job: SpecialJob;
  count: number;
  onCountJob: (job: string, number: number) => void;
};

const jobName = {
  MAFIA: '마피아',
  DOCTOR: '의사',
  POLICE: '경찰',
};

export default function JobCount(props: PropsType) {
  const { job, count, onCountJob } = props;

  return (
    <div css={jobCountContainer}>
      <div css={jobGroup}>
        <JobIcon job={job} size="default" />
        <p css={jobText}>{jobName[job]}</p>
      </div>
      {job === 'MAFIA' ? (
        <CountGroup job={job} count={count} onCountJob={onCountJob} />
      ) : (
        <CheckButton job={job} count={count} onCountJob={onCountJob} />
      )}
    </div>
  );
}

const jobCountContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 16px;
  color: ${VariablesCSS.light};
  font-size: 28px;
  font-family: 'Cafe24Ssurround';
`;

const jobGroup = css`
  display: flex;
  gap: 16px;
  color: ${VariablesCSS.light};
`;

const jobText = css`
  display: block;
  padding-top: 5px;
`;
