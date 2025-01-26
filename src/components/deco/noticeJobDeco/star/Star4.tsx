/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star4({ color }: PropsType) {
  return (
    <svg
      css={star4}
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.77301 1.80052C7.53008 0.406517 9.53102 0.40652 10.2881 1.80052L11.9467 4.85463C12.0664 5.07494 12.2264 5.2708 12.4184 5.43198L15.6307 8.12842C16.5829 8.92771 16.5829 10.3929 15.6307 11.1921L12.4184 13.8886C12.2264 14.0498 12.0664 14.2456 11.9467 14.4659L10.2881 17.52C9.53101 18.914 7.53008 18.914 6.77301 17.52L5.11436 14.4659C4.99471 14.2456 4.8347 14.0498 4.64268 13.8886L1.43038 11.1921C0.47819 10.3929 0.47819 8.92771 1.43038 8.12842L4.64268 5.43198C4.8347 5.2708 4.99471 5.07494 5.11436 4.85463L6.77301 1.80052Z"
        fill={color}
      />
    </svg>
  );
}

const star4 = css`
  position: absolute;
  left: 17%;
  bottom: 25%;
  width: 5%;
  animation: starTwinkle 8s infinite linear alternate;
`;
