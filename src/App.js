import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main/Main";
import News from "./pages/News/News";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header/Header";
import LoginPage from "./pages/LoginPage/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          Главная
        </Route>
        <Route path="/news" element={<News />}>
          Новости
        </Route>
        <Route path="/profile" element={<Profile />}>
          Профиль
        </Route>
        <Route path="/login" element={<LoginPage />}>
          Вход
        </Route>
      </Routes>
    </div>
  );
}

export default App;
