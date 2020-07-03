import React, {FunctionComponent, useState, SetStateAction, Dispatch, useEffect} from 'react';
import Router from 'next/router';
import styled from '@emotion/styled';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../src/actions/auth';
import TextField from '@material-ui/core/TextField';
import Modal from '../../src/components/base/Modal';
import BaseButton from '../../src/components/base/Button';
import Link from 'next/link';
type ScreenProps = {
	showSignUp: Dispatch<SetStateAction<boolean>>;
};

const SignInScreen: FunctionComponent<ScreenProps> = ({showSignUp}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const error = useSelector(state => state.error);
	const token = useSelector(state => state.token);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		if (token) {
			Router.push('/home');
		}
	  }, [token]);

	const handleSignUp = () => {
		dispatch(signIn(email, password));
		setLoading(true);
	};

	useEffect(() => {
		setLoading(false)
	}, [error])

	const renderModal = () => {
		return (
			<Modal>
				{ error ? <div>{error}</div> : null}
				<TextField value={email} label="email" type="email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
				<TextField value={password} label="password" type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
				<BaseButton handleClick={handleSignUp} label="Sign In" />
				<Link href="/sign-up"><SignUpLink>Dont have an account?</SignUpLink></Link>
			</Modal>
		);
	};

	return (
		<Container>
			{ loading ? (<div>LOADING</div>) : renderModal()}
		</Container>
	);
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

const SignUpLink = styled.a`
	margin-top: 10px;
	color: blue;
	text-decoration: underline;
	&:hover {
		cursor: pointer;
		font-weight: bold;
		text-decoration: underline;
    }
`


export default SignInScreen;
