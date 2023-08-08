import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css"
import StaticTable from "./components/statictable/StaticTable";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import Navigation from "./components/Navigation";
import InputForm from "./components/input/InputForm.jsx";
import ContactForm from "./components/contact/ContactForm";
import LockScreen from "./components/lockscreen/LockScreen";
import AboutPage from "./components/about/About";
import NotFoundPage from "./components/404/NotFoundPage";
import InvoicePage from "./components/invoice/InvoicePage";
import ForgotPasswordPage from "./components/forgot/ForgotPasswordPage";
import DashboardPageI from "./components/dashboard/DashBoardI";
import DashboardI from "./components/dashboard/DashBoardI";
function App() {
  return (
    <Router>
      <div className="my-page">
        <Navigation/>
        <div className="right-area">
          <main>
            <Routing />
          </main>
          {/* <Footer/> */}
        </div>
      </div>
    </Router>
  );
}

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<div> Home </div>} />
      <Route path="/dash1:" element={<DashboardI/>} />
      <Route path="/dash2:" element={<div>Dashboard _ 2</div>} />
      <Route path="/input:" element={<InputForm/>} />
      <Route path="/static:content" element={<StaticTable />} />
      <Route path="/dynamic:content" element={<div>dynamicTable</div>} />

      <Route path="/login:" element={<LoginPage/>} />
      <Route path="/register:" element={<RegisterPage/>} />
      <Route
        path="/recover:"
        element={<ForgotPasswordPage/>}
      />
      
      <Route path="/confirmMail:" element={<div>confirm</div>} />
      <Route path="/LockScreen:" element={<LockScreen/>} />
      <Route path="/about:" element={<AboutPage/>} />
      <Route path="/invoice:" element={<InvoicePage/>} />
      <Route path="/contact:" element={<ContactForm/>} />
      <Route path="/404:" element={<NotFoundPage/>} />
    </Routes>
  );
}
export default App;