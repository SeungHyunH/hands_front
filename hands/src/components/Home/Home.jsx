import React, { useCallback,useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector } from "react-redux";
import { styled } from "styled-components";
const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReduer);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const mvLogin = useCallback((e,type) => {
    navigate(`login/${type}`);
  }, [navigate]);
  return (
    <Main>
      {
        user?
        <div>
            <Btn onClick={e => mvLogin(e, 1)}>
              <img src="assets/image/volunteer_activism_FILL0_wght200_GRAD200_opsz48.svg" width="40%" height="100%" alt="" />
              <BtnText>도움이<br/>필요해요</BtnText>
            </Btn>
            <Btn onClick={e=>mvLogin(e,1)}>
              <img src="assets/image/handshake_FILL0_wght200_GRAD200_opsz48.svg" width="40%" height="100%" alt="" />
              <BtnText>도움을<br/>줄래요</BtnText>
            </Btn>
        </div>
        : <h1>로그인</h1>
      }
    </Main>
  )
}
const Btn = styled.button`
  width: 80%;
  height: 20%;
  padding: 2rem;
  display: flex;
  box-sizing: border-box;
  border: 0;
  background-color: rgb(232, 232, 232);
  cursor: pointer;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`
const BtnText = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 3rem;
  @media screen and (max-width: 1024px){
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px){
    font-size: 1.5rem;
  }
  white-space: nowrap;
`
const Main = styled.div`
  width:100%;
  height:100%;
  padding-top: 3rem;

  position: absolute;
  top: 0;

  background-image: url("assets/image/Men and women welcoming people with disabilities.jpg");
  background-size: 30%;
  @media screen and (max-width: 1024px){
    background-size: 60%;
  }
  @media screen and (max-width: 768px){
    background-size: 90%;
  }
  background-repeat: no-repeat;
  background-position: bottom;

  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
`

export default Home