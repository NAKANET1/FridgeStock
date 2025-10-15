import React from "react";
import { useNavigate } from "react-router-dom";

interface AddButtonProps {
  to?: string; // 遷移先
  onClick?: () => void; // 任意のクリックイベント
}

const AddButton: React.FC<AddButtonProps> = ({ to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
<button
  onClick={handleClick}
  className="
    bg-blue-500 hover:bg-blue-600 text-white
    rounded-full w-16 h-16
    flex items-center justify-center
    text-4xl shadow-lg transition-all duration-200
    z-[60]
  "
>
      ＋
    </button>
  );
};

export default AddButton;
