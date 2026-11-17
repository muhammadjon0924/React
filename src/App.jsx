
import React, { useState } from "react";
import "./App.css";

function App() {
  const [lang, setLang] = useState("uz");

  const text = {
    uz: {
      title: "Xush kelibsiz!",
      description: "Bu mening birinchi ko‘p tilli saytim.",
      button: "Boshlash"
    },
    en: {
      title: "Welcome!",
      description: "This is my first multilingual website.",
      button: "Start"
    },
    ru: {
      title: "Добро пожаловать!",
      description: "Это мой первый многоязычный сайт.",
      button: "Начать"
    }
  };

  return (
    <div className="container">
      <h1> Language Website</h1>

      <div className="languages">
        <button onClick={() => setLang("uz")}>UZ</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ru")}>RU</button>
      </div>

      <h2>{text[lang].title}</h2>
      <p>{text[lang].description}</p>

      <button className="start">
        {text[lang].button}
      </button>
    </div>
  );
}

export default App;
