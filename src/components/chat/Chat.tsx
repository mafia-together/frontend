/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';

import { roomInfoState } from '../../recoil/roominfo/atom';
import { VariablesCSS } from '../../styles/VariablesCSS';
import { ChatArray } from '../../type';
import { ChatForm } from './ChatForm';
import { Chats } from './Chats';

type PropsType = {
  publishChat: (content: string) => void;
  chats: ChatArray;
  setChats: React.Dispatch<React.SetStateAction<ChatArray>>;
};

export const Chat = ({ publishChat, chats, setChats }: PropsType) => {
  /* 방 정보 */
  const [roomInfo] = useRecoilState(roomInfoState);

  // 내가 살아있는지
  const isAlive = roomInfo?.isAlive;

  return (
    <>
      {/* 채팅목록 */}
      <div css={middle}>
        <Chats chats={chats} setChats={setChats} />
      </div>

      {/* 살아있는 경우에만 input창이 보인다. */}
      {isAlive && <ChatForm publishChat={publishChat} />}
    </>
  );
};

const middle = css`
  height: calc(100% - ${VariablesCSS.top} - 55px - 20px);
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
