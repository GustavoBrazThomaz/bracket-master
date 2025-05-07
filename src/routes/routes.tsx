import { createBrowserRouter } from "react-router";
import TournamentsPage from "../page/tournaments/tournaments";
import App from "../App";
import { AppBar } from "../ui/components/appbar";
import { DiscordAuth } from "../page/auth/discord-auth";
import { TournamentPage } from "../page/tournaments/tournament";

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
      {
        path: "tournament/:id",
        Component: TournamentPage,
      },
    ],
    errorElement: (
      <AppBar>
        <p>Error</p>
      </AppBar>
    ),
  },
]);
