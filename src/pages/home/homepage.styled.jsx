import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
	color: #fff;
	max-width: 1200px;
	height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 24px;
	justify-content: center;
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
	margin-top: 78px;

	@media (max-width: 768px) {
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
		margin-top: 0;
	}
`;

export const Content = styled.div`
	flex: 1 1 0px;
	max-width: 350px;

	@media (max-width: 768px) {
		text-align: center;
		margin-bottom: 40px;
	}
`;

export const Button = styled(Link)`
	/* flex: 1 1 0px; */
	border-radius: 50%;
	background-color: #fff;
	padding: 10px;
	height: 140px;
	width: 140px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: none;
	outline: none;
	text-transform: uppercase;
	cursor: pointer;
	font-family: 'Bellefair', serif;
	transition: all 0.3s ease-in-out;
	border: none;
	&:hover {
		transform: scale(1.05);
		outline: 38px solid #00000076;
		outline-offset: 2px;
	}
`;

export const Bold = styled.p`
	font-size: 7rem;
	text-transform: uppercase;
	font-family: 'Bellefair', serif;
`;

export const Text = styled.p`
	line-height: 2.1;
	color: #d0d6f9;
	font-size: ${(props) => (props.title ? '1.5rem' : '1.1rem')};
	text-transform: ${(props) => (props.title ? 'uppercase' : '')};
	letter-spacing: ${(props) => (props.title ? '2px' : '')};
`;
