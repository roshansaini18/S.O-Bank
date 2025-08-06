<div align="center">
  <img src="https://placehold.co/600x300/0055A5/FFFFFF?text=Stack+Overflow+Bank&font=raleway" alt="Stack Overflow Bank Banner">
  <h1><b>Stack Overflow Bank</b></h1>
  <p>A secure, full-featured, and modern MERN stack banking application designed for seamless financial management.</p>
  
  <p>
    <a href="https://github.com/roshansaini18/S.O-Bank"><img src="https://img.shields.io/github/stars/roshansaini18/S.O-Bank?style=social" alt="GitHub Stars"></a>
    <a href="https://github.com/roshansaini18/S.O-Bank/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  </p>
</div>

---

## 🚀 Live Demo & Repository

- **GitHub Repository:** [roshansaini18/S.O-Bank](https://github.com/roshansaini18/S.O-Bank)
- **Frontend (Netlify):** [https://s-o-bank.netlify.app/](https://s-o-bank.netlify.app/)
- **Backend (Render):** [https://banking-app-clfo.onrender.com/](https://banking-app-clfo.onrender.com/)

---

## ✨ Project Overview

**Stack Overflow Bank** is a comprehensive web application that simulates a real-world banking environment. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a robust platform for customers, employees, and administrators. The application features role-based access control, secure authentication with OTP verification, and a clean, intuitive user interface powered by Ant Design. From dynamic dashboards with data visualizations to core banking functionalities like account creation and fund transfers, this project showcases a complete end-to-end development cycle, from local setup to cloud deployment on platforms like Render and Netlify.

---

## 🔑 Key Features

The application is segregated into three distinct user panels, each with tailored functionalities and security measures.

### **🔐 Security & Authentication**
- **Role-Based Access Control:** A custom `Guard` component protects frontend routes, verifying the user's role (`admin`, `employee`, `customer`) against their JWT token before granting access.
- **JWT Authentication:** Secure, stateless authentication using JSON Web Tokens. Passwords are never stored in plaintext; they are hashed using `bcrypt`.
- **Session Persistence:** User session information is stored in **`localStorage`**, allowing users to stay logged in across browser sessions. The `Guard` component ensures this data is validated on every protected route visit.
- **Email OTP Verification:** **`Nodemailer`** is integrated into the backend to send One-Time Passwords (OTPs) for critical actions like user registration or password recovery, adding an extra layer of security.

### **👨‍💼 Admin Panel**
The Admin has the highest level of authority and oversees the entire banking operation.
- **Analytical Dashboard:** An interactive dashboard featuring `Chart.js` visualizations of key metrics like total transactions, user growth, and branch performance.
- **Employee Management:** Full CRUD (Create, Read, Update, Delete) functionality for managing bank employees.
- **Branch Management:** Ability to add new bank branches to the system.

### **🧑‍💻 Employee Panel**
Employees are responsible for customer-facing operations and day-to-day banking tasks.
- **Customer Account Creation:** Employees can onboard new customers by creating new bank accounts.
- **Transaction Management:** Facilitate deposits and withdrawals for customers, ensuring accurate record-keeping.

### **👤 Customer Panel**
The customer panel provides a seamless and secure digital banking experience.
- **Visual Dashboard:** A personalized dashboard that presents financial summaries through interactive charts (Bar and Doughnut) powered by `Chart.js` and `react-chartjs-2`.
- **Transaction History:** A detailed, paginated, and searchable table of all past transactions.
- **Profile Management:** Customers can view and update their personal information. Profile images are uploaded and served via **ImageKit.io** for fast delivery.
- **Payee Management:** A crucial feature allowing customers to add, view, and delete payees (beneficiaries) for quick and easy fund transfers.
- **Fund Transfers:** A secure form to transfer funds to saved payees.

---

## 🛠️ Tech Stack & Architecture

This project leverages a modern technology stack for a robust and scalable application.

| Category          | Technology / Library                                                                                        |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Frontend** | `React.js`, `React Router`, `Ant Design`, `SWR` (for data fetching), `Chart.js`, `Axios`, `Tailwind CSS`      |
| **Backend** | `Node.js`, `Express.js`, `Mongoose` (for MongoDB object modeling)                                             |
| **Database** | `MongoDB` (hosted on **MongoDB Atlas**)                                                                     |
| **Authentication**| `JSON Web Tokens (JWT)`, `bcrypt.js`, `universal-cookie`, `Nodemailer` (for OTP)                                |
| **Image Storage** | **ImageKit.io** (for profile pictures and other assets)                                                       |
| **Deployment** | **Netlify** (Frontend), **Render** (Backend)                                                                  |

### **Architecture Diagram**
<div align="center">
  <img src="https://i.imgur.com/uV5o27p.png" alt="MERN Stack Architecture Diagram" width="700">
</div>

---

## ⚙️ Getting Started (Local Setup)

To run this project on your local machine, follow these steps.

### **Prerequisites**
- Node.js (v16 or later)
- npm & Git
- A MongoDB Atlas account
- An ImageKit.io account
- A Gmail account (or other email service) for Nodemailer, with an "App Password" generated.

### **Installation & Setup**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/roshansaini18/S.O-Bank.git](https://github.com/roshansaini18/S.O-Bank.git)
    cd S.O-Bank
    ```

2.  **Setup Backend (`server` directory):**
    ```bash
    cd server
    npm install
    ```
    Create a `.env` file in the `server` directory and add the following variables:
    ```env
    MONGO_URI="your_mongodb_atlas_connection_string"
    JWT_SECRET="your_strong_jwt_secret_key"
    
    # ImageKit Credentials
    IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
    IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
    IMAGEKIT_URL_ENDPOINT="your_imagekit_url_endpoint"

    # Nodemailer Credentials
    EMAIL_USER="your_email@gmail.com"
    EMAIL_PASS="your_gmail_app_password"
    ```

3.  **Setup Frontend (`client` directory):**
    ```bash
    cd ../client
    npm install
    ```
    Create a `.env` file in the `client` directory and add the following variable:
    ```env
    REACT_APP_API_URL="http://localhost:5000" # Or your backend server port
    ```

4.  **Run the Application:**
    - **Run the backend server:** From the `server` directory, run:
      ```bash
      npm start
      ```
    - **Run the frontend application:** From the `client` directory, run:
      ```bash
      npm start
      ```

The application should now be running on `http://localhost:3000`.

---



## 📸 Screenshots

| Login Page                               | Customer Dashboard                         |
| ---------------------------------------- | ------------------------------------------ |
| <img width="1863" height="865" alt="Screenshot 2025-08-06 222637" src="https://github.com/user-attachments/assets/9380e0df-740d-4654-a814-5d7580d9cf73" />
 | <img width="1908" height="871" alt="Screenshot 2025-08-06 221713" src="https://github.com/user-attachments/assets/e73d4bfe-d7ff-49b2-8a86-5d0dc823deb3" />


| Transaction History                      | Admin - Employee Management                |
| ---------------------------------------- | ------------------------------------------ |
|<img width="1865" height="841" alt="Screenshot 2025-08-06 221727" src="https://github.com/user-attachments/assets/7c765164-9085-4c9d-981b-8c208711ab08" />
 | ![Admin Dashboard](https://i.imgur.com/aB1d2cE.png) |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please feel free to fork the repository and open a pull request.
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some YourAmazingFeature'`).
5.  Push to the branch (`git push origin feature/YourAmazingFeature`).
6.  Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/roshansaini18/S.O-Bank/blob/main/LICENSE) file for details.

---

<div align="center">
  <h3>Made with ❤️ by ROSHAN SAINI</h3>
  <a href="https://github.com/roshansaini18">GitHub</a> | <a href="https://www.linkedin.com/in/roshan-saini-6a2000260/">LinkedIn</a>
</div>
