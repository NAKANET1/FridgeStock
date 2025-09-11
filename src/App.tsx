import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import InventoryPage from "./pages/InventoryPage.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
