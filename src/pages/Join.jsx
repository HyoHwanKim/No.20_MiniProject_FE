import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import LabelText from '../components/LabelText'

const Join = () => {
  const [form, setForm] = useState({
    nickname: '',
    password: '',
    passwordCheck: '',
    email: '',
    github: '',
    description: '',
  })

  return (
    <FormDiv>
      <InfoH1>회원가입</InfoH1>
      <form>
        <label>
          <Input
            size={'small'}
            value={form.nickname}
            placeholder={'아이디를 입력하세요.'}
          />
        </label>
        <Button color={'mint'}>중복확인</Button>
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
        <label>
          <Input
            type={'password'}
            size={'medium'}
            value={form.passwordCheck}
            placeholder={'비밀번호를 다시 입력해주세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>
        <label>
          <Input
            size={'medium'}
            value={form.email}
            placeholder={'이메일을 입력해주세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>
        <label>
          <Input
            size={'medium'}
            value={form.github}
            placeholder={'GitHub 아이디를 입력해주세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>
        <label>
          <Input
            size={'medium'}
            value={form.description}
            placeholder={'간단한 블로그 소개를 입력해주세요.'}
          />
        </label>
        <LabelText>안내 문자열 내려주기</LabelText>
        <ButtonDiv>
          <Button
            type={'reset'}
            color={'white'}
          >
            초기화
          </Button>
          <Button
            color={'mint'}
          >
            회원가입
          </Button>
        </ButtonDiv>
      </form>
    </FormDiv>
  )
}

export default Join

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InfoH1 = styled.p`
  color: white;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
`

const ButtonDiv = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 10px;
`