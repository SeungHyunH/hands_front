import Home from "../components/Home/Home.jsx";

//도움요청
import RequestList from "../components/Request/RequestList.jsx";

//도움주기
import ResponseUserList from "../components/Response/ResponseUserList.jsx";
const routes = [
  {
    path: "/",
    compoonent: Home,
  },
  {
    path: "/request/list",
    compoonent: RequestList,
  },
  {
    path: "/response/list",
    compoonent: ResponseUserList,
  },
];
export default routes;
