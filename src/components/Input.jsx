import React, { useCallback } from 'react'
import styled from 'styled-components'


const Input = ({ type, size, onBlur, placeholder }) => {
  const PropsInput = styled.input`
    ${() => sizeHandler(size)};
    height: 45px;
    background-color: #1E1E1E;
    border: 1px solid #4D4D4D;
    border-radius: 3px;
    padding: 0px 10px;
    color: white;
    &:hover {
      border: 1px solid #96F2D7;
    }
    &:focus {
      outline: none;
      border: 1px solid #96F2D7;
    }
  `

  const sizeHandler = (size) => {
    switch (size) {
      case 'small':
        return 'width: 200px; float: left; margin-right: 10px;'
      case 'medium':
        return 'width: 300px;'
      default:
        return '';
    }
  }

  return (
    <>
      <PropsInput
        type={type}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input