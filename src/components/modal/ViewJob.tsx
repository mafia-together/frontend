/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { roomInfoState } from '../../recoil/roominfo/atom';
import { VariablesCSS } from '../../styles/VariablesCSS';
import PlayerGrid from '../player/PlayerGrid';
import PlayerJob from '../player/PlayerJob';
import { TimeOnlySeconds } from '../time/TimeOnlySeconds';

type PropsType = {
  onOpenModal?: () => void;
  voteTime: boolean;
};

export default function ViewJob(props: PropsType) {
  const { onOpenModal, voteTime } = props;

  // 방정보 - 참가목록 받아오기
  const [roominfo] = useRecoilState(roomInfoState);

  return (
    <>
      <div css={top}>
        {!voteTime ? (
          <>
            <div css={title}>직업보기</div>
            <button css={close} onClick={onOpenModal}>
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6401 12.6973C12.8731 12.464 13.1497 12.2789 13.4543 12.1527C13.7588 12.0264 14.0852 11.9614 14.4149 11.9614C14.7445 11.9614 15.0709 12.0264 15.3755 12.1527C15.68 12.2789 15.9566 12.464 16.1896 12.6973L25.2975 21.8019L34.4055 12.6973C34.6385 12.4642 34.9152 12.2793 35.2197 12.1532C35.5242 12.0271 35.8506 11.9622 36.1802 11.9622C36.5098 11.9622 36.8361 12.0271 37.1407 12.1532C37.4452 12.2793 37.7218 12.4642 37.9549 12.6973C38.188 12.9303 38.3728 13.207 38.499 13.5115C38.6251 13.816 38.69 14.1424 38.69 14.472C38.69 14.8016 38.6251 15.1279 38.499 15.4325C38.3728 15.737 38.188 16.0136 37.9549 16.2467L28.8503 25.3547L37.9549 34.4626C38.4256 34.9333 38.69 35.5717 38.69 36.2373C38.69 36.903 38.4256 37.5413 37.9549 38.012C37.4842 38.4827 36.8458 38.7471 36.1802 38.7471C35.5145 38.7471 34.8762 38.4827 34.4055 38.012L25.2975 28.9074L16.1896 38.012C15.7189 38.4827 15.0805 38.7471 14.4149 38.7471C13.7492 38.7471 13.1108 38.4827 12.6401 38.012C12.1695 37.5413 11.905 36.903 11.905 36.2373C11.905 35.5717 12.1695 34.9333 12.6401 34.4626L21.7448 25.3547L12.6401 16.2467C12.4069 16.0138 12.2218 15.7371 12.0956 15.4326C11.9693 15.1281 11.9043 14.8016 11.9043 14.472C11.9043 14.1423 11.9693 13.8159 12.0956 13.5114C12.2218 13.2069 12.4069 12.9302 12.6401 12.6973Z"
                  fill="#210909"
                  fillOpacity="0.8"
                />
              </svg>
            </button>
          </>
        ) : (
          <div css={title}>
            <TimeOnlySeconds />
          </div>
        )}
      </div>
      <div css={content}>
        <p css={description}>{voteTime && '투표중입니다...'}</p>
        <PlayerGrid>
          {roominfo.players.map((player, i) => (
            <PlayerJob player={player} key={i + 1} />
          ))}
        </PlayerGrid>
      </div>
    </>
  );
}

const top = css`
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: 12px;
`;

const title = css`
  text-align: center;
  font-size: ${VariablesCSS.title};
  font-family: 'Cafe24Ssurround', sans-serif;
  color: ${VariablesCSS.day};
`;

const close = css`
  position: absolute;
  top: -6px;
  right: 4px;
  cursor: pointer;
`;

const content = css`
  height: calc(100% - 70px - ${VariablesCSS.margin});
  margin-top: 70px;
  margin-bottom: ${VariablesCSS.margin};
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const description = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  margin-bottom: 10px;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 16px;
  color: ${VariablesCSS.day};
  text-align: center;
  opacity: 0.8;
`;
