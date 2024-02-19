import useUserDataContext from "../contexts/UserDataContext";


export default function UsersDisplay(){
    const {userData, setUserData} = useUserDataContext();
    console.log(userData)
    return (
        userData.length ? 
        (<div>
            <h2>Some Results found {userData.length}</h2>
        </div>):
        <div>
            <h2>No results found</h2>
        </div>
        );
}