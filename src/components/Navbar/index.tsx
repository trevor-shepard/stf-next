import React from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { RootState } from "../../types";

function NavBarScreen() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  const profile = useSelector((state: RootState) => state.profile);
  const token = useSelector((state: RootState) => state.token);
  if (!token) {
    return null;
  }

  const navlinks = isTabletOrMobile ? (
    <NavLinks>
      <Link href="/home">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/join">
        <NavLink>Join</NavLink>
      </Link>
    </NavLinks>
  ) : (
    <NavLinks>
      <Link href="/home">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/log">
        <NavLink>Log</NavLink>
      </Link>
      <Link href="/create">
        <NavLink>Create</NavLink>
      </Link>
      <Link href="/join">
        <NavLink>Join</NavLink>
      </Link>
    </NavLinks>
  );

  return (
    <NavBar>
      <Link href="/home">
        <NavLink>{profile.username}</NavLink>
      </Link>
      {navlinks}
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
`;
const NavLink = styled.a`
  padding-right: 10px;
  width: 80px;
  &:hover {
    cursor: pointer;
  }
`;

export default NavBarScreen;
