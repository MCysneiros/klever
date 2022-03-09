import { Link } from 'react-router-dom';
import { useToken } from '../../hooks/useToken';
import { Container } from './Style';
import { useParams, useNavigate } from 'react-router-dom';

export const EditToken = () => {
	let navigate = useNavigate();
	let params = useParams();

	const { removeToken, editToken, crypto } = useToken();

	const filterCrypto = crypto.filter(crypto => crypto.name === params.id);

	console.log(filterCrypto, 'editToken');

	console.log(params);

	const onClickRemoveToken = () => {
		removeToken(params.id);
		navigate('/');
	};
	return (
		<Container>
			<div className='editTokenHeader'>
				<h2>Edit Token</h2>
				<Link className='editTokenLink' to='/'>
					Voltar
				</Link>
			</div>
			<form className='editTokenForm'>
				<label>Token</label>
				<input type='text' placeholder={filterCrypto[0].name} />
				<label>Balance</label>
				<input type='text' placeholder={filterCrypto[0].balance} />
			</form>
			<div className='footer'>
				<button className='removeTokenBtn' onClick={onClickRemoveToken}>
					Remove
				</button>
				<button className='saveTokenBtn '>Save</button>
			</div>
		</Container>
	);
};
