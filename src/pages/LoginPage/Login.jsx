import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/slice.js";
import styles from "./LoginPage.module.css"; // Импорт стилей
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(window.localStorage.getItem("auth"));
  console.log(window.localStorage.getItem("auth") === "true");

  const handleLogin = () => {
    if (username === "Admin" && password === "12345") {
      dispatch(login());
    } else {
      alert("Имя пользователя или пароль введены не верно");
    }
  };

  if (window.localStorage.getItem("auth") === "true" || auth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <h2>Страница входа</h2>
        <div>
          <label htmlFor="username">Имя пользователя: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Войти</button>
      </div>
    </div>
  );
};

export default LoginPage;
