#  Contact Manager App

A **production-ready full-stack Contact Manager** built using modern web technologies.
This application allows users to efficiently manage contacts with a clean UI, scalable architecture, and optimized performance.

---

##  Live Demo

> *(Add your deployed link here after hosting)*

* Frontend: https://contact-manager-three-drab.vercel.app/
* Backend API: https://contact-manager-vx5i.onrender.com/api/contacts

---

##  Tech Stack

###  Frontend

* React (Vite)
* Tailwind CSS (v4)
* React Router
* React Query

###  Backend

* Node.js
* Express.js
* REST API Architecture

###  Database

* MongoDB *(or your configured database)*

---

##  Features

*  Add, Edit, Delete Contacts (CRUD)
*  View Contact Details
*  Fast API integration with caching (React Query)
*  Modern UI with Tailwind CSS
*  Dark Mode Support
*  Fully Responsive Design
*  Toast Notifications
*  Clean and scalable folder structure

---

##  Project Structure

```
contact-manager/
│
├── frontend/        # React Application
├── backend/         # Express API Server
├── .github/         # CI/CD workflows
├── README.md
└── .gitignore
```

---

##  Getting Started

###  1. Clone the Repository

```bash
git clone https://github.com/madhur2004/contact-manager.git
cd contact-manager
```

---

###  2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

> Server will run on: `http://localhost:5000`

---

###  3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

> App will run on: `http://localhost:5173`

---

##  Environment Variables

### Backend (`/backend/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend (`/frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

---

##  Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway

---

##  CI/CD

This project includes GitHub Actions workflow for:

* Automated dependency installation
* Build verification

---

## 📸 Screenshots

> *(Add screenshots here to make repo more attractive)*

---

##  Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/new-feature

# Commit your changes
git commit -m "Added new feature"

# Push to branch
git push origin feature/new-feature
```

---

##  License

This project is licensed under the MIT License.

---

##  Author

**Madhur Chaturvedi**

* GitHub: https://github.com/madhur2004

---

##  Show Your Support

If you like this project, please  the repository and share it!
