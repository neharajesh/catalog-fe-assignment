import { Button } from "@mantine/core";
import classes from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.page}>
        <p> Inital Setup </p>
        <Button variant="filled"> Test Button </Button>
      </div>
    </div>
  );
}

export default App;
