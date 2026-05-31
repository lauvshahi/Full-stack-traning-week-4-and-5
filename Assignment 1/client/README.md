## State Management Decisions

### Context API

Used for user/session information:

- Current user
- Theme preference
- Workspace settings

Reason:
These values are needed throughout the application but change infrequently.

### Global Store (Zustand)

Used for meetings data:

- Meeting list
- Add meeting
- Update meeting
- Delete meeting

Reason:
Meetings are shared across multiple pages and components, making a centralized store easier to manage.

### Local State

Used for:

- Form inputs
- Modal visibility
- Temporary filters

Reason:
These values are only needed by a single component and do not need global access.