import React from 'react'

import {
  MypageHeader,
  MypageHeaderImg,
  MypageHeaderTextContainer,
  MypageHeaderLine,
  Box,
  Boximg,
  BoxContent,
  BoxFooter,
  MypageContainer
} from '../components/styles'
import Header from './Navbar'
import { useLocation, useNavigate } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function Mypage() {


  const location = useLocation()
  const myProfileInfo = location.state.loginInfo

  const [myBoxes, setmyBoxes] = useState([])

  const myBox = async () => {
    try {
      const { data } = await axios.get(`http://3.34.52.229/api/posts/${myProfileInfo.nickname}`)
      setmyBoxes(data.posts)
      console.log("마이페이지 데이터 : ", data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    myBox()
  }, [])

  const navigate = useNavigate()

  const openDetail = async (postId) => {

    try {
      const response = await axios.get(`http://3.34.52.229/api/posts/${postId}`)
      const post = response.data;
      navigate(`/detail/${postId}`, { state: { post } })
      console.log('클릭 시 데이터:', post)
    } catch (error) {
      console.error('API 호출 에러:', error)
    }
  }

  return (
    <div>
      <Header />
      <MypageHeader>
        <MypageHeaderImg src={myProfileInfo.userImage} alt="" />
        <MypageHeaderTextContainer>
          <h2>{myProfileInfo.nickname}</h2>
          <span>{myProfileInfo.description}</span>
        </MypageHeaderTextContainer>
      </MypageHeader>
      <MypageHeaderLine />

      <MypageContainer>
        {myBoxes.map((box) => (
          <Box key={box} onClick={() => openDetail(box.postId)}>
            <Boximg src="https://velog.velcdn.com/images/heelieben/post/c3dce497-2507-4097-8538-9e3d37cc4933/image.png" />
            <BoxContent>{box.title}</BoxContent>
            <BoxFooter>생성일자[{box.createdAt}] - 작성자 : {box.nickname}</BoxFooter>
          </Box>
        ))}
      </MypageContainer>

    </div>
  )
}
export default Mypage