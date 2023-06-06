import React from "react";
import { styled } from "styled-components";
const Login = () => {
  return (
    <LoginWrap>
      <table>
        <colgroup>
          <col width="25%"></col>
          <col width="75%"></col>
        </colgroup>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <Input />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <Input type="password" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <label htmlFor="saveId">
                아이디저장
                <input type="checkbox" id="saveId" />
              </label>
              <label htmlFor="autoLogin">
                자동로그인
                <input type="checkbox" id="autoLogin" />
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">아이디 찾기 | 비밀번호 찾기 | 회원가입</td>
          </tr>
          <tr>
            <td colSpan="2">
              <LoginBtn>로그인</LoginBtn>
            </td>
          </tr>
        </tbody>
      </table>
    </LoginWrap>
  );
};
const LoginWrap = styled.div`
  background-color: #fff;
  margin-top: 10%;
  @media screen and (max-width: 981px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 640px) {
    width: 85%;
    margin-top: 15%;
  }
  width: 60%;
  white-space: nowrap;
  padding: 1rem;
  table,
  tr {
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 0 1.5rem;
  }

  border-radius: 1rem;
  box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.5);
`;
const Input = styled.input`
  width: 90%;
  box-sizing: border-box;
  padding: 0 1rem;
  margin-left: 5%;
  height: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #000;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.5);
  border: 0;
  background-color: rgb(169, 226, 255);
  font-weight: 900;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    border: 0;
  }
`;
export default Login;
