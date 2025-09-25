import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ShoppingList from "../components/ShoppingList";
import FooterNavi from "../components/Navi";

const items = [
  { name: "たまご", category: "冷蔵", date: "2025/09/01" },
  { name: "牛乳", category: "冷蔵", date: "2025/09/01" },
  { name: "冷凍ピザ", category: "冷凍", date: "2025/09/02" },
  { name: "パスタ", category: "常温", date: "2025/09/03" },
];

const InventoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["冷蔵", "冷凍", "常温"];

  // フィルタリング処理
  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === null || item.category === selectedCategory;
    const matchSearch =
      searchQuery === "" || item.name.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pb-20 bg-gray-50">
      <h1 className="text-xl font-bold text-center py-4">在庫管理ページ</h1>

      {/* 検索バー */}
      <div className="px-4 mb-2">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="食材を検索"
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
      <button className="fixed bottom-20 right-6 bg-gray-800 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
        +
      </button>

      {/* フッターメニュー */}
      <FooterNavi />
    </div>
  );
};

export default InventoryPage;
