import { useState } from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<List />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route path="/users/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
