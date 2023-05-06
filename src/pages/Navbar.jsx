import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleClickHandler = () => {
    setToggle(!toggle)
  }

  // TODO
  // 1. 로고 클릭 시 메인화면으로 이동
  // 2. 로그인 했을 경우 & 안했을 경우에 따라 보이는 요소 달라야 함
  // 3. 토글했을 때 어떤 메뉴 보여줄지 & 기능 구현
  // 4. 로그인 하고 나면 이 페이지에서 state 관리해서 뿌려줘야 할듯

  return (
    <HeaderContainer>
      <HeaderContentLeft>
        <HeaderLogo>belog</HeaderLogo>
      </HeaderContentLeft>
      <HeaderContentRight>
        <Button
          shape={'circle'}
        >
          로그인
        </Button>
        <Button
          shape={'circle'}
          color={'transparent'}
        >
          새 글 작성
        </Button>
        <HeaderToggleDiv
          onClick={toggleClickHandler}
        >
          <UserImg
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASbSURBVHgB7Z0tTytBFIYP914BDiQ4cIADB0EhwYFE8ifq7g/hJ2CRSCQ4kOCobF3ruHk3maS5aSnbdnfPOe/7JE0oCTvTnmc+dvbMsNbr9b5M0PLLBDUSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAOX+MhPX1dTs+Prbt7W3b3d21jY2N6ndgPB7bYDCw4XBor6+v9vHxUb1nIL0Ae3t7dn5+XgV9FhABYuC1v79f/Q4SPD8/28vLi2UmrQA/Cfx34O/wwjXu7u7S9gi/z87O/loyELTr62vb2tqyZcFQcXp6Wv2MXiEb6SaBCDwEWDVFqmykEgABOjo6sqbAtbNJkEaAi4uLRoNfQBmXl5eWhRQCIChlnG6Dk5OTVstrkvACYKLXxJg/D5RZ1hEiE14ABGIVs/26IPgZeoHQAiDwbYz7s4AA0XuB0AIsusizKsrycmRCC+Dhyz84OLDIhBUAra/rHgCgDpGHgbAC7OzsmBc81aUuYQXY3Nw0L3iqS13CCtDFrd8sPNWlLsoIIkcCkBNWAE8JGpGTRcIKgPw9L3iqS13CCvD5+Wle8FSXuoQVAJm8HlK0UAfUJSqhJ4Fvb2/WNcgcjkxoAfDld936oieKhhYAwX96erKuwJ6B6Oni4dcBIEAXvQAC//j4aNEJLwCC30UgUGaGzSIpVgLRC7Q5FKCsLFvG0iwFPzw8tBIUlIGyspDqWcD9/X2jEuDaKCMT6R4GIUBNzAlwzWzBByl3ByNYaK23t7dLP6vHfT6u9/7+bhlZ6/V6X5YYpI0jebRu/mD2wBfSHxCBngAv9ASQ4PDwsErhwvvJE0JGo1EV9H6/72KFsS1SCDAZyFngnh2vVUwSUV4WQUILULZnlR06aMGYqDW1QDN56khZho6+Ghh2DoBgXF1dTZ3koZWvcqWubECdtg0NZUQ+QiakAGjxOA9gHhABj4wXeWyMHgX5/j85Zwi9AXoeD4+n6xJOAASk7nbwkjyCGT0meXg/mcWDYOMsIJwShtaO3mWRHT/odaINCaHmAIsEHyCQOP6tHAHXFKVukSQIsxK4aPDbBnWMdG5ACAHwhUYIfgHzEwwjEXAvQFdHwCzLzc1NiC1jrgXA2I31/Ijbr1HnCEfKuRagq/N/VgXuJLzPB9wKgMBnOITJu8RuBUDXnwHvQ4FLAbDkGrnr/x8MBV7vClwKEHHWPw+vn8mdANlaf8FrL+BOgIytv+Dxs7kSAC0kY+sveOwFXAnQ5bGvbdH0A6m6uBLAw8GPTePtaFk3AmTv/gtYF/A0DLgRgKH1Fzx9VjcCIBuHBU89nRsBkKrFgqfNJm5SwpBGVc7fz/CvWKZRUsk9bS1PvzVMfI+OiiVHApAjAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIkQDkSAByJAA5EoAcCUCOBCBHApAjAciRAORIAHIkADkSgBwJQI4EIOcfGjV2tEfztqEAAAAASUVORK5CYII="
            alt=""
          />
          <SetFontAwesome icon={faCaretDown} />
        </HeaderToggleDiv>
        {
          toggle &&
          <HeaderUl>
            <HeaderLi>내 비로그</HeaderLi>
            <HeaderLi>프로필 설정</HeaderLi>
            <HeaderLi>로그아웃</HeaderLi>
          </HeaderUl>
        }
      </HeaderContentRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.nav`
  background-color: #121212;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const HeaderContentLeft = styled.div`
  width: 10%;
`

const HeaderLogo = styled.p`
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  color: white;
  font-family: 'Source Code Pro', monospace;
`

const HeaderContentRight = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`

const HeaderToggleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

const SetFontAwesome = styled(FontAwesomeIcon)`
  color: white;
`

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const HeaderUl = styled.ul`
  position: fixed;
  background-color: #1E1E1E;
  color: white;
  top: 65px;
  right: 85px;
  border-radius: 3px;
  cursor: pointer;
  z-index: 1;
`

const HeaderLi = styled.li`
  width: 160px;
  height: 25px;
  padding: 10px 0 10px 30px;
`