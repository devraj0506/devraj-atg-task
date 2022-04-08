import React from 'react'
import { Modal } from 'react-bootstrap';
import ModalBody from './ModalBody';
import './myModal.css'

export default function MyModal(props) {
    return (
        <div >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header className="modal1" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="modal2">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-0">
                    <ModalBody />
                </Modal.Body>
            </Modal>
        </div>
    )
}
