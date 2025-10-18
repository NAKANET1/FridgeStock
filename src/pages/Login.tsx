import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    // 無条件で在庫管理ページへ移動
    navigate("/inventory");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-6 bg-white rounded-xl shadow-lg">
        <img src="/logo.png" alt="AppLogo" className="AppLogo"/>
        <h1>ログイン</h1>
        <TextInput
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your@email.com"
        />
        <TextInput
          label="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
        />
        <Button label="ログイン" onClick={handleLogin} type="submit" />
      </div>
    </div>
  );
};

export default Login;
