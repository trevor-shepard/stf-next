import React, {useEffect} from 'react';
import Router from 'next/router';
import {useSelector} from 'react-redux';
import styled from '@emotion/styled';
import Link from 'next/link';
function NavBarScreen({children}) {
	const profile = useSelector(state => state.profile);
	const token = useSelector(state => state.token);
	if (!token) {
		return null;
	}

	return (
		<NavBar>
			<div>
				{profile.username}
			</div>
			<NavLinks>

				<Link href="/home">
					<NavLink>
                        Home
					</NavLink>
				</Link>
				<Link href="/create">
					<NavLink>
                     Create
					</NavLink>
				</Link>
				<Link href="/join">
					<NavLink>
                        Join
					</NavLink>
				</Link>
			</NavLinks>
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
    margin-right: 20px;
`;
const NavLink = styled.a`
    padding-right: 10px;
    width: 80px;
    &:hover {
        cursor: pointer;
    }
`;

export default NavBarScreen;
