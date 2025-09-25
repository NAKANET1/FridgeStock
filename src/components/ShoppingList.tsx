
import ShoppingItem from "./ShoppingItem";


type Item = {
  name: string;
  category: string;
  date: string;
};

interface ShoppingListProps {
  items: Item[];
}

export default function ShoppingList({ items }: ShoppingListProps) {
  return (
    <div className="overflow-y-auto h-[60vh]">
      {items.map((item, idx) => (
        <ShoppingItem
          key={idx}
          name={item.name}
          category={item.category}
          date={item.date}
        />
      ))}

      {items.length === 0 && (
        <div className="text-gray-500 text-center mt-10">
          該当するアイテムがありません
        </div>
      )}
    </div>
  );
}
