import React, { useState, useCallback } from "react";
import { styled, keyframes, css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../store/action/userAction";
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((store) => store.userReduer);
  const navigate = useNavigate();
  const dispach = useDispatch();
  const toggleMenu = useCallback(
    (e) => {
      setIsMenu(!isMenu);
    },
    [isMenu]
  );
  const mvHome = () => {
    navigate(`/`);
    toggleMenu();
  };
  const logout = useCallback(() => {
    dispach(deleteUser());
    toggleMenu();
  }, [dispach, toggleMenu]);

  return (
    <HeaderWrap>
      <Logo onClick={mvHome}>
        <img src="assets/image/handshake_FILL0_wght200_GRAD200_opsz48.svg" height="100%" alt="" />
        Hands
      </Logo>
      <img
        src="assets/image/menu_FILL0_wght700_GRAD0_opsz48.svg"
        height="100%"
        alt=""
        onClick={toggleMenu}
      />
      <Menu visible={isMenu + ""}>
        <BtnClose onClick={toggleMenu}>X</BtnClose>
        <div>
          <MenuItem onClick={mvHome}>🏠홈화면</MenuItem>
          {user ? (
            <div>
              <MenuItem>😐프로필</MenuItem>
              <MenuItem onClick={logout}>📲로그아웃</MenuItem>
              <MenuItem>❌회원탈퇴</MenuItem>
            </div>
          ) : null}
          <MenuItem>❓도움말</MenuItem>
        </div>
      </Menu>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;

// animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%)
  }
  100% {
    opacity: 1;
    transform: translateX(0)
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0)
  }
  100% {
    opacity: 0;
    transform: translateX(100%)
  }
`;

const animationSetting = (visible) => css`
  visibility: ${visible === "true" ? "visible" : "hidden"};
  animation: ${visible === "true" ? fadeIn : fadeOut} 0.5s ease-out;
  transition: visibility 0.5s ease-out;
`;

const Menu = styled.div`
  z-index: 3;
  position: fixed;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: #fff;
  ${(props) => animationSetting(props.visible)}
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
`;

const BtnClose = styled.button`
  font-size: 1.5rem;
  border: 0;
  background-color: transparent;
`;

const MenuItem = styled.div`
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #000;
`;

export default Header;
