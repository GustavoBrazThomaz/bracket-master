import { Outlet } from "react-router";
import { AppBar } from "./ui/components/appbar";

function App() {
  return (
    <AppBar>
      <Outlet />
    </AppBar>
  );
}

export default App;
