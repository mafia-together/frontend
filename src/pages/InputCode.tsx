/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { getValidRoomCode } from '../axios/http';
import BigButton from '../components/button/BigButton';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import { notifyUseToast } from '../components/toast/NotifyToast';
import TopEnter from '../components/top/TopEnter';
import { VariablesCSS } from '../styles/VariablesCSS';

export default function ParticipateRoom() {
  const MAX_LENGTH = 10;

  /* 코드 자동입력 */
  const [searchParams] = useSearchParams();
  const codeParams = !searchParams.get('code') ? '' : searchParams.get('code');

  /* 코드 사용자입력 */
  const [code, setCode] = useState(codeParams);
  const onCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setCode(e.target.value);
    }
  };

  /* 이동 */
  const isValidCode = () => {
    return code?.length === MAX_LENGTH;
  };
  const navigate = useNavigate();
  const goInputName = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValidCode()) {
      const roomCodeExistsResponse = await getValidRoomCode(code);
      if (!roomCodeExistsResponse.exist) {
        notifyUseToast('해당하는 방이 존재하지 않습니다.', 'LOBBY');
        return;
      }
      navigate(`/name?code=${code}`);
    }
  };

  return (
    <AppContainerCSS>
      <div>
        <TopEnter use="participateRoom" />
        <form css={middle} onSubmit={event => goInputName(event)}>
          <input
            css={codeinput}
            type="text"
            value={code || ''}
            name="code"
            maxLength={10}
            onChange={onCode}
            spellCheck="false"
            autoFocus
            autoComplete="off"
          />
          <button type="submit" css={buttonContainer}>
            <BigButton vatiety="soft" use="participate" ready={isValidCode()} />
          </button>
        </form>
        <Toaster />
      </div>
    </AppContainerCSS>
  );
}

const middle = css`
  display: flex;
  height: calc((var(--vh, 1vh) * 100) - ${VariablesCSS.top});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;
`;

const codeinput = css`
  box-sizing: border-box;
  width: 270px;
  height: 75px;
  padding: 22px 42px;
  border-radius: 15px;
  border: 3px solid ${VariablesCSS.light};
  background-color: ${VariablesCSS.light20};
  color: ${VariablesCSS.light};
  font-size: ${VariablesCSS.default};
  font-family: 'Cafe24Ssurround', sans-serif;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: 3px solid ${VariablesCSS.light};
  }
`;

const buttonContainer = css`
  display: block;
  width: 100%;
`;
