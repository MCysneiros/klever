import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	color: #fff;
	ul {
		width: 100%;
		list-style: none;
	}
	.listHeader {
		display: flex;

		justify-content: space-between;
		p {
			font-weight: bold;
			font-size: 0.825rem;
			&:first-child {
			}
			margin-left: 26px;
		}
	}
	.TokenList {
		width: 100%;
		margin-top: 1rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tokenName {
		display: flex;
		align-items: center;
		.editIcon {
			color: #fff;
			svg {
				margin-right: 10px;
			}
		}
	}
	.tokenNameText {
	}
	.tokenBalance {
	}
`;
