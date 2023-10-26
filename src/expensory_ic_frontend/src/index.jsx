import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import RegisterLoginUser from "./RegisterLoginUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    // <h1>Hello</h1>
    // <RegisterLoginUser />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterLoginUser />}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

render(<Index />, document.getElementById("app"));
