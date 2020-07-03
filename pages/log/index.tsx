import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import Logger from '../../src/components/Events/Logger';
const Screen: FunctionComponent = () => {
	return (
		<Container>
			<Logger/>
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
