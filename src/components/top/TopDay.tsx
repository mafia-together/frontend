/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../styles/VariablesCSS';
import { Status } from '../../type';
import { Time } from '../time/Time';

type PropsType = {
  isAlive: boolean;
  onOpenModal: () => void;
  statusType: Status;
};

export default function TopDay(props: PropsType) {
  const { isAlive, onOpenModal, statusType } = props;

  return (
    <div css={container}>
      <div css={dayLeft}>
        <img src="/assets/img/icon/sun.svg" alt="" />
        <p css={dayText}>낮</p>
      </div>
      {/* DAY 일때만 시간 보여줘서 최적화 */}
      <p css={timeText}>{statusType == 'DAY' ? <Time /> : '0:00'}</p>
      {isAlive ? (
        <button css={dayRight} onClick={onOpenModal}>
          <img src="/assets/img/icon/vote.svg" alt="" />
          <p>미리투표하기</p>
        </button>
      ) : (
        <button css={dayRight} onClick={onOpenModal}>
          <img src="/assets/img/icon/bag.svg" alt="" />
          <p>직업보기</p>
        </button>
      )}
    </div>
  );
}

const container = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${VariablesCSS.top};
  border-bottom: 1px solid ${VariablesCSS.day30};
  font-size: ${VariablesCSS.title};
  color: ${VariablesCSS.day};
`;

const dayLeft = () => css`
  display: flex;
  align-items: center;
  width: 85px;
  gap: 8px;
  font-family: 'WAGURITTF', sans-serif;
`;

const dayText = () => css`
  margin-top: 3px;
  display: block;
`;

const timeText = () => css`
  padding-top: 2px;
  font-family: 'Cafe24Ssurround', sans-serif;
`;

const dayRight = () => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 85px;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 12px;
  color: ${VariablesCSS.day};
  cursor: pointer;
`;
