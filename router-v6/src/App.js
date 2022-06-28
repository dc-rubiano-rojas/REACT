import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        
        <Route path="/usuarios" element={<Navigate to="/users" />}></Route>

        <Route path="/user/:id" element={<User />}></Route>
        
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<h1>Welcome</h1>}></Route>
          <Route path="goodbye" element={<h1>Goodbye</h1>}></Route>
        </Route>

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
