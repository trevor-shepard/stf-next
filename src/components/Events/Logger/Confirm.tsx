import React, { FunctionComponent, SetStateAction, Dispatch } from "react";
import styled from "@emotion/styled";
import { Modal, Button } from "../../base";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../actions/events";
type ScreenProps = {
  activity: string;
  setActivity: Dispatch<SetStateAction<string>>;
};

const Screen: FunctionComponent<ScreenProps> = ({ activity, setActivity }) => {
  const dispatch = useDispatch();

  const handleLog = async () => {
    await dispatch(createEvent({ activity }));
    setActivity("");
  };

  const cancel = () => {
    setActivity("");
  };

  return (
    <PopUp>
      <h3>Confirm {activity}</h3>

      <ButtonRow>
        <Button handleClick={handleLog} label="Confirm" />
        <Button handleClick={cancel} label="Cancel" />
      </ButtonRow>
    </PopUp>
  );
};

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PopUp = styled(Modal)`
  z-index: 100;
`;

export default Screen;
