import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import EditorDashboard from "./components/EditorDashboard";
import ViewerDashboard from "./components/ViewerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/editor" element={<EditorDashboard />} />
        <Route path="/viewer" element={<ViewerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
