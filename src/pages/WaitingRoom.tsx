/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Suspense, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { getRoomsCode, startGame, useGamesInfoQuery } from '../axios/http';
import BigButton from '../components/button/BigButton';
import { Loading } from '../components/etc/Loading';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import PlayerGrid from '../components/player/PlayerGrid';
import PlayerWaiting from '../components/player/PlayerWaiting';
import { notifyUseToast } from '../components/toast/NotifyToast';
import TopEnter from '../components/top/TopEnter';
import { VariablesCSS } from '../styles/VariablesCSS';
import { Player } from '../type';

export default function WaitingRoom() {
  const [openAnimation, setOpenAnimation] = useState(false);

  /* 참가목록 받아오기 */
  const [players, setPlayers] = useState<Player[]>([]);
  const { roomInfo } = useGamesInfoQuery();

  const getVirtualPlayers = () => {
    const virtualPlayersLength = roomInfo.totalPlayers - roomInfo.players.length;
    const virtualPlayer = {
      name: '',
      isAlive: true,
      job: null,
    };
    return Array.from({ length: virtualPlayersLength }, () => virtualPlayer);
  };

  useEffect(() => {
    setPlayers(roomInfo.players);
  }, [roomInfo.players]);

  /* 초대하기 모달 */
  // 띄우고 끄기
  const [openModal, setOpenModal] = useState(false);
  const onModal = () => {
    setOpenAnimation(true);
    setOpenModal(true);
  };

  const onClose = () => {
    setOpenAnimation(false);
    setTimeout(() => {
      setOpenModal(false);
    }, 450);
  };

  // 코드 복사
  const [code, setCode] = useState<string>('');
  useEffect(() => {
    (async () => {
      const roomResponse = await getRoomsCode();
      setCode(roomResponse.code);
    })();
  }, [code]);
  const onCopyCode = async () => {
    await navigator.clipboard.writeText(code);
    notifyUseToast('초대코드가 복사되었습니다.', 'INVITE');
  };

  const onShareLink = async () => {
    // 링크 공유
    const inviteLink = 'https://mafia-together.com' + '/#/participate?code=' + code;
    const shareData = {
      url: inviteLink,
    };
    if (navigator.share && navigator.canShare(shareData)) {
      navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(inviteLink);

    notifyUseToast('초대링크가 복사되었습니다.', 'INVITE');
  };

  /* 게임시작 */
  const canStartGame = () => {
    return roomInfo.isMaster && players.length === roomInfo.totalPlayers;
  };
  const navigate = useNavigate();
  const onGameStart = async () => {
    if (canStartGame()) {
      await startGame();
      navigate('/room');
    }
  };

  return (
    <AppContainerCSS>
      <Suspense fallback={<Loading />}>
        <div>
          <TopEnter use="waitingRoom" onModal={onModal} />
          <div css={middle}>
            <div css={textGroup}>
              <p css={subTitle}>참가목록</p>
              <p css={number}>
                {players.length}/{roomInfo.totalPlayers}
              </p>
            </div>
            <PlayerGrid>
              {[...players, ...getVirtualPlayers()].map((player, i) => (
                <PlayerWaiting name={player.name} key={`${player.name}_${i}`} />
              ))}
            </PlayerGrid>
          </div>
          <div css={bottom} onClick={onGameStart}>
            {roomInfo.isMaster && (
              <BigButton vatiety="emphasis" use="gameStart" ready={canStartGame()} />
            )}
          </div>

          {openModal ? (
            <div css={inviteModalContainer(openAnimation)}>
              <div css={dimmed}></div>
              <div css={modalInner(openAnimation)}>
                <div css={modalTitle}>
                  <p>초대하기</p>
                  <button css={close} onClick={onClose}>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.343 12.343C12.5759 12.1098 12.8526 11.9247 13.1571 11.7984C13.4616 11.6722 13.788 11.6072 14.1177 11.6072C14.4474 11.6072 14.7738 11.6722 15.0783 11.7984C15.3828 11.9247 15.6595 12.1098 15.8924 12.343L25.0004 21.4476L34.1083 12.343C34.3414 12.11 34.6181 11.9251 34.9226 11.799C35.2271 11.6728 35.5534 11.6079 35.883 11.6079C36.2126 11.6079 36.539 11.6728 36.8435 11.799C37.148 11.9251 37.4247 12.11 37.6577 12.343C37.8908 12.5761 38.0757 12.8528 38.2018 13.1573C38.3279 13.4618 38.3929 13.7881 38.3929 14.1177C38.3929 14.4473 38.3279 14.7737 38.2018 15.0782C38.0757 15.3827 37.8908 15.6594 37.6577 15.8925L28.5531 25.0004L37.6577 34.1084C38.1284 34.579 38.3929 35.2174 38.3929 35.8831C38.3929 36.5487 38.1284 37.1871 37.6577 37.6578C37.1871 38.1285 36.5487 38.3929 35.883 38.3929C35.2174 38.3929 34.579 38.1285 34.1083 37.6578L25.0004 28.5532L15.8924 37.6578C15.4217 38.1285 14.7833 38.3929 14.1177 38.3929C13.4521 38.3929 12.8137 38.1285 12.343 37.6578C11.8723 37.1871 11.6079 36.5487 11.6079 35.8831C11.6079 35.2174 11.8723 34.579 12.343 34.1084L21.4476 25.0004L12.343 15.8925C12.1097 15.6595 11.9247 15.3829 11.7984 15.0783C11.6721 14.7738 11.6071 14.4474 11.6071 14.1177C11.6071 13.7881 11.6721 13.4617 11.7984 13.1571C11.9247 12.8526 12.1097 12.576 12.343 12.343Z"
                        fill="#35063D"
                      />
                    </svg>
                  </button>
                </div>
                <button css={inviteShareLinkCss} onClick={onShareLink}>
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9533 6.27751C14.9533 4.28418 16.5783 2.66676 18.5803 2.66676C19.0556 2.66562 19.5264 2.75811 19.966 2.93895C20.4056 3.11979 20.8052 3.38544 21.1421 3.72073C21.479 4.05602 21.7466 4.45438 21.9295 4.89308C22.1125 5.33177 22.2072 5.8022 22.2083 6.27751C22.2083 8.27193 20.5833 9.88934 18.5803 9.88934C18.0999 9.88993 17.6242 9.79504 17.1808 9.61018C16.7375 9.42532 16.3353 9.15417 15.9976 8.81251L10.9763 12.2315C11.1162 12.9281 11.0476 13.6504 10.7792 14.3083L16.2847 17.9266C16.9331 17.3977 17.7446 17.1095 18.5813 17.1108C19.0566 17.1098 19.5275 17.2025 19.967 17.3834C20.4065 17.5644 20.8061 17.8302 21.1429 18.1656C21.4797 18.501 21.7471 18.8994 21.9299 19.3382C22.1127 19.7769 22.2073 20.2474 22.2083 20.7227C22.2083 22.716 20.5833 24.3334 18.5803 24.3334C17.6205 24.3354 16.6993 23.9562 16.0191 23.2791C15.3389 22.602 14.9556 21.6824 14.9533 20.7227C14.9524 20.2164 15.0591 19.7156 15.2663 19.2537L9.80417 15.6668C9.1427 16.2419 8.29522 16.5579 7.41867 16.5562C6.94332 16.5573 6.47241 16.4648 6.03283 16.2839C5.59326 16.1029 5.19364 15.8372 4.85682 15.5018C4.51999 15.1663 4.25256 14.7678 4.06979 14.329C3.88703 13.8902 3.79252 13.4197 3.79167 12.9443C3.79267 12.4691 3.88728 11.9987 4.0701 11.56C4.25293 11.1213 4.52039 10.7229 4.8572 10.3876C5.19401 10.0523 5.59358 9.78666 6.03308 9.60581C6.47259 9.42495 6.94341 9.33245 7.41867 9.33359C8.57134 9.33359 9.59617 9.86768 10.2603 10.6997L15.1277 7.38576C15.0119 7.02775 14.953 6.65378 14.9533 6.27751Z"
                      fill="#35063D"
                    />
                  </svg>
                  초대링크 공유
                </button>
                <div css={inviteCodeContainer} onClick={onCopyCode}>
                  <p css={inviteCodeDescription}>초대코드</p>
                  <p css={inviteCodeCss}>{code}</p>
                </div>
              </div>
              <Toaster />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </Suspense>
    </AppContainerCSS>
  );
}

/* css */
const middle = css`
  height: calc(
    (var(--vh, 1vh) * 100) - ${VariablesCSS.top} - ${VariablesCSS.bigbutton} -
      ${VariablesCSS.margin}
  );
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const textGroup = css`
  margin-top: 16px;
  margin-bottom: 32px;
  font-family: 'Cafe24Ssurround', sans-serif;
  color: ${VariablesCSS.light};
  text-align: center;
`;

const subTitle = css`
  font-size: 24px;
`;

const number = css`
  font-size: 20px;
`;

const bottom = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: ${VariablesCSS.margin};
`;

const inviteModalContainer = (openAnimation: boolean) => css`
  ${openAnimation && 'animation: smoothshow 0.5s backwards;'}
  ${openAnimation || 'animation: smoothhide 0.5s backwards;'}
`;

const dimmed = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  margin-left: -${VariablesCSS.margin};
  margin-right: -${VariablesCSS.margin};
  background-color: rgba(0, 0, 0, 0.7);
`;

const modalInner = (openAnimation: boolean) => css`
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 95%;
  height: 240px;
  background: linear-gradient(118.95deg, #dfcfeb 0%, #c9abca 100%);
  border: 5px solid #ffffff;
  border-radius: 15px;
  transform: translate(-50%, -50%);
  ${openAnimation && 'animation: smoothupNomargin 0.5s backwards;'}
  ${openAnimation || 'animation: smoothdownNomargin 0.5s backwards;'}
`;

const modalTitle = css`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  font-family: 'WAGURITTF', serif;
  font-size: ${VariablesCSS.title};
  color: ${VariablesCSS.night};
`;

const close = css`
  position: absolute;
  top: 7px;
  right: 10px;
  cursor: pointer;
`;

const inviteShareLinkCss = css`
  display: flex;
  gap: 10px;
  margin: 35px auto 26px;
  padding: 17px 30px;
  font-family: 'Cafe24Ssurround', serif;
  font-size: 18px;
  color: ${VariablesCSS.night};
  border-radius: 15px;
  background-color: rgba(240, 238, 243, 0.5);
  box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
  transition-property: box-shadow transform;
  transition-duration: 0.1s;
  cursor: pointer;

  &:active {
    box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0.5px, 1px);
  }
`;

const inviteCodeContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  font-family: 'Cafe24Ssurround', serif;
  cursor: pointer;

  &:active {
    transform: translate(0.5px, 1px);
  }
`;

const inviteCodeDescription = css`
  color: rgba(77, 61, 77, 0.8);
  font-size: 18px;
`;

const inviteCodeCss = css`
  color: ${VariablesCSS.night};
  font-size: 20px;
`;
