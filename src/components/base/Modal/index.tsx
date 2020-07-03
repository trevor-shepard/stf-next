import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';
import {useMediaQuery} from 'react-responsive';

const Modal: FunctionComponent = ({children}) => {
	const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'});

	return (
		<ModalContainer isTabletOrMobile={isTabletOrMobile}>
			{children}
		</ModalContainer>
	);
};

type ReactiveProps = {
	isTabletOrMobile: boolean;
};

const ModalContainer = styled.div<ReactiveProps>`
  width: ${props => (props.isTabletOrMobile ? '90%' : '45%')};
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  & > div {
    margin: 10px;
  }
`;

export default Modal;
