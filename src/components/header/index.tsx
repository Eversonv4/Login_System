import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth/authContext";
import { NavLinks, LogoutButton } from "./styles";

export default function Header() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <header style={{ backgroundColor: "aqua" }}>
      <h1>Header do site</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/private">Private Page</Link>
        {auth.user && <LogoutButton onClick={handleLogout}>Sair</LogoutButton>}
      </NavLinks>
    </header>
  );
}
