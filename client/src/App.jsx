import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Text, Link } from "@chakra-ui/react";
import { Outlet, Link as ReactRouterLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Button size="md" onClick={() => setCount((count) => count + 1)}>
          <Text color="tomato">count is: {count}</Text>
        </Button>
        <Link as={ReactRouterLink} to="/albums/active">
          Active Albums
        </Link>
        <Link as={ReactRouterLink} to="/albums/inactive">
          Inactive Albums
        </Link>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
