import { Container } from './Style';
import Star from '../../assets/star.svg';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const WishWallet = () => {
	const [hasIcon, setHasIcon] = useState(true);

	const location = useLocation();
	useEffect(() => {
		setHasIcon(location.pathname === '/' || location.pathname === undefined);
	}, [location]);

	return (
		<Container>
			<div className='Star-Container'>
				<img src={Star} alt='wishwallet' className='svgStar' />
				<h2>Wish Wallet</h2>
			</div>

			{hasIcon && (
				<Link className='Add-Token-btn' to='/addtoken'>
					Add Token
				</Link>
			)}
		</Container>
	);
};
