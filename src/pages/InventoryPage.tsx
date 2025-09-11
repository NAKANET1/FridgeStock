import React, { useState } from "react"
import SearchBar from "../components/SearchBar"
import CategoryFilter from "../components/CategoryFilter"

const InventoryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["冷蔵", "冷凍", "常温"]

  return (
    <div >
      <h1>在庫管理ページ</h1>

      {/*検索バー */}
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="食材"
      />

      {/*テゴリフィルター */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
    </div>
  )
}

export default InventoryPage
