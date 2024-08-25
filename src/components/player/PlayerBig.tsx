/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../styles/VariablesCSS';
import { Color, Job } from '../../type';
import JobIcon from '../svg/JobIcon';

type PropsType = {
  color: Color;
  job: Job;
  name: string;
};

export default function PlayerBig(props: PropsType) {
  const { job, name } = props;

  return (
    <div css={contianer(props)}>
      <JobIcon job={job} size="big" />
      <p>{name}</p>
    </div>
  );
}

const contianer = (props: PropsType) => css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 220px;
  height: 220px;
  padding: 10px 60px;
  border-radius: 15px;
  background-color: ${VariablesCSS.white30};
  color: ${VariablesCSS[props.color]};
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 20px;
  text-align: center;
  word-break: break-all;
`;
