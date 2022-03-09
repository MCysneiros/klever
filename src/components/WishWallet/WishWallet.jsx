import { Container } from './Style';
import Star from '../../assets/star.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const WishWallet = () => {
	const [hasIcon, setHasIcon] = useState(true);
	useEffect(() => {}, [hasIcon]);

	console.log(hasIcon, 'hasicon');
	return (
		<Container>
			<div className='Star-Container'>
				<img src={Star} alt='wishwallet' />
				<h2>Wish Wallet</h2>
			</div>

			<Link className='Add-Token-btn' to='/addtoken'>
				Add Token
			</Link>
		</Container>
	);
};
