import express from "express";
import { logger } from "./logger";
import { Meeting, ApiResponse } from "./types";

const app = express();
app.use(express.json());
app.use(logger);

let meetings: Meeting[] = [];

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// GET MEETINGS
app.get("/meetings", (req, res) => {
  const response: ApiResponse<Meeting[]> = {
    success: true,
    data: meetings,
  };

  res.status(200).json(response);
});

// POST MEETING
app.post("/meetings", (req, res) => {
  const { title, date } = req.body;

  if (!title || !date) {
    return res.status(400).json({
      success: false,
      message: "title and date required",
    });
  }

  const newMeeting: Meeting = {
    id: Date.now(),
    title,
    date,
  };

  meetings.push(newMeeting);

  res.status(201).json({
    success: true,
    data: newMeeting,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});