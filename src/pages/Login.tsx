import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/InputText";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // 仮の動作：在庫管理ページへ遷移
    navigate("/inventory");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded-2xl shadow-xl text-center">
        {/* ロゴ */}
        <img
          src="/logo.png"
          alt="App Logo"
          className="mx-auto mb-6 w-12 h-12 object-contain"
        />

        {/* タイトル */}
        <h1 className="text-2xl font-bold mb-6 text-gray-700">ログイン</h1>

        {/* メールアドレス */}
        <div className="mb-4 text-left">
          <TextInput
            label="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your@email.com"
          />
        </div>

        {/* パスワード */}
        <div className="mb-6 text-left">
          <TextInput
            label="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="******"
          />
        </div>

        {/* ログインボタン */}
        <Button
          label="ログイン"
          onClick={handleLogin}
          type="submit"
        />
      </div>
    </div>
  );
};

export default Login;
