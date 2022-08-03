import React from "react";
import LoginRow from "../../login-row";
import Banner from "../banner";
import Footer from "../footer";
import Header from "../header";
import "./app.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="app-container ">
        {/* <Login /> */}
        <Banner />
        <LoginRow />
      </div>
      <Footer />
    </div>
  );
}

export default App;
