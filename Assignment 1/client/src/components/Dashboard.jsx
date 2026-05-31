import useMeetingStore from "../store/meetingStore";

function Dashboard() {
  const meetings = useMeetingStore(
    (state) => state.meetings
  );

  return (
    <div>
      <h2>Total Meetings: {meetings.length}</h2>
    </div>
  );
}

export default Dashboard;