import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Modal from "../../base/Modal";
import { ListItem, ListItemText } from "@material-ui/core";

import List from "../../base/List";
import Link from "next/link";
import { RootState } from "../../../types";

const Screen: FunctionComponent = () => {
  const profile = useSelector((state: RootState) => state.profile);
  if (!profile.seasons) {
    return (
      <Modal>
        <Title>Sorry there has been an error, try loggin in again</Title>
      </Modal>
    );
  }

  if (Object.keys(profile.seasons).length === 0) {
    return <div>Start or Join a season!</div>;
  }
  debugger
  const seasons = Object.keys(profile.seasons).map((id, index) => {
    const season = profile.seasons[id];
    return (
      <Link key={`${id}`} href={{ pathname: "/season", query: { id } }}>
        <ListItem key={`${index}-${season}`}>
          <ListItemText primary={season} />
        </ListItem>
      </Link>
    );
  });

  return (
    <SeasonList>
      <List>{seasons}</List>
    </SeasonList>
  );
};

const Title = styled.h3`
  padding: 10px;
`;

const SeasonList = styled(Modal)`
  height: 300px!;
  overflow: scroll;
`;

export default Screen;
