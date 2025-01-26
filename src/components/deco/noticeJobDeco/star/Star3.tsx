/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star3({ color }: PropsType) {
  return (
    <svg
      css={star3}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.96161 4.49097C4.90475 1.22554 8.57363 -0.728068 11.2512 1.14186L12.5 2.01392C13.5483 2.746 14.8834 2.93282 16.0923 2.51659L17.5324 2.02078C20.6205 0.957622 23.6122 3.84324 22.6612 6.96764L22.2177 8.42473C21.8454 9.64793 22.0803 10.9754 22.8498 11.9966L23.7663 13.213C25.7317 15.8214 23.9118 19.5584 20.6465 19.6195L19.1237 19.6479C17.8453 19.6718 16.6553 20.3054 15.9219 21.3528L15.0483 22.6004C13.1749 25.2756 9.05841 24.6996 7.99129 21.6129L7.49364 20.1734C7.07586 18.965 6.10555 18.0291 4.88282 17.6552L3.4263 17.2099C0.303126 16.2549 -0.421124 12.1619 2.18471 10.1932L3.39996 9.27503C4.42015 8.50427 5.0104 7.29224 4.98813 6.01383L4.96161 4.49097Z"
        fill={color}
      />
    </svg>
  );
}

const star3 = css`
  position: absolute;
  right: 7%;
  top: 17%;
  width: 7%;
  animation: starAnimation 7s infinite linear;
`;
