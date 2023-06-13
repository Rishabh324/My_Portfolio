import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.data.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f2f5f5",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;