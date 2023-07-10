import React from "react";
import EmpList from "./Components/EmpList/EmpList";
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AddEmp from "./Components/AddEmp/AddEmp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<EmpList />}></Route>
          <Route exact path="/employees" element={<EmpList />}></Route>
          <Route exact path="/add-employee" element={<AddEmp />}></Route>
          <Route exact path="/edit-employee/:id" element={<AddEmp />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
{/* 
      <Router>
        <Header />
        <div className= "container">
          <Routes>
              <Route exact path = "/" component = {EmpList}></Route>
              <Route path = "/employees" component = {EmpList}></Route>
              <Route path = "/add-employee" component = {AddEmp} ></Route>
              <Route path = "/edit-employee/:id" component = {AddEmp}></Route>
            </Routes>
        </div>
        <Footer />
        </Router> */}
    </div>
  );
}

export default App;
