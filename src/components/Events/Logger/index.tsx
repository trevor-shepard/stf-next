import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import {useSelector} from 'react-redux';

import List from '../../base/List';
import Confirm from './Confirm';

import {ThemeProvider} from 'emotion-theming';
import {Default as DefaultTheme} from '../../../styles/themes';

const Screen: FunctionComponent = () => {
	const profile = useSelector(state => state.profile);
	const [activity, setActivity] = useState('');
	if (!profile.id || profile.id === null) {
		return (<div>Loading</div>);
	}

	const activities = Object.keys(profile.activities).map((activity, index) => {
		return (
			<ListItem key={`${index}-${activity}`} onClick={() => setActivity(activity)} >
				{activity.toUpperCase()}
			</ListItem>
		);
	});

	return (
		<ThemeProvider theme={DefaultTheme}>
			<Container >
				<h2>What you got going on today?</h2>

				{activity === '' ? <List> {activities} </List> : <Confirm activity={activity} setActivity={setActivity} />}
			</Container>
		</ThemeProvider>
	);
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

const ListItem = styled.div`
	display: flex;
	align-items: center;
  	justify-content: center;
	height: 50px;
	width: 100%;
	background-color: ${props => props.theme.colors.primary};
	border-radius: 4px;
	color: ${props => props.theme.colors.text};
	margin-top: 10px;
	max-width: 300px;
`;

export default Screen;
