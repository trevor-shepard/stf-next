import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import {useDispatch} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import BaseButton from '../../base/Button';
import Modal from '../../base/Modal';
import moment from 'moment';
import {createSeason} from '../../../actions/seasons';

import MomentUtils from '@date-io/moment';

const Screen: FunctionComponent = () => {
	const [name, setName] = useState('');
	const [voteStart, setVoteStart] = useState(moment().add(1, 'days'));
	const [seasonStart, setSeasonStart] = useState(moment().add(2, 'days'));
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const handleCreate = () => {
		if (name === '') {
			return setError('please give your season a name');
		}

		if (voteStart > seasonStart) {
			return setError('voting must begin before the season begins');
		}

		dispatch(createSeason({name, voteStart, seasonStart}));
	};

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Modal>
				<Title>Start A Season</Title>
				<TextField
					value={name}
					label="name"
					type="text"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
				/>
				<DatePicker
					className="remove-bottom-border"
					value={voteStart}
					onChange={setVoteStart}
					disablePast={true}
				/>
				<DatePicker
					className="remove-bottom-border"
					value={seasonStart}
					onChange={setSeasonStart}
					disablePast={true}
				/>
				<BaseButton handleClick={handleCreate} label="Create Season" />
				{error}
			</Modal>
		</MuiPickersUtilsProvider>
	);
};

const Title = styled.h3`
  padding: 10px;
`;

export default Screen;
