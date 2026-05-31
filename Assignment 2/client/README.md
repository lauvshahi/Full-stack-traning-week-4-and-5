📌 1. Repository Link https://github.com/lauvshahi/ull-stack-traning-week-4-and-5

🌐 2. Netlify Frontend URL https://6a1c2b82129c478cbf826613--spectacular-kataifi-16b42b.netlify.app/

🐳 3. Docker Setup (Client) 

Build Image
docker build -t meeting-client .
Run Container
docker run -p 8080:80 meeting-client
Access App
http://localhost:8080

🌐 4. Netlify Deployment Settings

Build Command: npm run build
Publish Directory: dist
SPA Fix: _redirects file added
/* /index.html 200

🧠5. Architecture Summary
Context API → user/session state
Zustand → meetings global state
Local state → UI inputs
Derived state → upcoming meetings count
Express API → backend (if used)

<img width="552" height="361" alt="Screenshot 2026-05-31 183936" src="https://github.com/user-attachments/assets/6f4a86c8-5f2b-4a21-872a-18fbc1cad896" />

