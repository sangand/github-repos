import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import RepoList from "./components/RepoList/RepoList.js";
import Repository from "./components/Repository/Repository.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<RepoList />} />
        <Route path="/:id" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
