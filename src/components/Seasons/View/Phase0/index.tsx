import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import {useDispatch} from 'react-redux';
import Link from 'next/link';
import {Season} from '../../../../types';
import {List} from '../../../base';
import {
	ListItem,
	ListItemText
} from '@material-ui/core';

interface ScreenProps {
	season: Season;
}
const Screen: FunctionComponent<ScreenProps> = ({season}) => {
	const {voteStart} = season;

	const users = Object.values(season.users).map((username, i) => (
		<ListItem key={`${username}-${i}`}>
			<ListItemText primary={username} />
		</ListItem>
	));

	return (
		<Container>
			<h3>Waiting for Players to Join, Season Starts on {voteStart}</h3>
			<div>Invite friends with the code {season.id}</div>
			<List title="Players">
				{ users }
			</List>
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
