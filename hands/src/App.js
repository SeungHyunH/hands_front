import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((e) => {
            return <Route key={e.path} path={e.path} element={<e.compoonent />} />;
          })}
          {/* <Route path='/board' element={<Board />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
