import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

export default function UserInfoCard({ userData }) {
  const  { user_profile, original_post } = userData
  return (
    <Card bg="light" className="mb-2" style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>{user_profile.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user_profile.username}</Card.Subtitle>
        <Card.Text>
            <b>Bio</b> : {user_profile.tiktok_bio}
        </Card.Text>
        <Row>
            <Col md={3}>
                 <Card.Text><b>Followers</b> : {user_profile.tiktok_followers}</Card.Text>
            </Col>
            <Col md={3}>
                <Card.Text><b>Following</b> : {user_profile.tiktok_following}</Card.Text>
            </Col>
        </Row>
        <Card className="mt-2" bg="black" style={{ color : "#DAF7A6" }}>
            <Card.Body>
                <Card.Title>Original Post : #{original_post.original_hashtag}</Card.Title>
                <Card.Link href={original_post.share_url} style={{ color: 'inherit' }} target="_blank">{original_post.description.trim()}</Card.Link>
            </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}
