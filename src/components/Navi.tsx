import { FaBox, FaList, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function FooterMenu() {
  const location = useLocation();

  const menuItems = [
    { label: "在庫", icon: <FaBox size={20} />, path: "/inventory" },
    { label: "買い物リスト", icon: <FaList size={20} />, path: "/shopping-list" },
    { label: "マイページ", icon: <FaUser size={20} />, path: "/mypage" },
  ];

  return (
    <footer className="fixed bottom-0 w-[400px] max-w-full mx-auto bg-white border-t shadow-md rounded-t-lg flex justify-around py-3 z-50">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex-1 flex flex-col items-center justify-center py-1 text-sm transition-colors
            ${location.pathname === item.path ? "text-blue-500" : "text-gray-500"}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </footer>
  );
}
