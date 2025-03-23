import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";
import store from "./todoStore";

export default function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const isDarkMode = store.getState().preferencesReducer.isDarkMode;
  const [isDarkMode, setIsDarkMode] = useState(store.getState().preferencesReducer.isDarkMode);

  const themeClass = isDarkMode ? "dark" : "light";

  useEffect(() => {
    store.subscribe(() => {
      setIsDarkMode(store.getState().preferencesReducer.isDarkMode);
    });
  }, []);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <Header 
        // isDarkMode={isDarkMode} 
        // setIsDarkMode={setIsDarkMode} 
        />
        <main>
          <TodoWrapper 
            // isDarkMode={isDarkMode} 
          />
        </main>
      </div>
    </div>
  );
}
