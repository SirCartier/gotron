import Button from "./components/button"
import { HashRouter, Route, Routes } from "react-router-dom";

function Home(props) {
  return <h1>Hello from Home!</h1>;
}


function FirstPage(props) {
  return <h1>Hello from FirstPage!</h1>;
}


function SecondPage(props) {
  return <h1>Hello from SecondPage!</h1>;
}


function App() {
  return (
    <div className="App">
      <span>Heya</span>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/"    element={ <Home /> } />
            <Route path="/firstPage"  element={ <FirstPage /> } />
            <Route path="/secondPage" element={ <SecondPage /> } />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
