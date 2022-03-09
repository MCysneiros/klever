import { Link } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';
import { Container } from './Style';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { RemoveModal } from '../RemoveModal/RemoveModal';

export const EditToken = () => {
	const [cryptoName, setCryptoName] = useState('');
	const [cryptoBalance, setCryptoBalance] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	let navigate = useNavigate();
	let params = useParams();

	const { removeToken, editToken, crypto } = useToken();

	const filterCrypto = crypto.filter(crypto => crypto.name === params.id);

	const onModalButtonClick = () => {
		setIsModalOpen(true);
	};
	const onModalClose = () => {
		setIsModalOpen(false);
	};
	const onClickRemoveToken = () => {
		removeToken(params.id);
		navigate('/');
	};

	const onTokenEdit = event => {
		event.preventDefault();
		try {
			if (cryptoName === '' || cryptoBalance === '') {
				throw Error();
			} else {
				console.log(cryptoName, cryptoBalance);
				const upperTokenName = cryptoName.toUpperCase();
				const addedNumber = new Intl.NumberFormat('pt-BR', {
					style: 'decimal',
				}).format(cryptoBalance);
				editToken(upperTokenName, addedNumber, params.id);
				navigate('/');
			}
		} catch {
			toast.error('token name is required');
		}
	};

	return (
		<Container>
			<div className='editTokenHeader'>
				<h2>Edit Token</h2>
				<Link className='editTokenLink' to='/'>
					Voltar
				</Link>
			</div>
			<form className='editTokenForm' onSubmit={onTokenEdit}>
				<label>Token</label>
				<input
					type='text'
					placeholder={filterCrypto[0].name}
					value={cryptoName}
					onChange={event => setCryptoName(event.target.value)}
				/>
				<label>Balance</label>
				<input
					type='number'
					placeholder={filterCrypto[0].balance}
					value={cryptoBalance}
					onChange={event => setCryptoBalance(event.target.value)}
				/>

				<div className='footer'>
					<RemoveModal
						removeToken={onClickRemoveToken}
						isModalOpen={onModalButtonClick}
						isOpen={isModalOpen}
						onModalClose={onModalClose}
					/>

					<button type='submit' className='saveTokenBtn '>
						Save
					</button>
				</div>
			</form>
		</Container>
	);
};
