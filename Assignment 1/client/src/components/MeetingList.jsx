import useMeetingStore from "../store/meetingStore";

function MeetingList() {
  const meetings = useMeetingStore(
    (state) => state.meetings
  );

  const removeMeeting = useMeetingStore(
    (state) => state.removeMeeting
  );

  return (
    <div>
      <h2>Meetings</h2>

      {meetings.map((meeting) => (
        <div key={meeting.id}>
          {meeting.title}

          <button
            onClick={() =>
              removeMeeting(meeting.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default MeetingList;