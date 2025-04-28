import { createBrowserRouter } from "react-router";
import TournamentsPage from "../page/tournaments/tournaments";
import App from "../App";
import { AppBar } from "../ui/components/appbar";
import { DiscordAuth } from "../page/auth/discord-auth";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: TournamentsPage },
      {
        path: "discord/callback",
        Component: DiscordAuth,
      },
    ],
    errorElement: (
      <AppBar>
        <p>Error</p>
      </AppBar>
    ),
  },
]);
