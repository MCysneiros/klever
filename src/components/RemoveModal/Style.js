import styled from 'styled-components';

export const Container = styled.div`
	.removeTokenBtn {
		background: var(--red);
		padding: 0.5rem 2rem;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		border-radius: 5px;

		color: #fff;
		&:hover {
			filter: brightness(1.1);
		}
	}
	}
`;

export const Content = styled.div`
	removeBtn {
		background: var(--red);
		padding: 0.5rem 2rem;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		border-radius: 5px;

		color: #fff;
		&:hover {
			filter: brightness(1.1);
		}
	}
`;
