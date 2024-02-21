import Modal from "react-bootstrap/Modal";

export default function UserModal({ show, setShow, userData}) {
  console.log(show +"   in modal")
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
}
