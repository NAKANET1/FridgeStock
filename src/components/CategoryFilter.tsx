import React from "react"
import CategoryButton from "./CategoryButton"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  className?: string
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className = "",
}) => {
  return (
    <div className={`my-[30px] ${className}`}>
      <div className="mb-2 font-medium text-gray-700">カテゴリー</div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        <CategoryButton
          label="すべて"
          isActive={selectedCategory === null}
          onClick={() => onCategoryChange(null)}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            isActive={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
