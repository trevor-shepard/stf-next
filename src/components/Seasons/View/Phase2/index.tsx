import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../../actions";
import { Season, RootState, Event } from "../../../../types";
import StandingChart from "./StandingsChart";
interface ScreenProps {
  season: Season;
}
const Screen: FunctionComponent<ScreenProps> = ({ season }) => {
  const { id, users, activities } = season;
  const [loading, setLoading] = useState(true);

  const [totalStandings, setTotalStandings] = useState(
    Object.keys(users).reduce((acc, userID) => {
      return { ...acc, [userID]: 0 };
    }, {})
  );

  const [activityStandings, setActivityStandings] = useState(
    Object.keys(activities).reduce((acc, activityName) => {
      return {
        ...acc,
        [activityName]: Object.keys(users).reduce((acc, userID) => {
          return { ...acc, [userID]: [] };
        }, {}),
      };
    }, {})
  );

  const events = useSelector((state: RootState) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents(id));
  }, []);

  useEffect(() => {
    if (Object.keys(events).length === 0) {
      return;
    }

    const updatedTotalStandings = JSON.parse(JSON.stringify(totalStandings));
    const updatedActivityStandings = JSON.parse(
      JSON.stringify(activityStandings)
    );

    type UserActivityLog = {
      [activity: string]: Event[];
    }
    for (const userID of Object.keys(events)) {
      const userEvents = events[userID];
      let userTotal = 0;
      const userActivtyLog = {} as UserActivityLog;
      for (const event of userEvents) {
        if (!Object.keys(activities).includes(event.activity)) {
          continue;
        }

        userTotal += activities[event.activity];

        if (userActivtyLog[event.activity] === undefined) {
          userActivtyLog[event.activity] = [event];
        } else {
          userActivtyLog[event.activity] = [
            ...userActivtyLog[event.activity],
            event,
          ];
        }
      }

      updatedTotalStandings[userID] = userTotal;

      for (const activityName of Object.keys(userActivtyLog)) {
        if (!Object.keys(activities).includes(activityName)) {
          continue;
        }

        updatedActivityStandings[activityName][userID] =
          userActivtyLog[activityName];
      }
    }

    setTotalStandings(updatedTotalStandings);
    setActivityStandings(updatedActivityStandings);

    setLoading(false);
  }, [events]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Container>
      <StandingChart
        season={season}
        totalStandings={totalStandings}
        activityStandings={activityStandings}
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

export default Screen;
