type ShoppingItemProps = {
  name: string;
  category: string;
  date: string;
};

export default function ShoppingItem({ name, category, date }: ShoppingItemProps) {
  return (
    <div className="flex justify-between items-center border rounded-lg px-4 py-2 mb-2 bg-white shadow-sm">
      <span>{name}</span>
      <span className="text-gray-600">{category}</span>
      <span className="text-gray-400">{date}</span>
    </div>
  );
}
