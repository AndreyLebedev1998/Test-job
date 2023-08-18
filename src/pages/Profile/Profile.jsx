import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  if (window.localStorage.getItem("auth") === "false" || !auth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h1>Профиль</h1>
      <p>Здесь находится произвольный текст</p>
    </div>
  );
};

export default Profile;
