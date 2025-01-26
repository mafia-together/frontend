/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Suspense, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { Chat } from '../components/chat/Chat';
import { Loading } from '../components/etc/Loading';
import AppContainerCSS from '../components/layout/AppContainerCSS';
import ModalContainer from '../components/modal/ModalContainer';
import NoticeDead from '../components/modal/NoticeDead';
import NoticeMyJob from '../components/modal/NoticeMyJob';
import ViewJob from '../components/modal/ViewJob';
import Vote from '../components/modal/Vote';
import VoteResult from '../components/modal/VoteResult';
import TopDay from '../components/top/TopDay';
import { gameRound, roomInfoState } from '../recoil/roominfo/atom';
import { VariablesCSS } from '../styles/VariablesCSS';
import { ChatArray, Status } from '../type';

type PropsType = {
  statusType: Status;
  publishChat: (content: string) => void;
  chats: ChatArray;
  setChats: React.Dispatch<React.SetStateAction<ChatArray>>;
};

export default function Day({ statusType, publishChat, chats, setChats }: PropsType) {
  // 라운드 (몇일차)
  const [gameRoundState] = useRecoilState(gameRound);

  /* 방 정보 */
  const [roomInfo] = useRecoilState(roomInfoState);
  // 내가 살아있는지
  const isAlive = roomInfo?.isAlive;

  /* 미리 투표하기 */
  const [voteTarget, setVoteTarget] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const onToggleModal = () => {
    setOpenModal(!openModal);
  };

  /* 투표시간 */
  useEffect(() => {
    // 공지 모달이 뜨는 시간엔 사용자가 켠 모달 끄기
    if (statusType !== 'DAY') {
      setOpenModal(false);
    }
  }, [statusType]);

  /* 투표결과 */
  return (
    <AppContainerCSS background="day">
      <Suspense fallback={<Loading />}>
        {/* INTRO TIME */}
        {statusType === 'DAY_INTRO' ? (
          <>
            <p css={gameMessage}>낮이 되었습니다</p>
          </>
        ) : (
          <div>
            <TopDay
              isAlive={isAlive ? true : false}
              onOpenModal={onToggleModal}
              statusType={statusType}
            />

            <Chat publishChat={publishChat} chats={chats} setChats={setChats} />

            {/* 공지 모달 TIME*/}
            {gameRoundState === 1 ? (
              // 직업공지
              <NoticeMyJob isOpen={statusType === 'NOTICE' && gameRoundState === 1} />
            ) : (
              // 전날밤 사망공지
              <NoticeDead isOpen={statusType === 'NOTICE' && gameRoundState !== 1}></NoticeDead>
            )}

            <ModalContainer isOpen={openModal}>
              {isAlive ? (
                /* 투표모달 */
                <Vote
                  onOpenModal={onToggleModal}
                  voteTarget={voteTarget}
                  setVoteTarget={number => setVoteTarget(number)}
                />
              ) : (
                /* 직업보기모달 */
                <ViewJob onOpenModal={onToggleModal} voteTime={false} />
              )}
            </ModalContainer>

            {/* 투표시간이 되었을 때 */}
            <ModalContainer isOpen={statusType === 'VOTE' && roomInfo.isAlive}>
              <Vote
                timeup={statusType === 'VOTE'}
                voteTarget={voteTarget}
                setVoteTarget={number => setVoteTarget(number)}
              />
            </ModalContainer>

            {/* 죽었는데 투표시간이 되었을 때 */}
            <ModalContainer isOpen={!roomInfo.isAlive && statusType == 'VOTE'}>
              <ViewJob voteTime={statusType == 'VOTE'} />
            </ModalContainer>

            {/* 투표결과 */}
            <ModalContainer isOpen={statusType === 'VOTE_RESULT'}>
              <VoteResult />
            </ModalContainer>
          </div>
        )}
      </Suspense>
    </AppContainerCSS>
  );
}

const gameMessage = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${VariablesCSS.top});
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 24px;
  color: ${VariablesCSS.day};
  animation: smoothshow 0.8s;
`;
