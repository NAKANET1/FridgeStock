import { useNavigate } from "react-router-dom";

const AddButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/add-item")}
      className="fixed bottom-16 right-6 bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
    >
      ＋
    </button>
  );
};

export default AddButton;
