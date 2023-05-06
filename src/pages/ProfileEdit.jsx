import React, { useState } from 'react'
import { MypageHeaderImg } from '../components/styles'
import styled from 'styled-components'

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
`

const ProfileImg = styled.div`
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
`

const ProfileContainerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProfileContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ProfileContainerBodyMenu = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #444444;
    margin-bottom: 12px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }
`




function ProfileEdit() {
  const [image, setImage] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
    console.log(file)
  }

  const handleImageRemove = () => {
    setImage(null)
  }

  return (
    <>
      <ProfileContainer>
        <ProfileContainerHeader>
          <ProfileImg>
            <MypageHeaderImg src={image} alt="Profile" />
            <input type="file" onChange={handleImageUpload} />
            <button onClick={handleImageRemove}>이미지 제거</button>
          </ProfileImg>
          <div>
            <h1>내 이름</h1>
            <span>한줄 자기 소개</span>
          </div>
        </ProfileContainerHeader>

        <ProfileContainerBody>
          <ProfileContainerBodyMenu>
            <div>
              <h2>내 벨로그 제목</h2>
              <p>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</p>
            </div>
            <button>수정</button>
          </ProfileContainerBodyMenu>

          <ProfileContainerBodyMenu>
            <div>
              <h2>내 이메일 주소</h2>
              <p>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</p>
            </div>
            <button>수정</button>
          </ProfileContainerBodyMenu>

          <ProfileContainerBodyMenu>
            <div>
              <h2>내 github 주소</h2>
              <p>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</p>
            </div>
            <button>수정</button>
          </ProfileContainerBodyMenu>
        </ProfileContainerBody>
      </ProfileContainer>
    </>
  )
}

export default ProfileEdit

