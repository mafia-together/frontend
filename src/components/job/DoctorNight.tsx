/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { postSkill } from '../../axios/http';
import { middle } from '../../pages/Night';
import { VariablesCSS } from '../../styles/VariablesCSS';
import { Player } from '../../type';
import PlayerGrid from '../player/PlayerGrid';
import PlayerNight from '../player/PlayerNight';

interface PropsType {
  isAlive: boolean;
  players: Player[];
}
export const DoctorNight = (props: PropsType) => {
  const { players, isAlive } = props;

  const [check, setCheck] = useState<number>(-1);
  useEffect(() => {
    (async () => {
      if (check === -1) {
        return;
      }
      players.forEach(async (player, i) => {
        if (check === i + 1) {
          await postSkill({ target: player.name });
        }
      });
    })();
  }, [check, players]);
  return (
    <div css={middle}>
      <div css={description}>
        {isAlive ? '오늘밤 살릴 사람을 지목해주세요.' : '밤이 지나가고 있습니다..'}
      </div>
      <PlayerGrid>
        {players.map((player, i) => (
          <PlayerNight
            player={player}
            key={i + 1}
            index={i + 1}
            myJob={'DOCTOR'}
            {...(isAlive && { nowVoteResult: check })}
            {...(isAlive && { setCheck: setCheck })}
          />
        ))}
      </PlayerGrid>
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
