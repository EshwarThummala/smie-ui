import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import UserModal from "./UserModal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function UserInfoCard({ userData }) {
  const [show, setShow] = useState(false);
  const calculate_avgviews = (posts) => {
    let posts_count = 0;
    let views = posts.map((post) => {
      if (post?.views) {
        posts_count += 1;
        return post.views;
      }
      return 0;
    });
    if (posts_count === 0) {
      return null;
    }
    return Math.round(
      views.reduce((total, num) => total + num, 0) / posts_count
    );
  };
  const { user_profile, original_post, social_media, posts_info } = userData;
  const insta_id = social_media?.ins_id;
  const yt_id = social_media?.youtube_name;
  const avg_views = calculate_avgviews(posts_info);
  return (
    <>
      <UserModal show={show} setShow={setShow} userData={userData} />
      <Card bg="light" className="mb-4" style={{ width: "50rem" }}>
        <Card.Body>
          <Row>
            <Col md={3}>
              <Card.Title>{user_profile.name}</Card.Title>  
            </Col>
            <Col md={8} align="end">
            {user_profile?.country !== undefined && <Card.Text><i className="fa-solid fa-earth-americas"></i> {' '+user_profile.country}</Card.Text>}
            </Col>
            <Col md={1} aligin="end">
              <i
                onClick={() => setShow(true)}
                className="fas fa-ellipsis-vertical"
                style={{ cursor: "pointer" }}
              ></i>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Card.Subtitle className="mb-2 text-muted">
                {user_profile.username}
              </Card.Subtitle>
            </Col>
            <Col>
              {insta_id && (
                <Card.Subtitle className="mb-2">
                  <Row>
                    <Col md={2}>
                      <FontAwesomeIcon size="2x" icon={faSquareInstagram} />
                    </Col>
                    <Col className="mt-2">{insta_id}</Col>
                  </Row>
                </Card.Subtitle>
              )}
            </Col>
            <Col>
              {yt_id && (
                <Card.Subtitle className="mb-2">
                  <Row>
                    <Col md={2}>
                      <FontAwesomeIcon size="2x" icon={faYoutube} />
                    </Col>
                    <Col className="mt-2">{yt_id}</Col>
                  </Row>
                </Card.Subtitle>
              )}
            </Col>
          </Row>
          {user_profile.tiktok_bio && user_profile.tiktok_bio !== "" && (
            <Card.Text>
              <b>TikTok Bio</b> : {user_profile.tiktok_bio}
            </Card.Text>
          )}
          <Row>
            <Col md={3}>
              <Card.Text>
                <b>Followers</b> : {user_profile.tiktok_followers}
              </Card.Text>
            </Col>
            <Col md={3}>
              <Card.Text>
                <b>Following</b> : {user_profile.tiktok_following}
              </Card.Text>
            </Col>
            <Col>
              <Card.Text>
                <b>Average TikTok Views</b> : {avg_views}
              </Card.Text>
            </Col>
          </Row>
          {original_post.description && original_post.description !== "" && (
            <Card className="mt-2" bg="black" style={{ color: "#DAF7A6" }}>
              <Card.Body>
                <Card.Title>
                  Original Post : #{original_post.original_hashtag}
                </Card.Title>
                <Card.Link
                  href={original_post.share_url}
                  style={{ color: "inherit" }}
                  target="_blank"
                >
                  <u>{original_post.description.trim()}</u>
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
