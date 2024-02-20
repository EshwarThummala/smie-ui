import useUserDataContext from "../contexts/UserDataContext";
import UserInfoCard from "./UserInfoCard";
import '../css/UsersDisplay.css'

export default function UsersDisplay() {
  const { userData } = useUserDataContext();
  return userData.length ? (
    <div>
      <b>{userData.length} users</b>
      <div className="mt-2">
        <div style={{ maxHeight: "750px", overflowY: "scroll"}}>
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
      <h2>Sorry, No results found</h2>
    </div>
  );
}
