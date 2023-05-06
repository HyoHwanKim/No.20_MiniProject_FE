import React from 'react'
import styled from 'styled-components'

const LabelText = ({ children }) => {
  return <Label>{children}</Label>
}

export default LabelText

const Label = styled.p`
  margin-top: 3px;
  margin-bottom: 10px;
  font-size: 13px;
  color: red;
`