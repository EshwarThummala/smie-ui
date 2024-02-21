import Modal from "react-bootstrap/Modal";
import UserPost from "./UserPost";
import { Card, ListGroup, Row, Col } from "react-bootstrap";


export default function UserModal({ show, setShow, userData}) {
  const { user_profile, posts_info } = userData
  return (
    <Modal show={show} size="xl" onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>More Posts of {user_profile.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
        <Row>
          <Col md={1}></Col>
          <Col>
        <Card style={{ maxWidth: '100%'}} >
            <ListGroup variant="flush">
            {posts_info.map((current_post) => <UserPost key={current_post.post_uid} post={current_post}/>)}
            </ListGroup>
        </Card>
        </Col>
        <Col md={1}></Col>
        </Row>
        }
      </Modal.Body>
    </Modal>
  );
}
