import React, {FunctionComponent, useState} from 'react';
import styled from '@emotion/styled';
import SeasonJoin from '../../src/components/Seasons/Join';
const Screen: FunctionComponent = () => {
	return (
		<Container>
			<SeasonJoin/>
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
