import React, {useEffect} from 'react';
import {withRedux} from '../../lib/with-redux-store';
import styled from '@emotion/styled';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Router from 'next/router';
import {useSelector} from 'react-redux';
import Navbar from './Navbar';
function Layout({children}) {
	const token = useSelector(state => state.token);
	useEffect(() => {
		if (token === null) {
			Router.push('/sign-in');
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
