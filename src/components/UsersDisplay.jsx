import { Container } from "react-bootstrap";
import useUserDataContext from "../contexts/UserDataContext";
import UserInfoCard from "./UserInfoCard";
import '../css/UsersDisplay.css'

export default function UsersDisplay() {
  const { userData, setUserData } = useUserDataContext();
  return userData.length ? (
    <Container className="mt-4">
      <div style={{ maxHeight: "750px", overflowY: "scroll"}}>
        {userData.map((singleUserData) => (
          <UserInfoCard
            key={singleUserData.user_profile.author_uid}
            userData={singleUserData}
          />
        ))}
      </div>
    </Container>
  ) : (
    <div>
      <h2>Sorry, No results found</h2>
    </div>
  );
}
