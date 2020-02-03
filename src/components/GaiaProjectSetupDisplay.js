import React from "react";
import { withRouter } from "react-router-dom";
import { Section, Group, GroupHeader, GroupContent, Cell } from "./Common";
import ResearchTrack from "./ResearchTrack";
import StandardTechTile from "./StandardTechTile";
import RoundScoringTile from "./RoundScoringTile";
import FinalScoringTile from "./FinalScoringTile";
import RoundBooster from "./RoundBooster";
import FactionDisplay from "./FactionDisplay";

const GaiaProjectRandomizer = ({ setup }) => {
  const {
    bonusFederationToken,
    advancedTechTiles,
    techTiles,
    roundScoringTiles,
    finalScoringTiles,
    roundBoosters,
    playerFactions
  } = setup;
  return (
    <Section>
      <Group>
        <GroupHeader>Player Factions</GroupHeader>
        <GroupContent>
          {playerFactions.map(r => (
            <Cell key={r}>
              <FactionDisplay type={r} />
            </Cell>
          ))}
        </GroupContent>
      </Group>
      <Group>
        <GroupHeader>Research Tracks</GroupHeader>
        <GroupContent>
          <ResearchTrack
            federationToken={bonusFederationToken}
            advancedTechTiles={advancedTechTiles}
            standardTechTiles={techTiles}
          />
        </GroupContent>
        <GroupContent>
          {techTiles.slice(-3).map(tileID => (
            <Cell key={tileID}>
              <StandardTechTile tileID={tileID} />
            </Cell>
          ))}
        </GroupContent>
      </Group>
      <Group>
        <GroupHeader>Round Track & Final Scoring</GroupHeader>
        <GroupContent>
          {roundScoringTiles.map(tileID => (
            <Cell key={tileID}>
              <RoundScoringTile tileID={tileID} />
            </Cell>
          ))}
        </GroupContent>
        <GroupContent>
          {finalScoringTiles.map(tileID => (
            <Cell key={tileID}>
              <FinalScoringTile tileID={tileID} />
            </Cell>
          ))}
        </GroupContent>
      </Group>
      <Group>
        <GroupHeader>Round Boosters</GroupHeader>
        <GroupContent>
          {roundBoosters.map(tileID => (
            <Cell key={tileID}>
              <RoundBooster tileID={tileID} />
            </Cell>
          ))}
        </GroupContent>
      </Group>
    </Section>
  );
};

export default withRouter(GaiaProjectRandomizer);
