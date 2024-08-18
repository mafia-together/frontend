/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FormEvent, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { participateRooms } from '../axios/http';
import BottomButton from '../components/button/BottomButton';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import { notifyUseToast } from '../components/toast/NotifyToast';
import TopEnter from '../components/top/TopEnter';
import { VariablesCSS } from '../styles/VariablesCSS';

export default function InputName() {
  const [name, setName] = useState('');
  const onName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 10) {
      setName(e.target.value);
    }
  };

  /* 이동 */
  const canParticipateRoom = () => {
    return name.trim().length > 0;
  };

  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') as string;

  const navigate = useNavigate();
  const goWaitingRoom = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (canParticipateRoom()) {
      try {
        const auth = await participateRooms({ code: code, name: name });
        localStorage.setItem('auth', auth.auth);
        navigate('/room');
        // eslint-disable-next-line
      } catch (error: any) {
        console.log(error);

        notifyUseToast(error.response.data.message, 'LOBBY');
      }
    }
  };

  return (
    <AppContainerCSS>
      <div>
        <TopEnter use="inputName" />
        <form onSubmit={event => goWaitingRoom(event)}>
          <div css={middle}>
            <input
              css={nameCss}
              type="text"
              name="name"
              maxLength={10}
              autoComplete="off"
              value={name}
              onChange={onName}
              spellCheck="false"
              autoFocus
            />
          </div>
          <button type="submit">
            <BottomButton use="complete" daynight="night" ready={canParticipateRoom()} />
          </button>
        </form>
        <Toaster containerStyle={{ bottom: `calc(${VariablesCSS.bottombutton} + 4px)` }} />
      </div>
    </AppContainerCSS>
  );
}

const middle = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc((var(--vh, 1vh) * 100) - ${VariablesCSS.top} - ${VariablesCSS.bottombutton});
`;

const nameCss = () => css`
  box-sizing: border-box;
  width: 90%;
  max-width: 316px;
  height: 75px;
  padding: 22px 10px;
  border-radius: 15px;
  border: 3px solid ${VariablesCSS.light};
  background-color: ${VariablesCSS.light20};
  color: ${VariablesCSS.light};
  font-size: ${VariablesCSS.default};
  font-family: 'Cafe24Ssurround', sans-serif;
  text-align: center;
  word-break: break-all;

  &:focus {
    outline: 3px solid ${VariablesCSS.light};
  }
`;
