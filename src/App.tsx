import classes from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Coins } from "./components/Coins/Coins";
import { Home } from "./components/Home/Home";
import { Coin } from "./components/Coin/Coin";

function App() {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.page}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coins/:id" element={<Coin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
