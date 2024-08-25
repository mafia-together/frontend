/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { VariablesCSS } from '../../styles/VariablesCSS';

type PropsType = {
  isOpen: boolean;
  children: JSX.Element;
};

export default function ModalContainer(props: PropsType) {
  const { isOpen, children } = props;
  const [isOpened, setIsOpened] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsOpened(isOpen);
    } else {
      setTimeout(() => {
        setIsOpened(isOpen);
      }, 450);
    }
  }, [isOpen]);

  return (
    isOpened && (
      <div css={modal(props)}>
        <div css={dimmed}></div>
        <div css={container(props)}>{children}</div>
      </div>
    )
  );
}

const modal = (props: PropsType) => css`
  position: absolute;
  width: calc(100% + ${VariablesCSS.margin} + ${VariablesCSS.margin});
  left: 0;
  top: 0;
  ${props.isOpen && 'animation: smoothshow 0.5s backwards;'}
  ${props.isOpen || 'animation: smoothhide 0.5s backwards;'}
`;

const dimmed = () => css`
  margin-left: -${VariablesCSS.margin};
  margin-right: -${VariablesCSS.margin};
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background-color: rgba(0, 0, 0, 0.7);
`;

const container = (props: PropsType) => css`
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 92%;
  height: 70%;
  background-color: #ffffff;
  background: linear-gradient(152.82deg, #fbf1ff 0%, #fbf1ff 0%, #dae0ea 0.01%, #ddd5dd 100%);
  border: 5px solid #ffffff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  transform: translate(calc(-50% - ${VariablesCSS.margin}), -50%);
  ${props.isOpen && 'animation: smoothup 0.5s backwards;'}
  ${props.isOpen || 'animation: smoothdown 0.5s backwards;'}
`;
