import styled, { css } from 'styled-components'

import Lottie from 'react-lottie'
import animationData from 'lotties/meat.json'
import { rgba } from 'polished'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 50%;
    transform: translate(-50%, -85%);
    height: 20rem;
    width: 20rem;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Overlay = styled.span`
  ${({ theme }) => css`
    position: fixed;
    inset: 0 0 0 0;
    z-index: ${theme.layers.overlay};

    background-color: ${rgba(theme.colors.black, 0.6)};
  `}
`

export const Animation = styled(Lottie).attrs({
  options: defaultOptions,
  height: 200,
  width: 200
})``
