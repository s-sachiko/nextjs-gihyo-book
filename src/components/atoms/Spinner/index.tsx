import * as React from 'react'
import styled, { css } from 'styled-components'

// DOMに渡したくないpropsを制御する関数
const shouldForwardProp = (prop: string) =>
  !['size', 'strokeWidth', 'isAutoCentering'].includes(prop)

type SpinnerProps = {
  size?: number
  strokeWidth?: number
  isAutoCentering?: boolean
}

const StyledSpinner = styled.svg.withConfig({
  shouldForwardProp,
})<{ size: number; isAutoCentering: boolean }>`
  animation: rotate 2s linear infinite;
  ${({ isAutoCentering, size }) =>
    isAutoCentering
      ? css`
          margin: -${size / 2}px 0 0 -${size / 2}px;
        `
      : ``}
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  & .path {
    stroke: #000000;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

/**
 * スピナー
 */
const Spinner = (props: SpinnerProps) => {
  const { size = 50, strokeWidth = 4, isAutoCentering = false } = props

  return (
    <StyledSpinner
      size={size}
      isAutoCentering={isAutoCentering}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="path"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        fill="none"
        strokeWidth={strokeWidth}
      />
    </StyledSpinner>
  )
}

export default Spinner
