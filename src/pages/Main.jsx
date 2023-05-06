import React from 'react'

import {
  MainContainer,
  Box,
  Boximg,
  BoxContent,
  BoxFooter
} from '../components/styles'


const Main = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <MainContainer>
        {boxes.map((box) => (
          <Box key={box}>
            <Boximg src="https://velog.velcdn.com/images/heelieben/post/c3dce497-2507-4097-8538-9e3d37cc4933/image.png" />
            <BoxContent>컨텐트 내용이 들어갑니다.</BoxContent>
            <BoxFooter>회원이름 / 좋아요버튼</BoxFooter>
          </Box>
        ))}
      </MainContainer>
    </>
  )
}

export default Main