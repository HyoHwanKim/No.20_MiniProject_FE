import React from 'react'
import styled from 'styled-components'

const Button = ({ color, children }) => {
  const PropsButton = styled.button`
    ${() => colorHandler(color)};
    width: 90px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      filter: brightness(80%);
    }
  `

  const colorHandler = (color) => {
    switch (color) {
      case 'white':
        return 'background-color: #F2F2F2; border: none;'
      case 'mint':
        return 'background-color: #96F2D7; border: none;'
      default:
        return '';
    }
  }

  return (
    <>
      <PropsButton
      >
        {children}
      </PropsButton>
    </>
  )
}

export default Button