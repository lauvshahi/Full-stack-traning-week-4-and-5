🔁 Request Lifecycle (Example: POST /meetings)
Client sends request to /meetings
Express receives request
express.json() parses body
Logger middleware records method + route + start time
Route handler validates input
Meeting object is created
Data stored in memory array
Response sent with status 201
Logger prints status + duration