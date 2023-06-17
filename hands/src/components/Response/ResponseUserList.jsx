import axios from "axios";
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const ResponseUserList = () => {
  const [requestList, setRequestList] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "/requestList.json",
    }).then(({ data }) => {
      if (data.code === 200) {
        setRequestList(data.data);
      }
    });
  }, []);
  const getDisability = (disability) => {
    const res = [];
    if (disability) {
      disability.forEach((e) => res.push(<Disability key={e.id}>{e.type}</Disability>));
    }
    return res;
  };
  return (
    <ResponseUserListWrap>
      <Title>현재 필요한 도움</Title>
      <RequestListWrap>
        {requestList.map((e, idx) => (
          <RequestListItem key={idx}>
            <div>{e.context}</div>
            <DisabilityWrap>{getDisability(e.disability)}</DisabilityWrap>
            <Time>{e.createdAt}</Time>
          </RequestListItem>
        ))}
      </RequestListWrap>
    </ResponseUserListWrap>
  );
};
const ResponseUserListWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 3rem;
  box-sizing: border-box;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
`;

const RequestListWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1% 5%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: nowrap;
  overflow-y: auto;
`;

const RequestListItem = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  width: 100%;
  height: 4rem;
  padding: 0.5rem;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  font-size: 0.8rem;
`;

const Time = styled.div`
  color: rgb(200, 200, 200);
  font-size: 0.5rem;
`;

const DisabilityWrap = styled.div`
  height: 1.2rem;
  padding: 0.1rem 0.1rem;
  display: flex;
  gap: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  flex-wrap: wrap;
`;
const Disability = styled.div`
  flex: 0 0 auto;
  height: 1rem;
  box-sizing: border-box;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  padding: 0 1rem;
`;
export default ResponseUserList;
