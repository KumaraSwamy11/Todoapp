import Header from "./Components/Header";
import Todo from "./Components/Todo";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter basename="/Todoapp">
      <Routes>
        <Route>
          path="/" element=
          {
            <Fragment>
              <div className="App">
                <Header />
                <Todo />
              </div>
            </Fragment>
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
