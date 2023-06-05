import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addUser} from "../../store/action/userAction.js"
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReduer);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <div>{ user.name}</div>
      <button onClick={() => {
        dispatch(
          addUser({ name: "한승현" })
      )}}>버튼</button>
    </div>
  )
}

export default Home