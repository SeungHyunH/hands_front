import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./router";
import "./App.css";
import Header from "./components/Common/Header";
import { styled } from "styled-components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((e) => {
            return (
              <Route
                key={e.path}
                path={e.path}
                element={
                  <AppWrap>
                    <Header></Header>
                    <e.compoonent />
                  </AppWrap>
                }
              />
            );
          })}
          {/* <Route path='/board' element={<Board />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const AppWrap = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;
