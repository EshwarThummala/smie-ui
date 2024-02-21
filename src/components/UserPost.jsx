import React, { forwardRef } from 'react';
import { ListGroup, Card, Row, Col } from 'react-bootstrap';

const UserPost = forwardRef(({ post }, ref) => {
  return (<>
    { post?.description &&
    <ListGroup.Item>
      <Row>
        {post?.region && <Col align="end"><i className="fa-solid fa-location-dot"/> {' '+post.region}</Col>}
      </Row>
      <Card.Link href={post.url} target="_blank">{post.description}</Card.Link>
      <Row>
      {post?.views !== undefined &&(<Col md={2}><i className="fa-solid fa-eye"/> {' '+post.views}</Col>)}
      {post?.likes !== undefined && (<Col md={2}><i className="fa-solid fa-thumbs-up"/> {' '+post.likes}</Col>)}
      {post?.comments !== undefined && (<Col md={2}><i className="fa-solid fa-comment"/> {' '+post.comments}</Col>)}
      {post?.saved !== undefined && (<Col md={2}><i className="fa-solid fa-bookmark"/> {' '+post.saved}</Col>)}
      {post?.downloaded !== undefined  && (<Col md={2}><i className="fa-solid fa-circle-down"/> {' '+post.downloaded}</Col>)}
      {post?.shares !== undefined  && (<Col md={2}><i className="fa-solid fa-share"/> {' '+post.shares}</Col>)}
      </Row>
    </ListGroup.Item>
    }
    </>
  );
});

export default UserPost;
