import Modal from 'react-modal';
import { Container, Content } from './Style';

export const RemoveModal = ({
	isModalOpen,
	onModalClose,
	isOpen,
	removeToken,
}) => {
	return (
		<Container>
			<div className='removeTokenBtn' onClick={isModalOpen}>
				Remove
			</div>
			<Modal
				isOpen={isOpen}
				onRequestClose={onModalClose}
				className='react-modal-content'
				overlayClassName='react-modal-overlay'>
				<Content>
					<h2
						className='modalText'
						style={{
							textAlign: 'center',
							color: '#fff',
							marginBottom: '4rem',
						}}>
						Tem certeza se sobre a remoção do token?
					</h2>
					<div style={{ display: 'flex', justifyContent: 'space-around' }}>
						<button
							className='cancelBtn'
							style={{
								backgroundColor: '#646464',
								color: '#fff',
								padding: '0.5rem 2rem',
								fontWeight: 'bold',
							}}
							onClick={onModalClose}>
							Cancel
						</button>
						<button
							className='removeBtn'
							style={{
								backgroundColor: 'var(--red)',
								color: '#fff',
								padding: '0.5rem 1.8rem',
								fontWeight: 'bold',
							}}
							onClick={removeToken}>
							Remove
						</button>
					</div>
				</Content>
			</Modal>
		</Container>
	);
};
