import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function UserInfoCard({ userData }) {
  const calculate_avgviews = (posts) => {
    let posts_count = 0
    let views = posts.map(post => {
      if(post?.views){
        posts_count += 1
        return post.views
      }
      return 0
    })
    if(posts_count === 0){
      return null
    }
    return Math.round(views.reduce((total, num) => total + num, 0)/posts_count)
  }
  const { user_profile, original_post, social_media, posts_info } = userData;
  const insta_id = social_media?.ins_id;
  const yt_id = social_media?.youtube_name;
  const avg_views = calculate_avgviews(posts_info)
  return (
    <Card bg="light" className="mb-4" style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>{user_profile.name}</Card.Title>
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
                <Col md={3}>
                <MDBBtn
                  className="m-1"
                  size="sm"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="#"
                >
                  <MDBIcon fab icon="instagram" />
                </MDBBtn>
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
                <Col md={3}>
                <MDBBtn
                  className="m-1"
                  size="sm"
                  style={{ backgroundColor: "#ed302f" }}
                  href="#"
                >
                  <MDBIcon fab icon="youtube" />
                </MDBBtn>
                </Col>
                <Col className="mt-2">{yt_id}</Col>
                </Row>
              </Card.Subtitle>
          )}
          </Col>
        </Row>
        <Card.Text>
          <b>TikTok Bio</b> : {user_profile.tiktok_bio}
        </Card.Text>
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
          <Col >
            <Card.Text>
              <b>Average TikTok Views</b> : {avg_views}
            </Card.Text>
          </Col>
        </Row>
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
      </Card.Body>
    </Card>
  );
}
