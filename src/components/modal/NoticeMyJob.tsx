/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import { myJobState } from '../../recoil/roominfo/atom';
import { VariablesCSS } from '../../styles/VariablesCSS';
import Star1 from '../deco/noticeJobDeco/star/Star1';
import Star2 from '../deco/noticeJobDeco/star/Star2';
import Star3 from '../deco/noticeJobDeco/star/Star3';
import Star4 from '../deco/noticeJobDeco/star/Star4';
import Star5 from '../deco/noticeJobDeco/star/Star5';
import Star6 from '../deco/noticeJobDeco/star/Star6';
import Star7 from '../deco/noticeJobDeco/star/Star7';
import NoticeText from '../deco/noticeJobDeco/text/NoticeText';
import ModalContainer from './ModalContainer';


type PropsType = {
  isOpen: boolean;
};

const jobBackground = {
  MAFIA: VariablesCSS.noticeJobBackgroundMafia,
  CITIZEN: VariablesCSS.noticeJobBackgroundCitizen,
  POLICE: VariablesCSS.noticeJobBackgroundPolice,
  DOCTOR: VariablesCSS.noticeJobBackgroundDoctor,
};

const colors = {
  MAFIA: {
    star1: '#8591FE',
    star2: '#FFFFFF',
    star3: '#B8B5FF',
    star4: '#E6CBFF',
    star5: '#D8BBFD',
    star6: '#FF41B3',
    star7: '#FFFFFF',
    textYouAreBackgroundColor:
      ' linear-gradient(180deg, rgba(0, 71, 255, 0.7) 45%, rgba(255, 255, 255, 0.7) 100%)',
    textYouAreShadowColor1: 'rgba(255, 85, 187, 0.61)',
    textYouAreShadowColor2: 'rgba(171, 0, 133, 0.2)',
    textMyJobBackgroundColor: '#ff48f8',
  },
  CITIZEN: {
    star1: '#FFF741',
    star2: '#FFFFFF',
    star3: '#FFEFB5',
    star4: '#FFFACB',
    star5: '#FFFFFF',
    star6: '#D8BBFD',
    star7: '#FFFFFF',
    textYouAreBackgroundColor:
      'linear-gradient(180deg, rgba(255, 61, 0, 0.7) 45%, rgba(255, 255, 255, 0.7) 100%)',
    textYouAreShadowColor1: 'rgba(255, 147, 47, 0.61)',
    textYouAreShadowColor2: 'rgba(255, 214, 0, 0.2)',
    textMyJobBackgroundColor: ' linear-gradient(0.09deg, #FFE248 50%, #FFFFFF 99.92%)',
  },
  POLICE: {
    star1: '#85A1FE',
    star2: '#FFFFFF',
    star3: '#B5D2FF',
    star4: '#B8E1FF',
    star5: '#A6CCFF',
    star6: '#FFFFFF',
    star7: '#FFFFFF',
    textYouAreBackgroundColor:
      'linear-gradient(180deg, rgba(0, 71, 255, 0.7) 45%, rgba(255, 255, 255, 0.7) 100%)',
    textYouAreShadowColor1: 'rgba(85, 108, 255, 0.61)',
    textYouAreShadowColor2: 'rgba(0, 29, 171, 0.2)',
    textMyJobBackgroundColor: '#0022FF',
  },
  DOCTOR: {
    star1: '#FFFFFF',
    star2: '#FFFFFF',
    star3: '#FFFFFF',
    star4: '#FFF8E9',
    star5: '#FFFFFF',
    star6: '#FFFFFF',
    star7: '#FFFFFF',
    textYouAreBackgroundColor: '#FF614D',
    textYouAreShadowColor1: 'rgba(255, 220, 207, 0.61)',
    textYouAreShadowColor2: 'rgba(255, 226, 216, 0.2)',
    textMyJobBackgroundColor: '#FF614D',
  },
};

export default function NoticeMyJob({ isOpen }: PropsType) {
  const myJob = useRecoilValue(myJobState);

  const jobPath = `/assets/img/job/${myJob?.toLowerCase()}.png`;

  const colorForJob = colors[myJob || 'CITIZEN'];


  return (
    <ModalContainer isOpen={isOpen}>
      <div css={container(jobBackground[myJob || 'CITIZEN'])}>
        <NoticeText text={'You Are'} textBackgroundColor={colorForJob.textYouAreBackgroundColor} />
        <img src={jobPath} alt="직업" css={job} />
        <img src="/assets/img/deco/light.png" alt="후광" css={backLight} />
        <NoticeText text={myJob} textBackgroundColor={colorForJob.textMyJobBackgroundColor} />
        {/* 별들 */}
        <Star1 color={colorForJob.star1} />
        <Star2 color={colorForJob.star2} />
        <Star3 color={colorForJob.star3} />
        <Star4 color={colorForJob.star4} />
        <Star5 color={colorForJob.star5} />
        <Star6 color={colorForJob.star6} />
        <Star7 color={colorForJob.star7} />
      </div>
    </ModalContainer>
  );
}

const container = (backgroundColor: string) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${VariablesCSS.day};
  height: 100%;
  font-family: 'Baloo-Bhaina';
  background: ${backgroundColor};
  z-index: 1;
`;

const job = css`
  width: 85%;
  max-width: 300px;
  z-index: 2;
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
