import React from "react";
import FooterNavi from "../components/Navi";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  // 仮のユーザー情報
  const user = {
    name: "中根誉文",
    email: "nakane@example.com",
    password: "********", // 表示は伏せ字
  };

  const handleEdit = () => {
    navigate("/mypage/edit");
  };

  const handleLogout = () => {
    console.log("ログアウトしました");
    navigate("/Login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <main className="flex-1 px-6 pt-6 pb-32">
        {" "}
        <h1 className="text-xl font-bold mb-8 text-center">マイページ</h1>{" "}
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md space-y-6">
          {" "}
          {/* ユーザー情報 */}
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              ユーザー名
            </label>
            <input
              type="text"
              value={user.name}
              disabled
              className="w-full border border-gray-300 rounded-lg p-4 bg-gray-100 text-gray-800 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full border border-gray-300 rounded-lg p-4 bg-gray-100 text-gray-800 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              パスワード
            </label>
            <input
              type="password"
              value={user.password}
              disabled
              className="w-full border border-gray-300 rounded-lg p-4 bg-gray-100 text-gray-800 cursor-not-allowed"
            />
          </div>
          {/* ボタン */}
          <div className="flex flex-col gap-4 mt-6">
            {" "}
            {/* gapを4、mtを6に */}
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 p-8 mb-4 rounded-lg font-semibold transition"
            >
              編集
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition"
            >
              ログアウト
            </button>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="fixed bottom-0 left-0 w-full px-6 z-50">
        <div className="max-w-md mx-auto">
          <FooterNavi />
        </div>
      </footer>
    </div>
  );
};

export default MyPage;
