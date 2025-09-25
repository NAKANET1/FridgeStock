// src/components/ShoppingList.tsx
import ShoppingItem from "../components/ShoppingItem";

const items = [
  { name: "たまご", category: "冷蔵", date: "2025/09/01" },
  { name: "牛乳", category: "冷蔵", date: "2025/09/01" },
];

export default function ShoppingList() {
  return (
    <div className="p-4 mt-4">
      {items.map((item, idx) => (
        <ShoppingItem
          key={idx}
          name={item.name}
          category={item.category}
          date={item.date}
        />
      ))}
    </div>
  );
}
