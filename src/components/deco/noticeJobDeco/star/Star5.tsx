/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star5({ color }: PropsType) {
  return (
    <svg
      css={star5}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.17505 4.7494C3.12148 1.67337 6.57756 -0.166924 9.09986 1.59455C10.0873 2.28416 11.345 2.46015 12.4839 2.06806C15.3928 1.06657 18.211 3.78482 17.3152 6.728C16.9645 7.88025 17.1857 9.13074 17.9105 10.0927C19.7619 12.5498 18.0476 16.07 14.9716 16.1275C13.7674 16.1501 12.6465 16.7469 11.9556 17.7335C10.1909 20.2536 6.31317 19.711 5.30795 16.8033C4.9144 15.665 4.00038 14.7834 2.84857 14.4312C-0.0934596 13.5316 -0.775698 9.67597 1.67899 7.82144C2.64001 7.09539 3.19602 5.95367 3.17505 4.7494Z"
        fill={color}
      />
    </svg>
  );
}

const star5 = css`
  position: absolute;
  left: 12%;
  bottom: 8%;
  width: 6%;
  animation: starAnimation 5s infinite linear reverse;
`;
