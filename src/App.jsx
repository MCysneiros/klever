import { KleverLogo } from './components/KleverLogo/KleverLogo';
import { WishWallet } from './components/WishWallet/WishWallet';
import { Container, Content } from './style/App';
import { CryptoList } from './components/CryptoList/CryptoList';
import { Routes, Route } from 'react-router-dom';
import { AddToken } from './components/AddToken/AddToken';
import { EditToken } from './components/EditToken/EditToken';
import { useEffect } from 'react';

export default function App() {
	return (
		<Container>
			<KleverLogo />
			<WishWallet />
			<Content>
				<Routes>
					<Route path='/' element={<CryptoList />} />
					<Route path='/addtoken' element={<AddToken />} />
					<Route path='/edit:id' element={<EditToken />} />
				</Routes>
			</Content>
		</Container>
	);
}
