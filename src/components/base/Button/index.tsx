import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	label: string;
	height?: string;
	width?: string;
	disabled?: boolean;
};

const BaseButton: FunctionComponent<ButtonProps> = ({handleClick, label, height, width, disabled = false}) => {
	return (
		<Button disabled={disabled} onClick={disabled ? () => console.log('not yet') : handleClick } height={height ? height : '35px'} width={width ? width : '100px'} >
			{label}
		</Button>
	);
};

type ElementProps = {
	width: string;
	height?: string;
	disabled: boolean;
};
const Button = styled.button<ElementProps>`
    font-weight: ${props => props.disabled ? 400 : 600};
    font-size: .9375rem;
    min-width: ${props => props.width};
    height: ${props => props.height};
    padding: 10px;
    border-radius: 5px;
`;

export default BaseButton;
