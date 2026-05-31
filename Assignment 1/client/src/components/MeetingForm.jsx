import { useState } from "react";
import useMeetingStore from "../store/meetingStore";

function MeetingForm() {
  const addMeeting = useMeetingStore(
    (state) => state.addMeeting
  );

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addMeeting({
      id: Date.now(),
      title,
      date: new Date(),
    });

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Meeting title"
      />

      <button>Add Meeting</button>
    </form>
  );
}

export default MeetingForm;