import { useUser } from "../context/UserContext";

function ThemeInfo() {
  const { user } = useUser();

  return <p>Theme: {user.theme}</p>;
}

export default ThemeInfo;