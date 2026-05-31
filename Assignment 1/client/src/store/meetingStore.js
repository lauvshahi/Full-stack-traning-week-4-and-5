import { create } from "zustand";

const useMeetingStore = create((set, get) => ({
  meetings: [],

  addMeeting: (meeting) =>
    set((state) => ({
      meetings: [...state.meetings, meeting],
    })),

  removeMeeting: (id) =>
    set((state) => ({
      meetings: state.meetings.filter(
        (meeting) => meeting.id !== id
      ),
    })),

  updateMeeting: (updatedMeeting) =>
    set((state) => ({
      meetings: state.meetings.map((meeting) =>
        meeting.id === updatedMeeting.id
          ? updatedMeeting
          : meeting
      ),
    })),

  upcomingCount: () =>
    get().meetings.filter(
      (meeting) => new Date(meeting.date) > new Date()
    ).length,
}));

export default useMeetingStore;