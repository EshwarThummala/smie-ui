import useUserDataContext from "../contexts/UserDataContext";
import UserInfoCard from "./UserInfoCard";
import Alert from 'react-bootstrap/Alert';
import '../css/UsersDisplay.css'

export default function UsersDisplay() {
  const { userData } = useUserDataContext();
  return userData.length ? (
    <div>
      <b>{userData.length} users</b>
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
