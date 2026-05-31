import useMeetingStore from "../store/meetingStore";

function MeetingStats() {
  const upcomingCount = useMeetingStore(
    (state) => state.upcomingCount()
  );

  return (
    <div>
      Upcoming Meetings: {upcomingCount}
    </div>
  );
}

export default MeetingStats;