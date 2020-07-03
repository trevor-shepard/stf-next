import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import SeasonList from '../../src/components/Seasons/List';
import {Logger} from '../../src/components/Events';
import {useMediaQuery} from 'react-responsive';

const Screen: FunctionComponent = () => {
	const isTabletOrMobile = useMediaQuery({query: '(max-width: 600px)'});

	return (
		<Container>{isTabletOrMobile ? <Logger /> : <SeasonList />}</Container>
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
