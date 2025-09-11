interface CategoryButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  label,

  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition
        ${isActive
          ? "bg-blue-500 text-white hover:bg-blue-600"
          : "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"}`}
    >
      {label}
    </button>
  )
}

export default CategoryButton
