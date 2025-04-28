import { Outlet } from "react-router";
import { AppBar } from "./ui/components/appbar";
import { useEffect } from "react";
import { useUserStore } from "./store/user/use-user-store";
import Cookies from "js-cookie";

function App() {
  const { setUser } = useUserStore();

  useEffect(() => {
    setUser({
      username: Cookies.get("username") ?? "",
      email: Cookies.get("email") ?? "",
      avatarUrl: Cookies.get("avatarUrl") ?? "",
    });
  }, []);

  return (
    <AppBar>
      <Outlet />
    </AppBar>
  );
}

export default App;
