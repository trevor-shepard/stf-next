import React, { useEffect } from "react";
import { withRedux } from "../../lib/with-redux-store";
import styled from "@emotion/styled";
import Router from "next/router";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { RootState } from "../types";

const Layout: React.FunctionComponent = ({ children }) => {
  const token = useSelector((state: RootState) => state.token);
  useEffect(() => {
    if (token === null) {
      Router.push("/sign-in");
    }
  }, [token]);

  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default withRedux(Layout);
