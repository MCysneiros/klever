import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import data from '../../data';
const TokenContext = createContext();

export function TokenProvider({ children }) {
	useEffect(() => {
		const setData = () => {
			localStorage.setItem('data', JSON.stringify(data));
		};
		setData();
	}, []);
	const [crypto, setCrypto] = useState(() => {
		const storagedCrypto = localStorage.getItem('data');
		if (storagedCrypto) {
			return JSON.parse(storagedCrypto);
		}
		return [];
	});

	const addToken = (cryptoName, cryptoBalance) => {
		try {
			const updatedCrypto = [...crypto];

			const cryptoExists = updatedCrypto.find(
				crypto => crypto.name === cryptoName
			);

			if (!cryptoExists) {
				const newCrypto = { name: cryptoName, balance: cryptoBalance };
				updatedCrypto.push(newCrypto);
				setCrypto(updatedCrypto);
				localStorage.setItem('data', JSON.stringify(updatedCrypto));
			} else {
				throw Error();
			}
		} catch {
			toast.error('The token already exists');
		}
	};

	const removeToken = cryptoName => {
		try {
			const updatedCrypto = [...crypto];
			const cryptoIndex = updatedCrypto.findIndex(
				crypto => crypto.name === cryptoName
			);

			if (cryptoIndex >= 0) {
				updatedCrypto.splice(cryptoIndex, 1);
				setCrypto(updatedCrypto);
				localStorage.setItem('data', JSON.stringify(updatedCrypto));
			}
		} catch {
			toast.error('Error removing the token');
		}
	};

	const editToken = (cryptoName, cryptoBalance, oldName) => {
		try {
			const updatedCrypto = [...crypto];
			const cryptoIndex = updatedCrypto.findIndex(
				crypto => crypto.name === oldName
			);
			if (cryptoIndex >= 0) {
				updatedCrypto[cryptoIndex].balance = cryptoBalance;
				updatedCrypto[cryptoIndex].name = cryptoName;
				setCrypto(updatedCrypto);
				localStorage.setItem('data', JSON.stringify(updatedCrypto));
			} else {
				throw Error();
			}
		} catch {
			toast.error('Error editing Token');
		}
	};
	return (
		<TokenContext.Provider value={{ crypto, addToken, removeToken, editToken }}>
			{children}
		</TokenContext.Provider>
	);
}

export function useToken() {
	const context = useContext(TokenContext);

	return context;
}
