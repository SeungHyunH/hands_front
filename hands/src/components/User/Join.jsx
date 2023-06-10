import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import styled from "styled-components";
const Join = (props) => {
  const [disabilityList, setDisabilityList] = useState([]);
  const [checkedDisabilityList, setCheckedDisabilityList] = useState([]);
  const [isDisability, setIsDisability] = useState(false);
  const disabilityOptionList = useMemo(() => {
    const res = [];
    disabilityList.forEach((e, idx) =>
      res.push(
        <DisbilityOption
          className="pointer"
          selected={checkedDisabilityList[idx]}
          key={idx}
          onClick={() => {
            if (idx === 0) {
              const temp = new Array(checkedDisabilityList.length);
              temp[0] = true;
              setCheckedDisabilityList(temp);
              return;
            }
            const temp = [...checkedDisabilityList];
            const cnt = temp.filter((e) => e).length;
            if (temp[idx] && cnt === 1) temp[0] = true;
            else if (temp[0] && cnt === 1) temp[0] = false;
            temp[idx] = !temp[idx];
            setCheckedDisabilityList(temp);
          }}
        >
          {e.type}
        </DisbilityOption>
      )
    );
    return res;
  }, [disabilityList, checkedDisabilityList]);
  useEffect(() => {
    axios({
      method: "get",
      url: "disbility.json",
    }).then(({ data }) => {
      setDisabilityList(data);
      const temp = new Array(data.length).fill(false);
      temp[0] = true;
      setCheckedDisabilityList(temp);
    });
  }, []);
  return (
    <JoinWrap>
      {isDisability ? (
        <DisabilityOPtionWrap>
          {disabilityOptionList}
          <JoinBtn onClick={() => setIsDisability(false)}>설정완료</JoinBtn>
        </DisabilityOPtionWrap>
      ) : (
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
                  <AddDisabilityBtn
                    onClick={() => {
                      setIsDisability(true);
                    }}
                  >
                    추가
                  </AddDisabilityBtn>
                </div>
              </td>
              <DisabilityWrap>
                {disabilityList
                  .filter((e, idx) => checkedDisabilityList[idx])
                  .map((e) => (
                    <Disability key={e.type}>{e.type}</Disability>
                  ))}
              </DisabilityWrap>
            </tr>
            <tr>
              <td colSpan="2">
                아이디 찾기 |
                <span className="pointer" onClick={() => props.setMode("findPassword")}>
                  비밀번호 찾기
                </span>
                |
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
      )}
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
  margin-top: 1rem;
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
const DisabilityOPtionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DisbilityOption = styled.div`
  margin: 0.5rem 5%;
  width: 40%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  border-radius: 1rem;
  font-weight: 900;
  font-size: 1.5rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.5);
  background-color: ${(props) => (props.selected ? "rgb(0, 255, 166)" : "#ff7676")};
`;
const Disability = styled.div`
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 0 1rem;
`;
export default Join;
