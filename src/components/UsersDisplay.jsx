import useUserDataContext from "../contexts/UserDataContext";
import UserInfoCard from "./UserInfoCard";
import Alert from 'react-bootstrap/Alert';
import '../css/UsersDisplay.css'
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchUserDetails } from "../api/filterApi";

export default function UsersDisplay() {
  const { userData, setUserData } = useUserDataContext();
  const [ sortData, setSortData ] = useState('default');
  const sortAscending = () => userData.slice().sort((user1, user2) => user1?.user_profile?.tiktok_followers-user2?.user_profile?.tiktok_followers)
  const sortDescending = () => userData.slice().sort((user1, user2) => user2?.user_profile?.tiktok_followers-user1?.user_profile?.tiktok_followers)
  
  useEffect(() => {
    fetchUserDetails(setUserData)
  },[])

  useEffect(() => {
    if(sortData === 'a'){
      console.log('in effect')
      setUserData(sortAscending())
    }
    else if(sortData === 'd'){
      setUserData(sortDescending())
    }
  }, [sortData, setUserData]);

  const handleSorting = () => {
    setSortData(previous => {
      if(previous === 'default' || previous === 'd'){
        return 'a'
      }
      else{
        return 'd'
      }
    })
  }
  return userData.length ? (
    <div>
      <Row>
        <Col md={2}><b>{userData.length} users</b></Col>
        <Col md={9} align="end" >{'Followers '}<i className="fa-solid fa-sort" onClick={handleSorting}/></Col>
      </Row>
      <div className="mt-2">
        <div style={{ maxHeight: "740px", overflowY: "scroll"}}>
          {userData.map((singleUserData) => (
            <UserInfoCard
              key={singleUserData.user_profile.author_uid}
              userData={singleUserData}
            />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <Alert key='warning' variant='warning'>
          No users
      </Alert>
    </div>
  );
}
