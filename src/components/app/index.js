import React from "react";
import Footer from "../footer";
import Header from "../header";
import Login from "../login";
import "./app.scss";

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;
