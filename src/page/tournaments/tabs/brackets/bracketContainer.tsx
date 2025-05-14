import {
  createTheme,
  Match,
  MatchType,
  SingleEliminationBracket,
} from "@replydev/react-tournament-brackets";

import "./brackets.css";
export const BracketContainer = ({ matches }: { matches: MatchType[] }) => {
  const WhiteTheme = createTheme({
    textColor: { main: "#000000", highlighted: "#07090D", dark: "#3E414D" },
    matchBackground: {
      wonColor: "oklch(96.2% 0.044 156.743)",
      lostColor: "#fff",
    },
    score: {
      background: { wonColor: "#fff", lostColor: "#000" },
      text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
    },
    border: {
      color: "oklch(27.8% 0.033 256.848)",
      highlightedColor: "oklch(55.1% 0.027 264.364)",
    },
    connectorColor: "#CED1F2",
    connectorColorHighlight: "#da96c6",
    svgBackground: "#FAFAFA",
  });

  return (
    <div className="h-full overflow-auto border border-base-300 p-4 rounded-lg">
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        theme={WhiteTheme}
        options={{
          style: {
            width: 300,
            boxHeight: 140,
            spaceBetweenRows: 12,
            spaceBetweenColumns: 24,
          },
        }}
      />
    </div>
  );
};
