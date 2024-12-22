/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef } from 'react';

import { VariablesCSS } from '../../styles/VariablesCSS';
import { Chat } from '../../type';
import PlayerChat from '../player/PlayerChat';
import ChatMessage from './ChatMessage';

interface PropsType {
  chats: Chat[];
}

// eslint-disable-next-line
export default forwardRef(function ChatGroup(props: PropsType, ref: any) {
  const { chats } = props;

  return (
    <div ref={ref} css={container(props)}>
      <PlayerChat job={chats[0].job} />
      <div css={right(props)}>
        <p css={nameText}>{chats[0].name}</p>
        {chats.map(chat => (
          <ChatMessage contents={chat.contents} isOwner={chat.isOwner} key={`${chat.timestamp}`} />
        ))}
      </div>
    </div>
  );
});

const container = (props: PropsType) => css`
  display: flex;
  margin-bottom: 8px;
  gap: 8px;
  ${props.chats[0].isOwner && 'flex-direction: row-reverse;'}

  &:first-of-type {
    margin-top: 20px;
  }
`;

const right = (props: PropsType) => css`
  display: flex;
  align-items: start;
  flex-direction: column;
  flex-grow: 0;

  ${props.chats[0].isOwner && 'align-items: end;'}
`;

const nameText = () => css`
  margin-bottom: 8px;
  font-family: 'Cafe24Ssurround', sans-serif;
  font-size: 14px;
  color: ${VariablesCSS.day};
`;
