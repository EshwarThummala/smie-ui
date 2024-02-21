import Modal from "react-bootstrap/Modal";
import UserPost from "./UserPost";

export default function UserModal({ show, setShow, userData}) {
  console.log(show +"   in modal")
  const { user_profile, posts_info } = userData
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>More Posts of {user_profile.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
            posts_info.map(post => <UserPost key={post.post_uid} post={post}/>)
        }
      </Modal.Body>
    </Modal>
  );
}
