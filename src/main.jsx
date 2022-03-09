import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style/Global';
import { BrowserRouter } from 'react-router-dom';
import { TokenProvider } from './hooks/useToken';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
	<BrowserRouter>
		<TokenProvider>
			<React.StrictMode>
				<App />
				<GlobalStyle />
				<ToastContainer
					autoClose={3000}
					position='top-right'
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</React.StrictMode>
		</TokenProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
