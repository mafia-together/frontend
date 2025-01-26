/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  text: string | null;
  textBackgroundColor: string;
};

export default function NoticeText({ text, textBackgroundColor }: PropsType) {
  return (
    <div css={textContainer}>
      <p css={realText}>{text}</p>
      <p css={textBackground(textBackgroundColor)}>{text}</p>
    </div>
  );
}

const textContainer = css`
  position: relative;
  width: 100%;
  text-align: center;
`;
const realText = css`
  position: relative;
  width: 100%;
  top: 0;
  font-size: 48px;
  color: transparent;
  -webkit-background-clip: text;
  text-shadow:
    -3px 0px white,
    0px 3px white,
    3px 0px white,
    0px -3px white,
    2px 2px 10px rgba(255, 85, 187, 0.61),
    0px 2px 2px rgba(171, 0, 133, 0.2);

  z-index: 3;
`;
const textBackground = (textBackgroundColor: string) => css`
  position: absolute;
  width: 100%;
  top: 0;
  font-size: 48px;
  background: ${textBackgroundColor};
  color: transparent;
  -webkit-background-clip: text;
  z-index: 3;
`;
