import { createBrowserRouter } from "react-router";
import App from "../App";
import { AppBar } from "../ui/components/appbar";
import { DiscordAuth } from "../page/auth/discord-auth";
import { TournamentPage } from "../page/tournaments/tournament";
import { Home } from "../page/home/home";
import TournamentsPage from "../page/tournaments/tournaments";
import { ProfilePage } from "../page/profile/profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      {
        path: "tournaments",
        Component: TournamentsPage,
      },
      { path: "profile", Component: ProfilePage },
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
