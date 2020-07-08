import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Season } from "../../../../types";
import VoteChart from "./voteChart";
import { voteSeason, beginSeason } from "../../../../actions/seasons";
import VoteBox from "./VoteBox";
interface ScreenProps {
  season: Season;
}
const Screen: FunctionComponent<ScreenProps> = ({ season }) => {
  const { seasonStart, votes, users, id } = season;
  const [activity, setActivity] = useState("");
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const handleVote = async () => {
    if (activity === "") {
      return setError("please name your activity");
    }

    if (value === 0) {
      return setError("activity value cannot be 0");
    }

    await dispatch(voteSeason(id, activity, value));
  };

  const handleBegin = async () => {
    await dispatch(beginSeason(id));
  };

  return (
    <Container>
      <h4>
        Season Starts {seasonStart} or{" "}
        <Clickable onClick={handleBegin}>begin now</Clickable>
      </h4>
      <VoteBox
        setActivity={setActivity}
        activity={activity}
        setValue={setValue}
        value={value}
        error={error}
        handleVote={handleVote}
      />
      <VoteChart
        votes={votes}
        users={users}
        setActivity={setActivity}
        setValue={setValue}
      />
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

const Clickable = styled.div`
  color: blue;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default Screen;
