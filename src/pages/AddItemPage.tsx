import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import FooterNavi from "../components/Navi";

const AddItemPage: React.FC = () => {
  const [name, setName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["冷蔵", "冷凍", "常温"];
  const navigate = useNavigate();

  const handleAdd = () => {
    console.log("追加:", { name, expiryDate, category: selectedCategory });
    navigate("/inventory");
  };

  return (
    <div className="overflow-x-hidden flex flex-col min-h-screen">
      <main className="flex-1 overflow-auto px-4 pb-24">
        <h1 className="text-xl font-bold mb-4 text-gray-800">商品を追加</h1>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          {/* 商品名 */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              商品名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="例：牛乳"
            />
          </div>

          {/* 賞味期限 */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              賞味期限
            </label>
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* カテゴリフィルター */}
          <div className="mb-6">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* 追加ボタン */}
          <button
            onClick={handleAdd}
            className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-lg w-full font-semibold"
          >
            追加
          </button>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full px-4 z-50">
        <div className="max-w-md mx-auto">
          <FooterNavi />
        </div>
      </footer>
    </div>
  );
};

export default AddItemPage;
