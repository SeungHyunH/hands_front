import React, { useState, useCallback, useEffect } from "react";
import { styled } from "styled-components";
import { addUser } from "../../store/action/userAction";
import { useDispatch } from "react-redux";
const Login = (props) => {
  const [userId, setUserId] = useState("");
  const [saveId, setSaveId] = useState(false);
  const [password, setPassword] = useState("");
  const dispach = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("handsId")) {
      setSaveId(true);
      setUserId(localStorage.getItem("handsId"));
    }
  }, []);

  const login = useCallback(() => {
    const emailExp =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (userId === "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (!emailExp.test(userId)) {
      alert("아이디를 이메일형식으로 입력해주세요");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (saveId) {
      localStorage.setItem("handsId", userId);
    } else {
      localStorage.setItem("handsId", null);
    }
    dispach(
      addUser({
        name: "한승현",
        accessToken: "asdfasdf",
        refreshToken: "asdfasdf",
      })
    );
  }, [userId, password, dispach, saveId]);

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
              <Input value={userId} onChange={(e) => setUserId(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <label htmlFor="saveId">
                아이디저장
                <input
                  type="checkbox"
                  id="saveId"
                  checked={saveId}
                  onChange={(e) => setSaveId(e)}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              아이디 찾기 |
              <span className="pointer" onClick={() => props.setMode("findPassword")}>
                비밀번호 찾기
              </span>
              |
              <span className="pointer" onClick={() => props.setMode("join")}>
                회원가입
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <LoginBtn onClick={login}>로그인</LoginBtn>
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
