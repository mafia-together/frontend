/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../styles/VariablesCSS';
import { Time } from '../time/Time';

type PropsType = {
  daynight: 'day' | 'night';
};

export default function TopResult(props: PropsType) {
  return (
    <div css={container(props)}>
      <p css={left}>결과</p>
      <p css={timeText}>
        <Time />
      </p>
    </div>
  );
}

const container = (props: PropsType) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${VariablesCSS.top};
  ${props.daynight === 'night'
    ? `border-bottom: 1px solid ${VariablesCSS.light50};`
    : `border-bottom: 1px solid ${VariablesCSS.day};`}

  font-size: ${VariablesCSS.title};
  ${props.daynight === 'night' ? `color: ${VariablesCSS.light};` : ` color: ${VariablesCSS.day};`}

  & p {
    margin-top: 2px;
    display: block;
  }
`;
const left = () => css`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'WAGURITTF', sans-serif;
`;

const timeText = () => css`
  padding-top: 2px;
  font-family: 'Cafe24Ssurround', sans-serif;
`;
