import { ReactNode, useState } from "react";
import { useUserStore } from "../../store/user/use-user-store";
import { MyTeams } from "./my-team/my-teams";
import { Organizing } from "./organizing/organizing";
import { Participating } from "./participating/participating";

interface Tab {
  title: string;
  component: ReactNode;
}

export function ProfilePage() {
  const {
    user: { username, avatarUrl },
  } = useUserStore();
  const [selectTab, setSelectTab] = useState<number>(0);

  const tabs: Tab[] = [
    {
      title: "Meus Times",
      component: <MyTeams />,
    },
    {
      title: "Participando",
      component: <Participating />,
    },
    {
      title: "Organizando",
      component: <Organizing />,
    },
  ];

  return (
    <div className="container mx-auto px-4 w-full flex mt-16 py-16 gap-8">
      <div className="border border-base-300 p-4 rounded-lg w-1/3">
        <div className="w-full flex flex-col gap-2 items-center justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatarUrl} alt={`image_from_${username}`} />
            </div>
          </div>
          <p className="text-xl font-bold">{username}</p>
        </div>
      </div>

      <div className="w-full flex-col">
        <div role="tablist" className="tabs tabs-box h-12 w-full">
          {tabs.map((tab, index) => (
            <a
              role="tab"
              onClick={() => setSelectTab(index)}
              key={`tab_${tab.title}`}
              className={`tab w-1/3 ${selectTab === index && "tab-active"}`}
            >
              {tab.title}
            </a>
          ))}
        </div>

        {tabs[selectTab].component}
      </div>
    </div>
  );
}
