import Home from "../components/Home/Home.jsx";

//도움요청
import RequestList from "../components/Request/RequestList.jsx";

//도움주기
import ResponseUserList from "../components/Response/ResponseUserList.jsx";
import ResponseUserDetail from "../components/Response/ResponseUserDetail.jsx"
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
  {
    path: "/response/detail/:helpId",
    compoonent: ResponseUserDetail
  },
];
export default routes;
