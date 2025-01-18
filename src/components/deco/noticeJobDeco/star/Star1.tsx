/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star1({ color }: PropsType) {
  return (
    <svg
      css={star1}
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.0025 1.22191C7.75957 -0.172096 9.76051 -0.172094 10.5176 1.22191L12.1762 4.27602C12.2959 4.49633 12.4559 4.69218 12.6479 4.85337L15.8602 7.54981C16.8124 8.34909 16.8124 9.81424 15.8602 10.6135L12.6479 13.31C12.4559 13.4711 12.2959 13.667 12.1762 13.8873L10.5176 16.9414C9.76051 18.3354 7.75957 18.3354 7.0025 16.9414L5.34385 13.8873C5.2242 13.667 5.0642 13.4711 4.87217 13.31L1.65987 10.6135C0.707682 9.81424 0.707682 8.34909 1.65987 7.54981L4.87217 4.85337C5.0642 4.69218 5.2242 4.49633 5.34385 4.27601L7.0025 1.22191Z"
        fill={color}
      />
    </svg>
  );
}

const star1 = css`
  position: absolute;
  left: 6%;
  top: 5%;
  width: 5%;
  animation: starTwinkle 8s infinite linear alternate;
`;
