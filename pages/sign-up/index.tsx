import React, { FunctionComponent, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../src/actions/auth";
import Link from "next/link";
import { Modal, Button as BaseButton } from "../../src/components/base";
import TextField from "@material-ui/core/TextField";
import { RootState } from "../../src/types";

const Screen: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state: RootState) => state.error);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    dispatch(signUp(email, username, password));
    setLoading(true);
  };

  useEffect(() => {
    setLoading(false);
  }, [error]);

  const renderModal = () => {
    return (
      <Modal>
        {error ? <div>{error}</div> : null}
        <TextField
          value={username}
          label="username"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <TextField
          value={email}
          label="email"
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <TextField
          value={password}
          label="password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <BaseButton handleClick={handleSignUp} label="Sign Up" />
        <Link href="/sign-in">
          <SignInLink>Already have an account?</SignInLink>
        </Link>
      </Modal>
    );
  };

  return <Container>{loading ? <div>LOADING</div> : renderModal()}</Container>;
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const SignInLink = styled.a`
  margin-top: 10px;
  color: blue;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default Screen;
