# 🎓 Student Records Management System

A full-stack CRUD application for managing student data using **Node.js**, **Express**, **MongoDB**, and a custom-built **HTML + CSS + JS** frontend.

---

## 📌 Features

- Add new student records
- View all students
- Update student details
- Delete student records
- Connects to MongoDB (local)
- Built-in simple and beautiful web interface
- RESTful API support (accessible via Postman)

---

## 📁 Folder Structure

```
student-records/
├── models/
│   └── Student.js         # Mongoose schema
├── routes/
│   └── studentRoutes.js   # Express API routes
├── public/
│   ├── index.html         # Frontend UI
│   ├── style.css          # UI Styling
│   └── script.js          # JS for API calls
├── server.js              # Main backend server
├── package.json           # Project configuration
└── README.md              # Project documentation
```

---

## ⚙️ Tech Stack

| Area       | Tech                  |
|------------|-----------------------|
| Backend    | Node.js, Express.js   |
| Database   | MongoDB (local)       |
| Frontend   | HTML, CSS, JavaScript |
| Tools Used | Postman, MongoDB Compass, Nodemon |

---

## 🧠 How It Works

- **Frontend** sends API requests to `localhost:3000/api/students`
- **Backend (Node.js/Express)** handles CRUD operations
- **MongoDB** stores student data
- **Mongoose** provides schema + model structure

---

## 🚀 Getting Started

### 1. Clone this Repository
```bash
git clone https://github.com/SovitT/Student-Management-System
cd student-records
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start MongoDB
Make sure MongoDB is running locally.  
If not, start it using:

```bash
mongod
```

OR use `mongosh` if Compass is connected.

---

### 4. Start the Server

```bash
npx nodemon server.js
```

- Server runs at: [http://localhost:3000](http://localhost:3000)
- MongoDB connects to: `mongodb://127.0.0.1:27017/studentDB`

---

## 🔗 API Endpoints

| Method | Endpoint                | Description           |
|--------|-------------------------|-----------------------|
| POST   | /api/students           | Add a new student     |
| GET    | /api/students           | Get all students      |
| PUT    | /api/students/:id       | Update student by ID  |
| DELETE | /api/students/:id       | Delete student by ID  |

📬 You can test all these endpoints using **Postman**.

---

## 🌐 Access from Browser

1. Open: [http://localhost:3000](http://localhost:3000)
2. Use the form to:
   - Add new student
   - View all students
   - Delete students

---

## 📸 Screenshots

> <img width="925" height="400" alt="image" src="https://github.com/user-attachments/assets/15476bda-ccb7-4e2d-bd3e-2c8a624aa894" />


---

## 🧩 Future Improvements

- Add Edit (Update) feature in frontend
- Form validation with alerts
- Hosting on Render or Vercel
- Switch to MongoDB Atlas for cloud database
- Add user login & authentication

---

## 📜 License

This project is open-source and free to use for learning and development.

---

## 👋 Author

**Sovit Thakre**  
Student at Alliance University (MCA - Data Science)  
Made with ❤️ using Node.js + MongoDB
