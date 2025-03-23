import React, { useEffect } from "react";
import SwitchToDarkIcon from "../images/icon-moon.svg";
import SwitchToLightIcon from "../images/icon-sun.svg";
import store from "../todoStore";
// import { toggleDarkMode } from "../todoStore";
import { toggleDarkMode } from "../actions";


const Header = () => {

  const isDarkMode = store.getState().preferencesReducer.isDarkMode;
  
  const getThemeIcon = (isDarkMode) => {
    return isDarkMode ? SwitchToLightIcon : SwitchToDarkIcon;
  }
  let themeIcon = getThemeIcon(isDarkMode);

  useEffect(() => {
    store.subscribe(() => {
      let isDarkMode = store.getState().preferencesReducer.isDarkMode;
      document.getElementById("themeIcon").src = getThemeIcon(isDarkMode);
    })
  }, [])

  const changeTheme = () => {
    // setIsDarkMode(!isDarkMode);
    store.dispatch(toggleDarkMode());
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn" onClick={changeTheme}>
        <img id="themeIcon" src={themeIcon} alt="Dark Theme" />
      </button>
    </header>
  );
};

export default Header;
