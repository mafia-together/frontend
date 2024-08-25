/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import BigButton from '../components/button/BigButton';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import { VariablesCSS } from '../styles/VariablesCSS';

export default function FirstPage() {
  return (
    <AppContainerCSS>
      <div css={container}>
        <h1 css={h1}>마피아 투게더</h1>
        <div css={description}>
          <p>마피아는 시민들 사이에 숨어</p>
          <p>끝까지 살아남으세요.</p>
          <p>시민들은 대화를 통해</p>
          <p>숨어있는 마피아를 찾아내세요.</p>
        </div>
        <div>
          <Link to="/create" style={{ textDecoration: 'none' }}>
            <BigButton vatiety="emphasis" use="createRoom" ready={true} />
          </Link>
          <Link to={'/participate'} style={{ textDecoration: 'none' }}>
            <BigButton vatiety="soft" use="participate" ready={true} />
          </Link>
        </div>
      </div>
    </AppContainerCSS>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(var(--vh, 1vh) * 100);

  @keyframes slowshow {
    0% {
      opacity: 0;
      transform: translateY(6px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      opacity: 1;
    }
  }

  & a:first-of-type {
    display: block;
    animation: slowshow 2s 0.5s backwards ease-out;
  }
  & a:nth-of-type(2) {
    display: block;
    margin-top: 10px;
    animation: slowshow 2s 0.8s backwards ease-out;
  }
`;

const h1 = css`
  margin: 0 auto;
  font-family: 'LOTTERIACHAB', serif;
  font-size: min(62px, 15vw);
  font-weight: 400;
  text-align: center;
  word-break: keep-all;
  color: ${VariablesCSS.light};
  text-shadow: 0px 1px 8px rgba(0, 0, 0, 0.5);
  animation: slowshow 1s 0.2s backwards ease-out;
`;

const description = css`
  font-family: 'DNFForgedBlade', serif;
  font-size: 16px;
  font-weight: 400;
  color: ${VariablesCSS.light80};
  text-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
  line-height: 26px;

  & > p:first-of-type,
  & > p:nth-of-type(2) {
    text-align: end;
  }
  & > p:nth-of-type(3),
  & > p:nth-of-type(4) {
    text-align: start;
  }

  & > p:first-of-type {
    animation: slowshow 2s 2s backwards ease-out;
  }
  & > p:nth-of-type(2) {
    animation: slowshow 2s 2.6s backwards ease-out;
    margin-bottom: calc(var(--vh, 1vh) * 8);
  }
  & > p:nth-of-type(3) {
    animation: slowshow 2s 3.4s backwards ease-out;
  }
  & > p:nth-of-type(4) {
    animation: slowshow 2s 4s backwards ease-out;
  }
`;
