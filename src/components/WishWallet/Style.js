import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 4rem;
	.Star-Container {
		align-items: center;
		h2 {
			font-size: 2rem;
			margin-left: 3px;
		}
		display: flex;
		img {
			width: 3rem;
			#layer_1 {
			}
		}
	}
	.Add-Token-btn {
		font-size: 1rem;
		background: var(--pink);
		border: none;
		color: #fff;
		font-weight: bold;
		text-decoration: none;
		border-radius: 5px;
		padding: 0.5rem 0.9rem;
		transition: all 0.3s ease-in-out;
		&:hover {
			filter: brightness(1.1);
		}
	}
`;
