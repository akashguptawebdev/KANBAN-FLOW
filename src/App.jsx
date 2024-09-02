import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import KanbanBoard from "./pages/KanbanBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="h-full ">
      <Header />
      <KanbanBoard />
      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </div>
  );
};

export default App;
