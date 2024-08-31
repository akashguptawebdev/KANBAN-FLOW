import React, { useState } from "react";

import "./App.css";

import KanbanBoard from "./pages/KanbanBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="h-full ">
      <Header />
      <KanbanBoard />
      <Footer />
    </div>
  );
};

export default App;
