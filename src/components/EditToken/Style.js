import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	.editTokenHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rem;
		h2 {
			color: #fff;
		}
		.editTokenLink {
			color: #fff;
			background: #646464;
			display: block;
			padding: 0.5rem 2rem;
			border-radius: 5px;
			font-weight: bold;
			text-decoration: none;
			transition: all 0.3s ease-in-out;
			&:visited {
				color: #fff;
			}
			&:hover {
				filter: brightness(1.2);
			}
		}
	}

	.editTokenForm {
		display: flex;
		flex-direction: column;
		label {
			color: #fff;
			font-weight: bold;
			margin-bottom: 0.5rem;
		}

		input {
			border-radius: 5px;
			padding: 0.5rem;
			margin-bottom: 2rem;
			outline: none;
			font-size: 1.2rem;
			font-weight: bold;
			color: var(background);
		}
	}
	.footer {
		display: flex;
		justify-content: space-between;
		.removeTokenBtn {
			background: var(--red);
			padding: 0.5rem 2rem;
			transition: all 0.3s ease-in-out;

			color: #fff;
			&:hover {
				filter: brightness(1.1);
			}
		}

		.saveTokenBtn {
			background: var(--pink);
			padding: 0.5rem 2.5rem;
			color: #fff;
			font-weight: bold;
			transition: all 0.3s ease-in-out;
			&:hover {
				filter: brightness(1.1);
			}
		}
	}
`;
