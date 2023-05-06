import styled from "styled-components";

// Main.jsx
export const MainContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  gap: 20px;
  justify-content: center;
  align-items: center;
  
`
export const Box = styled.div`
  border: 0.5px solid black;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;


export const Boximg = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;

`

export const BoxContent = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`

export const BoxFooter = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid var(--border4);
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
`



//Mypage.jsx
export const MypageHeader = styled.div`
  width: 1000px;
  height: 200px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  gap: 10px;
`

export const MypageHeaderImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #ddd;
`

export const MypageHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MypageHeaderLine = styled.div`
  background: black;
  width: 1200px;
  height: 1px;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: block;
  margin: 0 auto;
`

export const MypageContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
  justify-content: center;
  align-items: center;
  
`