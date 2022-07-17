import Modal from 'react-modal';
import { Container } from './styles';

export function AlertModal({ data, isModalAlertModalOpen, handleCloseModal }) {
    return (
        <Container>
            <Modal
                isOpen={isModalAlertModalOpen}
                onRequestClose={handleCloseModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content modal"
                ariaHideApp={false}
            >
                <h2>{data.event}</h2>
                <h3>{data.sender_name}</h3>   
                <span>Date: {new Date(data.start*1000).toLocaleDateString()} - {new Date(data.end*1000).toLocaleDateString()}</span> 
                <p>{data.description}</p>
            </Modal>
        </Container>
    )
}