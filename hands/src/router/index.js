import Home from "../components/Home/Home.jsx";

//도움요청
import RequestList from "../components/Request/RequestList.jsx";

//도움주기
import ResponseList from "../components/Response/ResponseList.jsx";
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
    compoonent: ResponseList,
  },
];
export default routes;
