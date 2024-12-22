/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

// import { postSkill, useMafiaVoteResultQuery } from '../../axios/http';
import { middle } from '../../pages/Night';
import { VariablesCSS } from '../../styles/VariablesCSS';
import { Player } from '../../type';
import Votelabel from '../etc/VoteLabel';
import PlayerGrid from '../player/PlayerGrid';
import PlayerNight from '../player/PlayerNight';

interface PropsType {
  isAlive: boolean;
  players: Player[];
  publishSkill: (name: string) => void;
  mafiaSkillPlayer: string | null;
}
export const MafiaNight = ({ isAlive, players, publishSkill, mafiaSkillPlayer }: PropsType) => {
  // 지금 투표중인사람
  const [check, setCheck] = useState(-1);

  useEffect(() => {
    setCheck(mafiaSkillPlayer === '' ? 0 : -1);

    players.forEach((player, i) => {
      if (player.name === mafiaSkillPlayer) {
        setCheck(i + 1);
      }
    });
  }, [mafiaSkillPlayer, players]);

  // let nowVoteResult = mafiaSkillPlayer === '' ? 0 : -1;

  // 이름 -> index로 변경

  const findTargetName = (): string => {
    let targetName = '';
    players.forEach((player, i) => {
      if (check === i + 1) {
        targetName = player.name;
        return;
      }
    });
    return targetName;
  };

  const skill = async () => {
    if (check === -1) {
      return;
    }
    const targetName = findTargetName();
    publishSkill(targetName);
  };

  useEffect(() => {
    skill();
  }, [check, players]);

  return (
    <div css={middle}>
      <div css={description}>
        {isAlive ? '오늘밤 죽일 사람을 지목해주세요.' : '마피아가 죽일 사람을 지목하고 있습니다.'}
      </div>
      <PlayerGrid>
        {players.map((player, i) => (
          <PlayerNight
            player={player}
            key={i + 1}
            index={i + 1}
            myJob={'MAFIA'}
            nowVoteResult={check}
            {...(isAlive && { setCheck: setCheck })}
          />
        ))}
      </PlayerGrid>

      {/* 안죽이기 */}
      <input
        type="radio"
        name="vote"
        id="0"
        css={notkill}
        checked={check === 0}
        onChange={() => isAlive && setCheck(0)}
      />
      <Votelabel text="안죽이기" color="night" htmlFor="0" />
    </div>
  );
};

const description = css`
  margin: 36px auto;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 18px;
  text-align: center;
  color: ${VariablesCSS.light};
`;

const notkill = () => css`
  display: none;
  &:checked + label > div {
    color: ${VariablesCSS.light};
    background-color: ${VariablesCSS.kill};
  }
`;
