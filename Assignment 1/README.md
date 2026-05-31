📌 1. Repository Link
https://github.com/lauvshahi/ull-stack-traning-week-4-and-5

🌐 2. Netlify Frontend URL
https://6a1c135e0a9afd50526d0088--guileless-pika-10c310.netlify.app/

🐳 3. Docker Run Output Snippet
Server running on port 5000
DB connected successfully
API ready at http://localhost:5000

🧠 4. Architecture Notes (VERY IMPORTANT)
📌 State Design (Frontend)
Context API
Stores: user, theme, session data
Used in: UserProfile, ThemeInfo
Reason: Global but low-frequency updates
Zustand Global Store
Stores: meetings data
Actions: add, update, delete meetings
Used in: MeetingForm, MeetingList, Dashboard, Stats
Reason: Shared dynamic data across app
Local State
Stores: form inputs, modal states
Reason: UI-only temporary state

5.📌 Server Design (Backend)
Node.js + Express API
Routes:
/api/auth
/api/meetings
Controller handles logic
REST API structure

🧠 6. REQUIRED README NOTE (Context vs Global Store)
## State Management Decision

### Context API
Used for:
- User info
- Theme
- Session state

Reason:
These values are global but not frequently updated.

---

### Zustand Global Store
Used for:
- Meetings data
- Add / delete / update meetings
- Derived state (upcoming meetings count)

Reason:
Meetings are shared across multiple components and change frequently.

---

### Local State
Used for:
- Input fields
- UI toggles
- Temporary filters

Reason:
Keeps UI responsive and avoids unnecessary global complexity.


