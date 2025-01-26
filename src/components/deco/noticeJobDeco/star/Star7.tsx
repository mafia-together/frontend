/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type PropsType = {
  color: string;
};

export default function Star7({ color }: PropsType) {
  return (
    <svg
      css={star7}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75512 4.49293C3.70155 1.4169 7.15764 -0.423394 9.67994 1.33808C10.6674 2.02769 11.9251 2.20368 13.0639 1.81159C15.9729 0.8101 18.7911 3.52835 17.8952 6.47153C17.5445 7.62378 17.7658 8.87427 18.4906 9.83622C20.342 12.2933 18.6277 15.8136 15.5517 15.8711C14.3475 15.8936 13.2266 16.4904 12.5357 17.477C10.771 19.9971 6.89325 19.4545 5.88803 16.5469C5.49448 15.4085 4.58045 14.5269 3.42865 14.1747C0.486619 13.2751 -0.19562 9.4195 2.25907 7.56497C3.22009 6.83892 3.7761 5.6972 3.75512 4.49293Z"
        fill={color}
      />
    </svg>
  );
}

const star7 = css`
  position: absolute;
  right: 10%;
  bottom: 10%;
  width: 5.5%;
  animation: starAnimation 4s infinite linear reverse;
`;
