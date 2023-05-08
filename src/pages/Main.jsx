import React from 'react'

import {
  MainContainer,
  Box,
  Boximg,
  BoxContent,
  BoxFooter
} from '../components/styles'
import Header from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Main = () => {
  // const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [boxes, setBoxes] = useState([])

  const fetchBoxes = async () => {
    const { data } = await axios.get('http://localhost:4001/posts')
    console.log('data : ', data)
    setBoxes(data)
  }

  useEffect(() => {
    fetchBoxes()
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        {boxes.map((box) => (
          <Box key={box.userid}>
            <Boximg src="https://velog.velcdn.com/images/heelieben/post/c3dce497-2507-4097-8538-9e3d37cc4933/image.png" />
            <BoxContent>{box.content}</BoxContent>
            <BoxFooter>회원이름 / 좋아요버튼</BoxFooter>
          </Box>
        ))}
      </MainContainer>
    </>
  )
}

export default Main