import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth/authContext";
import { HomeTitle } from "./styles";

export default function PrivatePage() {
  const auth = useContext(AuthContext);
  return (
    <div>
      <HomeTitle>Private Page</HomeTitle>
      <h2>Olá, {auth.user?.name}!</h2>
    </div>
  );
}
