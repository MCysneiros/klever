import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	.addTokenHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 3rem;
		h2 {
			color: #fff;
		}
		.addTokenLink {
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

	.addTokenForm {
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
			text-transform: uppercase;
			font-size: 1.2rem;
			font-weight: bold;
			color: #333;
		}
	}

	.saveTokenBtn {
		background: var(--pink);
		border: none;
		border-radius: 5px;
		padding: 0.5rem 2.5rem;
		align-self: flex-end;
		color: #fff;
		font-weight: bold;

		transition: all 0.3s ease-in-out;
		&:hover {
			filter: brightness(0.8);
		}
	}
`;
