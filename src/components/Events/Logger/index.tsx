import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import {useSelector} from 'react-redux';
import {
	ListItem,
	ListItemText
} from '@material-ui/core';
import List from '../../base/List';
import Confirm from './Confirm';
const Screen: FunctionComponent = () => {
	const profile = useSelector(state => state.profile);
	const [activity, setActivity] = useState('');
	if (!profile.id || profile.id === null) {
		return (<div>Loading</div>);
	}

	const activities = Object.keys(profile.activities).map((activity, index) => {
		return (
			<ListItem key={`${index}-${activity}`} onClick={() => setActivity(activity)}>
				<ListItemText primary={activity} />
			</ListItem>
		);
	});
	return (
		<Container>
			<h2>What you got going on today?</h2>

			{activity === '' ? <List title="Your Activites"> {activities} </List> : <Confirm activity={activity} setActivity={setActivity} />}
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
