// src/components/FooterMenu.tsx
import { FaBox, FaList, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterMenu() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2">
      <Link to="/inventory" className="flex flex-col items-center text-sm">
        <FaBox size={20} />
        <span>在庫</span>
      </Link>
      <Link to="/shopping-list" className="flex flex-col items-center text-sm">
        <FaList size={20} />
        <span>買い物リスト</span>
      </Link>
      <Link to="/mypage" className="flex flex-col items-center text-sm">
        <FaUser size={20} />
        <span>マイページ</span>
      </Link>
    </footer>
  );
}
