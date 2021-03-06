import React, { FunctionComponent, Dispatch, SetStateAction } from "react";
import { Modal, Button } from "../../../base";
import TextField from "@material-ui/core/TextField";

interface ScreenProps {
  activity: string;
  value: number;
  error: string | null;
  setActivity: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<number>>;
  handleVote: () => void;
}

const Screen: FunctionComponent<ScreenProps> = ({
  setActivity,
  setValue,
  activity,
  value,
  handleVote,
  error,
}) => {
  return (
    <Modal>
      <h4>Vote/Add Activites for season </h4>
      <TextField
        value={activity}
        label="activity"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setActivity(e.target.value)
        }
      />
      <TextField
        value={value}
        label="value"
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(Number.parseInt(e.target.value))
        }
      />
      <Button handleClick={handleVote} label="Submit" />
      {error}
    </Modal>
  );
};

export default Screen;
