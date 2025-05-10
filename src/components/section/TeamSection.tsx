"use client";

import { useState } from "react";
import TeamCards from "../cards/teamCards";
import useTeamByTag from "@/services/team/team";
import "../../styles/section/TeamSection.css";
import type { TeamProps } from "@/types/team/teamProps";

export default function TeamSection() {
  const tabs = [
    { label: "Equipe projet", slug: "equipe-projet" },
    { label: "Comité scientifique", slug: "comite-scientifique" },
    { label: "Les architectes du code", slug: "les-architectes-du-code" },
  ];

  const [activeButton, setActiveButton] = useState(tabs[0].slug);
  const team: TeamProps[] = useTeamByTag(activeButton);

  return (
    <section className="uvibes-teamSection-container">
      <div className="uvibes-teamSection-button">
        <div
          className="uvibes-button-slider"
          style={{
            left: `${
              (tabs.findIndex((tab) => tab.slug === activeButton) * 100) /
              tabs.length
            }%`,
            width: `${100 / tabs.length}%`,
          }}
        />
        {tabs.map((tab) => (
          <button
            key={tab.slug}
            className={`uvibes-button ${
              activeButton === tab.slug ? "active" : ""
            }`}
            onClick={() => setActiveButton(tab.slug)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="uvibes-teamSection-members">
        {team.map((member) => (
          <TeamCards
            key={member.name}
            image={member.image}
            alt={member.alt}
            name={member.name}
            position={member.position}
            team={member.team}
          />
        ))}
      </div>
    </section>
  );
}
