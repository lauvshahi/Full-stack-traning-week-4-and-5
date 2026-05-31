import { useUser } from "../context/UserContext";

function UserProfile() {
  const { user } = useUser();

  return <h2>Welcome {user.name}</h2>;
}

export default UserProfile;