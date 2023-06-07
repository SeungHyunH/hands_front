import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
const Join = (props) => {
  const [disabilityList, setDisabilityList] = useState([]);
  const [checkedDisabilityList, setCheckedDisabilityList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "disbility.json",
    }).then(({ data }) => {
      setDisabilityList(data);
      setCheckedDisabilityList(new Array(data.length).fill(false));
    });
  }, []);
  return (
    <JoinWrap>
      <table>
        <colgroup>
          <col width="25%"></col>
          <col width="75%"></col>
        </colgroup>
        <tbody>
          <tr>
            <td>이름</td>
            <td>
              <Input />
            </td>
          </tr>
          <tr>
            <td>아이디</td>
            <td>
              <Input placeholder="abc@abc.com" />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <Input type="password" />
            </td>
          </tr>
          <tr>
            <td>비밀번호확인</td>
            <td>
              <Input type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <div>장애유형</div>
              <div>
                <AddDisabilityBtn>추가</AddDisabilityBtn>
              </div>
            </td>
            <DisabilityWrap>
              {disabilityList.map((e) => (
                <div key={e.type}>{e.type}</div>
              ))}
            </DisabilityWrap>
          </tr>
          <tr>
            <td colSpan="2">
              아이디 찾기 | 비밀번호 찾기 |
              <span className="pointer" onClick={() => props.setMode("login")}>
                로그인
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <JoinBtn>회원가입</JoinBtn>
            </td>
          </tr>
        </tbody>
      </table>
    </JoinWrap>
  );
};
const JoinWrap = styled.div`
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

const JoinBtn = styled.button`
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

const AddDisabilityBtn = styled.button`
  margin: 0.5rem 0;
  padding: 0 1rem;
  height: 1.5rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.5);
  border: 0;
  background-color: rgb(169, 226, 255);
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    border: 0;
  }
`;
const DisabilityWrap = styled.td`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
export default Join;
