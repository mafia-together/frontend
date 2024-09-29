/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { VariablesCSS } from '../../../styles/VariablesCSS';

export default function NoticeCitizen() {
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
      <img src="/assets/img/job/citizen.png" alt="직업" css={job} />
      <img src="/assets/img/deco/light.png" alt="후광" css={backLight} />
      <div css={citizenContainer}>
        <p css={citizen}>CITIZEN</p>
        <p css={citizenBackground}>CITIZEN</p>
        <div css={smallLightFive}>
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
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.04023 3.60452C3.11815 1.0781 6.5141 -0.730179 8.09559 1.44512C8.86793 2.50744 10.3674 2.71725 11.4016 1.90773C13.5195 0.250066 16.2886 2.92102 14.7085 5.09731C13.9369 6.16012 14.2007 7.65101 15.2902 8.38449C17.5211 9.88643 15.8366 13.3454 13.2786 12.5152C12.0293 12.1097 10.6929 12.8213 10.332 14.0842C9.59302 16.6701 5.78276 16.1369 5.78191 13.4475C5.78149 12.1341 4.69174 11.083 3.37918 11.13C0.691473 11.2262 0.0211032 7.43768 2.57864 6.60579C3.82763 6.19954 4.49053 4.83832 4.04023 3.60452Z"
          fill="white"
        />
      </svg>
      <svg
        css={star2}
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.35744 1.21935C10.1145 -0.174658 12.1154 -0.174657 12.8725 1.21935L15.7022 6.42974C15.8219 6.65006 15.9819 6.84591 16.1739 7.0071L21.1206 11.1594C22.0728 11.9587 22.0728 13.4239 21.1206 14.2231L16.1739 18.3755C15.9819 18.5367 15.8219 18.7325 15.7022 18.9528L12.8725 24.1632C12.1154 25.5572 10.1145 25.5572 9.35744 24.1632L6.52774 18.9528C6.40809 18.7325 6.24808 18.5367 6.05606 18.3755L1.10934 14.2231C0.157144 13.4239 0.157145 11.9587 1.10934 11.1594L6.05606 7.0071C6.24808 6.84591 6.40809 6.65005 6.52774 6.42974L9.35744 1.21935Z"
          fill="#FFF741"
        />
      </svg>
      <svg
        css={star3}
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.8277 1.83153C7.58476 0.437523 9.5857 0.437526 10.3428 1.83153L12.0014 4.88563C12.1211 5.10595 12.2811 5.3018 12.4731 5.46299L15.6854 8.15943C16.6376 8.95871 16.6376 10.4239 15.6854 11.2231L12.4731 13.9196C12.2811 14.0808 12.1211 14.2766 12.0014 14.4969L10.3428 17.551C9.5857 18.945 7.58476 18.945 6.8277 17.551L5.16905 14.4969C5.0494 14.2766 4.88939 14.0808 4.69737 13.9196L1.48507 11.2231C0.532877 10.4239 0.532877 8.95871 1.48507 8.15943L4.69737 5.46299C4.88939 5.3018 5.0494 5.10595 5.16905 4.88563L6.8277 1.83153Z"
          fill="#FECE85"
        />
      </svg>
      <svg
        css={star4}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.23114 4.17029C5.17428 0.904866 8.84316 -1.04875 11.5208 0.821183L12.7695 1.69324C13.8178 2.42532 15.1529 2.61214 16.3619 2.19591L17.802 1.7001C20.89 0.636943 23.8818 3.52256 22.9308 6.64696L22.4873 8.10405C22.115 9.32725 22.3499 10.6547 23.1193 11.6759L24.0359 12.8923C26.0012 15.5007 24.1814 19.2377 20.916 19.2988L19.3932 19.3273C18.1148 19.3512 16.9249 19.9848 16.1915 21.0321L15.3178 22.2797C13.4444 24.9549 9.32794 24.3789 8.26082 21.2923L7.76317 19.8528C7.34539 18.6443 6.37508 17.7084 5.15235 17.3346L3.69583 16.8892C0.572657 15.9342 -0.151593 11.8412 2.45424 9.87248L3.6695 8.95435C4.68968 8.18359 5.27993 6.97157 5.25766 5.69315L5.23114 4.17029Z"
          fill="#FFEFB5"
        />
      </svg>
      <svg
        css={star5}
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.17505 4.31263C3.12148 1.23661 6.57756 -0.603692 9.09986 1.15778C10.0873 1.8474 11.345 2.02338 12.4839 1.63129C15.3928 0.629802 18.211 3.34805 17.3152 6.29123C16.9645 7.44349 17.1857 8.69397 17.9105 9.65592C19.7619 12.113 18.0476 15.6333 14.9716 15.6908C13.7674 15.7133 12.6465 16.3101 11.9556 17.2968C10.1909 19.8168 6.31317 19.2742 5.30795 16.3666C4.9144 15.2282 4.00038 14.3466 2.84857 13.9944C-0.0934596 13.0948 -0.775698 9.2392 1.67899 7.38467C2.64001 6.65862 3.19602 5.5169 3.17505 4.31263Z"
          fill="#FDDBBB"
        />
      </svg>

      <svg
        css={star6}
        width="17"
        height="19"
        viewBox="0 0 17 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.77301 1.80052C7.53008 0.406517 9.53102 0.40652 10.2881 1.80052L11.9467 4.85463C12.0664 5.07494 12.2264 5.2708 12.4184 5.43198L15.6307 8.12842C16.5829 8.92771 16.5829 10.3929 15.6307 11.1921L12.4184 13.8886C12.2264 14.0498 12.0664 14.2456 11.9467 14.4659L10.2881 17.52C9.53101 18.914 7.53008 18.914 6.77301 17.52L5.11436 14.4659C4.99471 14.2456 4.8347 14.0498 4.64268 13.8886L1.43038 11.1921C0.47819 10.3929 0.47819 8.92771 1.43038 8.12842L4.64268 5.43198C4.8347 5.2708 4.99471 5.07494 5.11436 4.85463L6.77301 1.80052Z"
          fill="#FFFACB"
        />
      </svg>
      <svg
        css={star7}
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.57495 4.23658C3.52138 1.16056 6.97746 -0.679741 9.49977 1.08173C10.4873 1.77135 11.7449 1.94733 12.8838 1.55524C15.7927 0.553752 18.6109 3.272 17.7151 6.21518C17.3644 7.36744 17.5856 8.61792 18.3104 9.57987C20.1618 12.0369 18.4475 15.5572 15.3715 15.6147C14.1673 15.6372 13.0464 16.2341 12.3555 17.2207C10.5908 19.7407 6.71307 19.1981 5.70785 16.2905C5.31431 15.1522 4.40028 14.2706 3.24847 13.9184C0.306443 13.0188 -0.375796 9.16315 2.0789 7.30862C3.03991 6.58257 3.59592 5.44085 3.57495 4.23658Z"
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
  background: linear-gradient(158.84deg, #fff46f 3.43%, #f28d26 96.57%);
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

const smallLightFive = css`
  position: absolute;
  top: 24px;
  left: 22px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightSix = css`
  position: absolute;
  top: 45px;
  left: 89px;
  width: 15.25px;
  height: 15.25px;
  border-radius: 100%;
  z-index: 5;
`;
const smallLightSeven = css`
  position: absolute;
  top: 24px;
  left: 162px;
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
  background: linear-gradient(180deg, rgba(254, 104, 26, 0.7) 45%, rgba(255, 255, 255, 0.7) 100%);
  color: transparent;
  -webkit-background-clip: text;
  z-index: 3;
`;

const citizenContainer = css`
  position: relative;
  width: 184px;
  text-align: center;
`;

const citizen = css`
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
    2px 2px 10px rgba(255, 147, 47, 0.61),
    0px 2px 2px rgba(255, 214, 0, 0.2);
  z-index: 3;
`;
const citizenBackground = css`
  position: absolute;
  width: 100%;
  top: 0;
  font-size: 48px;

  background: #ffe249;
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

  background: rgba(251, 255, 208, 0.8);
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
  left: 7%;
  top: 20%;
  width: 4%;
  animation: starAnimation 3s infinite linear reverse;
`;
const star2 = css`
  position: absolute;
  left: 34%;
  top: 4%;
  width: 7%;
  animation: twinkle 8s infinite linear alternate;
`;
const star3 = css`
  position: absolute;
  right: 35%;
  top: 4%;
  width: 7%;
  animation: twinkle 8s infinite linear alternate;
`;
const star4 = css`
  position: absolute;
  right: 5%;
  top: 11%;
  width: 7%;
  animation: starAnimation 5s infinite linear;
`;

const star5 = css`
  position: absolute;
  left: 16%;
  bottom: 9%;
  width: 6%;
  animation: starAnimation 5s infinite linear;
`;
const star6 = css`
  position: absolute;
  left: 20%;
  bottom: 27%;
  width: 6.5%;
  animation: twinkle 7s infinite linear alternate;
`;
const star7 = css`
  position: absolute;
  right: 11%;
  bottom: 13%;
  width: 5%;
  animation: starAnimation 4s infinite linear reverse;
`;
