import styled from 'styled-components/macro';

export const Main = styled.div`
	background: url(${(props) => props.backgroundImage}) no-repeat bottom right /
		cover;
	height: 100vh;
	max-height: 100%;
	width: 100%;
	background-attachment: fixed;
	@media (max-width: 768px) {
		background: url(${(props) => props.mobileBgImage}) no-repeat center
			center / cover;
	}
	/* overflow: hidden; */
`;
