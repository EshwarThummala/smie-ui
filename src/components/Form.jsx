import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import useUserDataContext from '../contexts/UserDataContext';
import { useState } from 'react';

export default function UserForm() {

  const { userData, setUserData } = useUserDataContext();
  const [minFollowerCount, setMinFollowerCount] = useState();
  const [maxFollowerCount, setMaxFollowerCount] = useState();
  const [keyword, setKeyword] = useState('');
  const [avgVideoViews, setAvgVideoViews] = useState();

  function handleSubmit(data){
    data.preventDefault();
    let newUserData = {}
    if(minFollowerCount && maxFollowerCount){
      newUserData["follower_filter"] = [minFollowerCount, maxFollowerCount]
    }
    if(keyword){
      newUserData["keyword_filter"] = keyword
    }
    if(avgVideoViews){
      newUserData["avgview_filter"] = avgVideoViews
    }
    console.log(newUserData)
    setUserData(newUserData)
  }

  return (
    <div>
      <h2>Apply filters</h2>
    <Form>

      <InputGroup className="mb-1 mt-4">
        <InputGroup.Text>Min follower count</InputGroup.Text>
        <Form.Control  type="number" value={minFollowerCount} onChange={(e) => setMinFollowerCount(e.target.value)}/>
        
      </InputGroup>

      <InputGroup className="mb-4">
        <InputGroup.Text>Max follower count</InputGroup.Text>
        <Form.Control  type="number" value={maxFollowerCount} onChange={(e) => setMaxFollowerCount(e.target.value)}/>
      </InputGroup>

      <FloatingLabel className='mb-4' controlId="floatingPassword" label="keyword">
        <Form.Control type="text" placeholder="Enter keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
      </FloatingLabel>

      <InputGroup className="mb-3">
        <InputGroup.Text>Average video views</InputGroup.Text>
        <Form.Control type="number" value={avgVideoViews} onChange={(e) => setAvgVideoViews(e.target.value)}/>
      </InputGroup>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  );
}