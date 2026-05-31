import Dashboard from "./components/Dashboard";
import MeetingForm from "./components/MeetingForm";
import MeetingList from "./components/MeetingList";
import MeetingStats from "./components/MeetingStats";
import UserProfile from "./context/UserProfile";
import ThemeInfo from "./context/ThemeInfo";

function App() {
  return (
    <>
      <UserProfile />
      <ThemeInfo />

      <Dashboard />
      <MeetingStats />

      <MeetingForm />
      <MeetingList />
    </>
  );
}

export default App;