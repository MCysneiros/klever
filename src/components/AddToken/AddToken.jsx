import { Link } from 'react-router-dom';
import { Container } from './Style';
import { useState } from 'react';
import { useToken } from '../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AddToken = () => {
	let navigate = useNavigate();
	const [tokenName, setTokenName] = useState('');
	const [balance, setBalance] = useState('');
	const { addToken } = useToken();

	const onTokenAdded = event => {
		event.preventDefault();
		try {
			if (tokenName === '' || balance === '') {
				throw Error();
			} else {
				const upperTokenName = tokenName.toUpperCase();
				const addedNumber = new Intl.NumberFormat('pt-BR', {
					style: 'decimal',
				}).format(balance);
				console.log(addedNumber);
				addToken(upperTokenName, addedNumber);
				navigate('/');
			}
		} catch {
			toast.error('token name is required');
		}
	};

	const format = new Intl.NumberFormat('pt-br', {
		style: 'decimal',
	});
	return (
		<Container>
			<div className='addTokenHeader'>
				<h2>Add Token</h2>
				<Link className='addTokenLink' to='/'>
					Voltar
				</Link>
			</div>
			<form onSubmit={onTokenAdded} className='addTokenForm'>
				<label>Token</label>
				<input
					type='text'
					value={tokenName}
					onChange={e => setTokenName(e.target.value)}
				/>
				<label>Balance</label>
				<input
					type='number'
					value={balance}
					onChange={e => setBalance(e.target.value)}
				/>
				<button type='submit' className='saveTokenBtn'>
					Save
				</button>
			</form>
		</Container>
	);
};
