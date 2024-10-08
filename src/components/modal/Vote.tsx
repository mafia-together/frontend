/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { postVote } from '../../axios/http';
import { roomInfoState } from '../../recoil/roominfo/atom';
import { VariablesCSS } from '../../styles/VariablesCSS';
import Votelabel from '../etc/VoteLabel';
import PlayerGrid from '../player/PlayerGrid';
import PlayerVote from '../player/PlayerVote';
import { TimeOnlySeconds } from '../time/TimeOnlySeconds';

type PropsType = {
  onOpenModal?: () => void;
  timeup?: boolean;
  voteAll?: boolean;
  voteTarget: number;
  setVoteTarget: (number: number) => void;
};

export default function Vote(props: PropsType) {
  const { onOpenModal, timeup, voteAll, voteTarget, setVoteTarget } = props;

  /* 방 정보 - 참가목록 받아오기 */
  const [roominfo] = useRecoilState(roomInfoState);

  // 투표
  const ABSTAIN_NUMBER = 0;
  const ABSTAIN_STRING = '';

  const setVote = async (number: number, name: string) => {
    // 서버에 투표 전송
    await postVote({ target: name });
    // 화면에 표시
    setVoteTarget(number);
  };

  // 방정보 받아와서 내 이름과 같은지 비교

  return (
    <>
      <div css={top}>
        <div css={timeText}>{timeup || voteAll ? <TimeOnlySeconds /> : '투표하기'}</div>
        {timeup || voteAll || (
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
        )}
      </div>
      <div css={content}>
        <div>
          {timeup || voteAll || <p css={description}>처형하고 싶은 사람을 투표해주세요.</p>}
          {timeup && (
            <p css={description}>
              투표시간이 되었습니다.
              <br />
              처형하고 싶은 사람을 투표해주세요.
            </p>
          )}
          {voteAll && (
            <p css={description}>
              모두 미리 투표를 하였습니다.
              <br />
              투표를 최종 확인해주세요.
            </p>
          )}

          <PlayerGrid>
            {roominfo.players.map((player, i) => (
              <PlayerVote
                player={player}
                key={`${player.name}_${i}`}
                index={i + 1}
                voteTarget={voteTarget}
                setVoteTarget={(number: number, name: string) => setVote(number, name)}
              />
            ))}
          </PlayerGrid>
        </div>
        <div>
          <input
            type="radio"
            name="vote"
            id={ABSTAIN_NUMBER.toString()}
            checked={voteTarget === ABSTAIN_NUMBER}
            css={abstention}
            onChange={() => setVote(ABSTAIN_NUMBER, ABSTAIN_STRING)}
          />
          <Votelabel text="기권" color="day" htmlFor="0" />
          {timeup || voteAll || (
            <p css={message}>모든 플레이어가 투표할 시 대화 시간이 종료됩니다.</p>
          )}
        </div>
      </div>
    </>
  );
}

const top = () => css`
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: 12px;
`;

const timeText = () => css`
  text-align: center;
  font-size: ${VariablesCSS.title};
  font-family: 'Cafe24Ssurround', sans-serif;
  color: ${VariablesCSS.day};
`;

const close = () => css`
  position: absolute;
  top: -6px;
  right: 4px;
  cursor: pointer;
`;

const content = () => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const description = () => css`
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

const message = () => css`
  margin-bottom: 30px;
  font-family: 'DNFForgedBlade', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: ${VariablesCSS.day50};
`;

const abstention = () => css`
  display: none;
  &:checked + label > div {
    color: ${VariablesCSS.light};
    background-color: ${VariablesCSS.kill};
  }
`;
