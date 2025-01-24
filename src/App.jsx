import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
