import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Modal from "../../base/Modal";
import BaseButton from "../../base/Button";
import { joinSeason } from "../../../actions/seasons";
import Router from "next/router";

const Screen: FunctionComponent = () => {
  const seasons = useSelector((state) => state.seasons);
  const [seasonID, setSeasonID] = useState("");
  const [request, setRequest] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleJoin = async () => {
    if (seasonID.length !== 20) {
      return setError("that is an invalid id");
    }

    if (seasons[seasonID]) {
      return setError("you are already enrolled in this season");
    }

    setRequest(true);
    await dispatch(joinSeason(seasonID));
    Router.push("/home");
  };

  if (request) {
    return <div>Loading</div>;
  }

  return (
    <Modal>
      <Title>Join A Season</Title>
      <TextField
        value={seasonID}
        label="seasonID"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSeasonID(e.target.value)
        }
      />

      <BaseButton handleClick={handleJoin} label="Join Season" />
      {error}
    </Modal>
  );
};

const Title = styled.h3`
  padding: 10px;
`;

export default Screen;
