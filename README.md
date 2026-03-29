# Interview with AI

Full-stack app (Node.js/Express/MongoDB backend + Vite/React frontend) for interview skill development.

## 🧩 Project Structure

- `backend/`
  - `server.js` — Express server setup, routes and CORS config.
  - `src/`
    - `config/` — DB, Cloudinary, mail config.
    - `controller/` — business logic for auth, courses, exams, interviews, recruiters, skills, candidate info.
    - `models/` — Mongoose schemas.
    - `routes/` — route declarations for REST endpoints.
    - `middleware/` — auth middleware, upload handling.
    - `utils/` — helpers (token, hashing, gemini AI, etc.).
- `frontend/`
  - Vite + React codebase.
  - `src/api/` — Axios client + endpoint list.
  - `src/auth/` — auth UI (login/register, OTP, reset password).
  - `src/component/` — dashboard, navbar, sidebar, profile, resume builder, pagination, protected routing.
  - `src/pages/` — route pages (user, admin, recruiter).

## 🚀 Features

### Authentication
- Register, login, logout.
- OTP email verification (`/api/v1/auth/sendotp`, `/api/v1/auth/verify`).
- Password reset (`/api/v1/auth/resetpassword`).
- Google login (`/api/v1/auth/login-with-google`).
- Email code password recovery (`/api/v1/auth/send-code`, `/api/v1/auth/verify-code`).
- Profile endpoints: get/update/delete photo.

### Users
- Get all users (`/api/v1/auth/getalluser`).

### Roles & Skills
- Roles CRUD (`/api/roles`).
- Skills CRUD (`/api/v2/skill`).

### Courses
- Course CRUD (`/api/courses`).
- Course information CRUD (`/api/course-info`) with images.
- Fetch by role and by course + role.

### Enrollment & Exams
- Enroll into course (`/api/v2/enroll/enroll`).
- Fetch user enrollments (`/api/v2/enroll/getenroll`).
- Complete exam status (`/api/v2/enroll/complete-exam/:id`).
- Create exam, complete exam, get user exams, get exam by id, latest exams (`/api/v2/exam`).

### Interviews
- Mock interview creation + query (`/api/v2/interview/mock-interview`).
- User answers, created-by query.
- Schedule interviews, view candidate schedules.
- Update interview status with recruiter auth.

### Recruiters
- Recruiter CRUD endpoints (`/api/recruiters`).

### Candidate Info
- Candidate info create/view/update/delete (`/api/v2/candidate`).
- File + profile upload via multipart.

## 🛠️ Setup

### Backend
1. `cd backend`
2. `npm install`
3. Create `.env` with keys for `PORT`, `MONGO_URI`, `JWT_SECRET`, `CLOUDINARY_*`, email config etc.
4. `npm start`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create `.env` with `VITE_BASE_URL=http://localhost:5000` (or backend address).
4. `npm run dev`

## 🔌 API client
- Axios base config: `frontend/src/api/axios.js`
- Standard endpoints route map in `endPoints` object.

## 📌 Notes
- CORS is restricted to `http://localhost:5173` and `https://your-frontend.com` in `backend/server.js`.
- Add a `public/uploads` folder for file uploads as needed.
- Ensure MongoDB is reachable and credentials are correct.

## 🤝 Contribution
1. Fork/clone.
2. Local dev flow (see setup above).
3. Add tests as needed and open PR.
