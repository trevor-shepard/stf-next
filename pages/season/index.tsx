import React, { FunctionComponent, useEffect } from "react";
import styled from "@emotion/styled";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Phase0 from "../../src/components/Seasons/View/Phase0";
import Phase1 from "../../src/components/Seasons/View/Phase1";
import Phase2 from "../../src/components/Seasons/View/Phase2";
import { RootState } from "../../src/types";

const Screen: FunctionComponent = () => {
  const seasons = useSelector((state: RootState) => state.seasons);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    if (!id) {
      Router.push("/");
    }
  }, []);

  const season = seasons[id];

  useEffect(() => {
    if (season === undefined) {
      Router.push("/");
    }
  }, [season]);

  const getPhase = () => {
    switch (season.phase) {
      case 0:
        return <Phase0 season={season} />;
      case 1:
        return <Phase1 season={season} />;
      case 2:
        return <Phase2 season={season} />;

      default:
        break;
    }
  };

  if (!season) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <h1> {season.name} </h1>
      {getPhase()}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export default Screen;
