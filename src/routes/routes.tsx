import { createBrowserRouter } from "react-router";
import TournamentsPage from "../page/tournaments/tournaments";
import App from "../App";
import { AppBar } from "../ui/components/appbar";
import { DiscordAuth } from "../page/auth/discord-auth";
import { TournamentPage } from "../page/tournaments/tournament";
import { TournamentForm } from "../ui/forms/tournament-form/tournament-form";

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
      {
        path: "teste",
        Component: TournamentForm,
      },
    ],
    errorElement: (
      <AppBar>
        <p>Error</p>
      </AppBar>
    ),
  },
]);
