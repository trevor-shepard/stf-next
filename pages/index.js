import React, {useEffect} from 'react';
import Router from 'next/router';
import {useSelector} from 'react-redux';

function index() {
	const token = useSelector(state => state.token);
	useEffect(() => {
		token === null ? Router.push('/sign-in') : Router.push('/home');
	}, [token]);
	return <div>Welcome</div>;
}

export default index;
