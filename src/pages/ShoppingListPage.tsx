import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ShoppingList from "../components/ShoppingList";
import FooterNavi from "../components/Navi";
import AddButton from "../components/AddButton";

// 仮の買い物リストデータ
const shoppingItems = [
  { name: "たまご", category: "冷蔵", date: "2025/09/05" },
  { name: "牛乳", category: "冷蔵", date: "2025/09/05" },
  { name: "冷凍ピザ", category: "冷凍", date: "2025/09/06" },
  { name: "パスタ", category: "常温", date: "2025/09/07" },
];

const ShoppingListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const categories = ["冷蔵", "冷凍", "常温"];

  const filteredItems = shoppingItems.filter((item) => {
    const matchCategory =
      selectedCategory === null || item.category === selectedCategory;
    const matchSearch = searchQuery === "" || item.name.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pb-24 bg-gray-50 relative overflow-x-hidden">
      <h1 className="text-xl font-bold text-center py-4">買い物リスト</h1>

      {/* 検索バー */}
      <div className="px-4 mb-2">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="買うものを検索"
        />
      </div>

      {/* カテゴリフィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        className="px-4 mb-4"
      />

      {/* リスト */}
      <ShoppingList items={filteredItems} />

      {/* 追加ボタン */}
      <AddButton to="/add-shopping-item" />

      {/* フッターメニュー */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <FooterNavi />
      </div>
    </div>
  );
};

export default ShoppingListPage;
