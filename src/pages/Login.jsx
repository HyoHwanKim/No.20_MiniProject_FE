import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import LabelText from '../components/LabelText'

const Login = () => {
  const [form, setForm] = useState({
    nickname: '',
    password: '',
  })

  return (
    <FormDiv>
      <InfoH3>로그인</InfoH3>
      <form>
        <label>
          <Input
            size={'medium'}
            value={form.nickname}
            placeholder={'아이디를 입력하세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>
        <label>
          <Input
            type={'password'}
            size={'medium'}
            value={form.password}
            placeholder={'비밀번호를 입력하세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>

        <ButtonDiv>
          <Button
            type={'reset'}
            color={'white'}
          >
            회원가입
          </Button>
          <Button
            color={'mint'}
          >
            로그인
          </Button>
        </ButtonDiv>
      </form>
    </FormDiv>
  )
}

export default Login

const FormDiv = styled.div`
  display: flex;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoH3 = styled.h3`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ButtonDiv = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 10px;
`