import { Container } from './style';
import Logo from '../../assets/logo.svg';
import Star from '../../assets/star.svg';

export const KleverLogo = () => {
	return (
		<Container>
			<div>
				<img src={Logo} alt='Klever Logo' />
			</div>
		</Container>
	);
};
