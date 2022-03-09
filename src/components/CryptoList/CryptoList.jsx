import { useState } from 'react';
import { Container } from './Style';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';
export const CryptoList = () => {
	const { crypto } = useToken();
	console.log(window.location.pathname);
	const tokenRender = crypto.map(token => {
		return (
			<li className='TokenList' key={token.name}>
				<div className='tokenName'>
					<Link className='editIcon' to={'/edit' + token.name}>
						<FiEdit />
					</Link>
					<h2 className='tokenNameText'>{token.name}</h2>
				</div>
				<div className='tokenBalance'>
					<h2>{token.balance}</h2>
				</div>
			</li>
		);
	});

	return (
		<Container>
			<ul>
				<li className='listHeader'>
					<p>Tokens</p>
					<p>Balance</p>
				</li>
				{tokenRender}
			</ul>
		</Container>
	);
};
