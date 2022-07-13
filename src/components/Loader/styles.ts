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
  position: fixed;
  inset: 50%;
  transform: translate(-50%, -85%);
  height: 20rem;
  width: 20rem;
`

export const Overlay = styled.span`
  ${({ theme }) => css`
    position: fixed;
    inset: 0 0 0 0;
    background-color: ${rgba(theme.colors.black, 0.6)};
  `}
`

export const Animation = styled(Lottie).attrs({
  options: defaultOptions,
  height: 200,
  width: 200
})``
