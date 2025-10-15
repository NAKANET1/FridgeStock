import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import InventoryPage from "./pages/InventoryPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import MyPage from "./pages/MyPage";
import AddItemPage from "./pages/AddItemPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* ログイン */}
        <Route path="/Login" element={<Login />} />

        {/* 在庫管理 */}
        <Route path="/inventory" element={<InventoryPage />} />

        {/* 買い物リスト */}
        <Route path="/shopping-list" element={<ShoppingListPage />} />

        {/* マイページ */}
        <Route path="/mypage" element={<MyPage />} />

        {/* 追加ページ */}
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
