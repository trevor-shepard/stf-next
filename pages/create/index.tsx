import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import SeasonCreate from '../../src/components/Seasons/Create';
const Screen: FunctionComponent = () => {
	return (
		<Container>
			<SeasonCreate/>
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
