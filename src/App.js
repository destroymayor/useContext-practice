import React, { useState, useContext } from "react";
import "./App.css";

const ThemeContext = React.createContext(null);

const View = () => {
  const [themes, setThemes] = useState(true);
  return (
    <ThemeContext.Provider value={themes ? "light" : "dark"}>
      <App>
        <button onClick={() => setThemes(!themes)}>切換主題</button>
      </App>
    </ThemeContext.Provider>
  );
};

const App = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      {children}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
};

export default View;
