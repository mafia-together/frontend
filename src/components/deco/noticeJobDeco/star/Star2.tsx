/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star2({ color }: PropsType) {
  return (
    <svg
      css={star2}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.90229 3.45532C2.98021 0.9289 6.37616 -0.879379 7.95766 1.29592C8.72999 2.35824 10.2294 2.56805 11.2637 1.75852C13.3815 0.100866 16.1507 2.77182 14.5706 4.94811C13.7989 6.01092 14.0627 7.50181 15.1522 8.23529C17.3832 9.73723 15.6987 13.1962 13.1406 12.366C11.8914 11.9605 10.555 12.6721 10.1941 13.935C9.45508 16.5209 5.64482 15.9877 5.64397 13.2983C5.64355 11.9849 4.5538 10.9338 3.24124 10.9808C0.553533 11.077 -0.116836 7.28848 2.4407 6.45659C3.68969 6.05034 4.35259 4.68912 3.90229 3.45532Z"
        fill={color}
      />
    </svg>
  );
}
const star2 = css`
  position: absolute;
  left: 18%;
  top: 12%;
  width: 5%;
  animation: starAnimation 3s infinite linear reverse;
`;
