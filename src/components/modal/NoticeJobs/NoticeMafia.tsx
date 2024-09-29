/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../../styles/VariablesCSS';

export default function NoticeMafia() {
  return (
    <div css={container}>
      <div css={youareContainer}>
        <p css={youare}>You Are</p>
        <p css={youareBackground}>You Are</p>
        <div css={smallLight}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
        <div css={smallLightTwo}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
        <div css={smallLightThree}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
        <div css={smallLightFour}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
      </div>
      <img src="/assets/img/job/mafia.png" alt="직업" css={job} />
      <img src="/assets/img/deco/light.png" alt="후광" css={backLight} />
      <div css={mafiaContainer}>
        <p css={mafia}>MAFIA</p>
        <p css={mafiaBackground}>MAFIA</p>
        <div css={smallLight}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
        <div css={smallLightSix}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
        <div css={smallLightSeven}>
          <div css={smallLightCore}></div>
          <div css={smallLightSpread}></div>
        </div>
      </div>
      {/* 별들 */}
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
          fill="#8591FE"
        />
      </svg>
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
          fill="white"
        />
      </svg>
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
          fill="#B8B5FF"
        />
      </svg>
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
          fill="#E6CBFF"
        />
      </svg>
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
          fill="#D8BBFD"
        />
      </svg>
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
          fill="#FF41B3"
        />
      </svg>
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
          fill="white"
        />
      </svg>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${VariablesCSS.day};
  height: 100%;
  font-family: 'Baloo-Bhaina';
  background: linear-gradient(158.84deg, #1a63ff 3.43%, #f863fa 96.57%);
  z-index: 1;
`;

const job = css`
  width: 85%;
  max-width: 300px;
  z-index: 2;
`;

// 글자위에 빛들
const smallLight = css`
  position: absolute;
  top: 23px;
  left: 6px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;

const smallLightTwo = css`
  position: absolute;
  top: 42px;
  left: 75px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightThree = css`
  position: absolute;
  top: 24px;
  left: 103px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightFour = css`
  position: absolute;
  top: 31px;
  left: 160px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightSix = css`
  position: absolute;
  top: 24px;
  left: 53px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightSeven = css`
  position: absolute;
  top: 45px;
  left: 74px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;

// 글자 위 빛 점
const smallLightCore = css`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3.41px;
  height: 3.41px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 5;
`;

// 글자 위 빛 번지는 효과
const smallLightSpread = css`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  width: 15.25px;
  height: 15.25px;
  background: rgba(255, 255, 255, 0.7);
  filter: blur(7.5px);
`;

const youareContainer = css`
  position: relative;
  width: 181px;
  text-align: center;
`;

const youare = css`
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
    0px -3px white;
  z-index: 3;
`;

const youareBackground = css`
  position: absolute;
  width: 100%;
  top: 0;
  font-size: 48px;
  background: linear-gradient(180deg, rgba(0, 71, 255, 0.7) 45%, rgba(255, 255, 255, 0.7) 100%);
  color: transparent;
  -webkit-background-clip: text;
  z-index: 3;
`;

const mafiaContainer = css`
  position: relative;
  width: 149px;
  text-align: center;
`;
const mafia = css`
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
const mafiaBackground = css`
  position: absolute;
  width: 100%;
  top: 0;
  font-size: 48px;
  background: #ff48f8;
  color: transparent;
  -webkit-background-clip: text;
  z-index: 3;
`;

const backLight = css`
  @keyframes bigAndSmall {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0.8);
    }
  }

  position: absolute;
  width: 60%;
  height: 60%;

  background: rgba(179, 250, 255, 0.5);
  filter: blur(50px);
  animation: bigAndSmall 1.5s infinite ease-in-out reverse;
  z-index: 1;
`;

const star1 = css`
  @keyframes starAnimation {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.3);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  @keyframes twinkle {
    100% {
      transform: rotateY(360deg);
    }
  }

  position: absolute;
  left: 6%;
  top: 5%;
  width: 5%;
  animation: twinkle 8s infinite linear alternate;
`;
const star2 = css`
  position: absolute;
  left: 20%;
  top: 12%;
  width: 5%;
  animation: starAnimation 3s infinite linear reverse;
`;
const star3 = css`
  position: absolute;
  right: 7%;
  top: 17%;
  width: 7%;
  animation: starAnimation 7s infinite linear;
`;
const star4 = css`
  position: absolute;
  left: 17%;
  bottom: 25%;
  width: 5%;
  animation: twinkle 8s infinite linear alternate;
`;
const star5 = css`
  position: absolute;
  left: 12%;
  bottom: 8%;
  width: 6%;
  animation: starAnimation 5s infinite linear reverse;
`;
const star6 = css`
  position: absolute;
  right: 19%;
  bottom: 18%;
  width: 6.5%;
  animation: twinkle 7s infinite linear alternate;
`;
const star7 = css`
  position: absolute;
  right: 10%;
  bottom: 10%;
  width: 5.5%;
  animation: starAnimation 4s infinite linear reverse;
`;
