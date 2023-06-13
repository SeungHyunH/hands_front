import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import User from "../User/User.jsx";
const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReduer);
  const mvLogin = useCallback(
    (e, type) => {
      navigate(`login/${type}`);
    },
    [navigate]
  );
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Main>
      {user ? (
        <HomeWrap>
          <Btn onClick={(e) => mvLogin(e, 1)}>
            <img
              src="assets/image/volunteer_activism_FILL0_wght200_GRAD200_opsz48.svg"
              width="40%"
              height="100%"
              alt=""
            />
            <BtnText>
              도움이
              <br />
              필요해요
            </BtnText>
          </Btn>
          <Btn onClick={(e) => mvLogin(e, 2)}>
            <img
              src="assets/image/handshake_FILL0_wght200_GRAD200_opsz48.svg"
              width="40%"
              height="100%"
              alt=""
            />
            <BtnText>
              도움을
              <br />
              줄래요
            </BtnText>
          </Btn>
        </HomeWrap>
      ) : (
        <User></User>
      )}
    </Main>
  );
};
const Btn = styled.button`
  width: 80%;
  height: 20%;
  margin-left: 10%;
  margin-top: 5rem;
  padding: 2rem;
  display: flex;
  box-sizing: border-box;
  border: 0;
  background-color: rgb(169, 226, 255);
  cursor: pointer;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
`;
const BtnText = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 3rem;
  @media screen and (max-width: 981px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 1.5rem;
  }
  white-space: nowrap;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 3rem;

  position: absolute;
  top: 0;

  background-image: url("assets/image/Men and women welcoming people with disabilities.jpg");
  background-size: 32.5%;
  @media screen and (max-width: 981px) {
    background-size: 45%;
  }
  @media screen and (max-width: 768px) {
    background-size: 90%;
  }
  @media screen and (max-width: 640px) {
    background-size: 90%;
  }
  background-repeat: no-repeat;
  background-position: bottom;

  display: flex;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
`;
const HomeWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export default Home;
