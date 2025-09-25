import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItemPage: React.FC = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSave = () => {
    // ここで保存処理（Firebaseなどに送信する想定）
    console.log("保存:", { name, quantity });

    // 保存後に買い物リストページに戻る
    navigate("/shopping-list");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">商品を追加</h1>

      <div className="mb-4">
        <label className="block text-sm mb-1">商品名</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="例：牛乳"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">数量</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded p-2 w-full"
          min={1}
        />
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        保存
      </button>
    </div>
  );
};

export default AddItemPage;
