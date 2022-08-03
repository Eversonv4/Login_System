import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/authContext";
import { LoginTitle } from "./styles";

export default function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Email ou Password incorretos");
      }
    }
  };

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <LoginTitle>Login Page</LoginTitle>
      <form>
        <input
          type="text"
          value={email}
          onChange={handleEmailInput}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordInput}
          placeholder="Digite sua senha"
        />
        <button onClick={handleLogin}>Logar</button>
      </form>
    </div>
  );
}
