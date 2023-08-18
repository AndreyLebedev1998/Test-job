import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./header.module.css";
import { logout } from "../../store/slices/slice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/">На главную</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/news">Новости</NavLink>
          </li>

          {window.localStorage.getItem("auth") === "false" ? (
            ""
          ) : (
            <li className={styles.navItem}>
              <NavLink to="/profile">Профиль</NavLink>
            </li>
          )}
          {window.localStorage.getItem("auth") === "true" || auth ? (
            <li
              className={styles.navItem}
              style={{
                cursor: "pointer",
                backgroundColor: "red",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "-10px",
              }}
              onClick={() => {
                dispatch(logout());
              }}
            >
              Выход
            </li>
          ) : (
            <li className={styles.navItem}>
              <NavLink to="/login">Вход</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
