import styled from 'styled-components/macro';

export const Main = styled.div`
	background: url(${(props) => props.backgroundImage});
	height: 100vh;
	max-height: 100%;
	width: 100%;
	background-attachment: fixed;
	overflow-x: hidden;
 	background-size: cover;
  	background-position: center;
	background-repeat: no-repeat;
  	background-attachment: fixed;
  	transition: all 0.3s ease-in;
	@media (max-width: 768px) {
		background: url(${(props) => props.mobileBgImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
	}
	/* overflow: hidden; */
`;
