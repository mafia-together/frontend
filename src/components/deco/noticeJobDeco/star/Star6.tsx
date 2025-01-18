/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star6({ color }: PropsType) {
  return (
    <svg
      css={star6}
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.26247 1.35497C10.0195 -0.0390379 12.0205 -0.0390372 12.7775 1.35497L15.6072 6.56536C15.7269 6.78568 15.8869 6.98153 16.0789 7.14272L21.0256 11.2951C21.9778 12.0943 21.9778 13.5595 21.0256 14.3588L16.0789 18.5111C15.8869 18.6723 15.7269 18.8681 15.6072 19.0884L12.7775 24.2988C12.0205 25.6928 10.0195 25.6928 9.26247 24.2988L6.43277 19.0884C6.31312 18.8681 6.15311 18.6723 5.96109 18.5111L1.01437 14.3588C0.0621732 13.5595 0.0621742 12.0943 1.01437 11.2951L5.96109 7.14272C6.15311 6.98153 6.31312 6.78568 6.43277 6.56536L9.26247 1.35497Z"
        fill={color}
      />
    </svg>
  );
}

const star6 = css`
  position: absolute;
  right: 8%;
  bottom: 18%;
  width: 6.5%;
  animation: starTwinkle 7s infinite linear alternate;
`;
