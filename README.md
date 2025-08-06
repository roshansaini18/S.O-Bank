<div align="center">
  <img src="https://placehold.co/600x300/0055A5/FFFFFF?text=Stack+Overflow+Bank&font=raleway" alt="Stack Overflow Bank Banner">
  <h1><b>Stack Overflow Bank</b></h1>
  <p>A secure, full-featured, and modern MERN stack banking application designed for seamless financial management.</p>
  
  <p>
    <a href="https://github.com/your-username/your-repo/actions/workflows/node.js.yml"><img src="https://github.com/your-username/your-repo/actions/workflows/node.js.yml/badge.svg" alt="Build Status"></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  </p>
</div>

---

## 🚀 Live Demo

- **Frontend (Netlify):** `https://your-frontend-app-name.netlify.app/`
- **Backend (Render):** `https://your-backend-api-name.onrender.com/`

---

## ✨ Project Overview

**Stack Overflow Bank** is a comprehensive web application that simulates a real-world banking environment. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a robust platform for customers, employees, and administrators. The application features role-based access control, secure authentication, and a clean, intuitive user interface powered by Ant Design. From dynamic dashboards with data visualizations to core banking functionalities like account creation and fund transfers, this project showcases a complete end-to-end development cycle, from local setup to cloud deployment.

---

## 🔑 Key Features

The application is segregated into three distinct user panels, each with tailored functionalities.

### **👨‍💼 Admin Panel**

The Admin has the highest level of authority and oversees the entire banking operation.
- **Secure Login:** Dedicated login portal for administrators.
- **Analytical Dashboard:** An interactive dashboard featuring charts and key metrics, such as total transactions, user growth, and branch performance, visualized using `Chart.js`.
- **Employee Management:** Full CRUD (Create, Read, Update, Delete) functionality for managing bank employees.
- **Branch Management:** Ability to add new bank branches to the system, expanding the bank's network.
- **System Configuration:** Manage core application settings like branding and accepted currencies.

### **🧑‍💻 Employee Panel**

Employees are responsible for customer-facing operations and day-to-day banking tasks.
- **Secure Login:** Dedicated login portal for employees.
- **Operational Dashboard:** A dashboard summarizing daily tasks and key customer metrics.
- **Customer Account Creation:** Employees can onboard new customers by creating new bank accounts.
- **Transaction Management:** Facilitate deposits and withdrawals on behalf of customers, ensuring accurate record-keeping.

### **👤 Customer Panel**

The customer panel provides a seamless and secure digital banking experience.
- **Secure Login & Authentication:** Uses JSON Web Tokens (JWT) for secure, stateless authentication. Passwords are encrypted using `bcrypt`.
- **Visual Dashboard:** A personalized dashboard that presents financial summaries through interactive charts. Customers can quickly visualize their credit vs. debit amounts and see their final balance.
- **Transaction History:** A detailed, paginated, and searchable table of all past transactions, allowing customers to track their spending.
- **Profile Management:** Customers can view and update their personal information. Profile images are uploaded and managed via **ImageKit.io**.
- **Payee Management:** A crucial feature allowing customers to add, view, and delete payees (beneficiaries). This makes frequent fund transfers simple and error-free.
- **Fund Transfers:** A secure form to transfer funds to saved payees.

---

## 🛠️ Tech Stack & Architecture

This project leverages a modern technology stack for a robust and scalable application.

| Category          | Technology                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Frontend** | `React.js`, `React Router`, `Ant Design`, `SWR`, `Chart.js`, `Axios`                                          |
| **Backend** | `Node.js`, `Express.js`                                                                                     |
| **Database** | `MongoDB` (hosted on **MongoDB Atlas**)                                                                     |
| **Authentication**| `JSON Web Tokens (JWT)`, `bcrypt.js`, `universal-cookie`                                                      |
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

### **Installation & Setup**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    cd your-repo
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
    IMAGEKIT_PUBLIC_KEY="your_imagekit_public_key"
    IMAGEKIT_PRIVATE_KEY="your_imagekit_private_key"
    IMAGEKIT_URL_ENDPOINT="your_imagekit_url_endpoint"
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
| ![Login Page](https://i.imgur.com/gO8g4hL.png) | ![Customer Dashboard](https://i.imgur.com/9yL8b4s.png) |

| Transaction History                      | Admin - Employee Management                |
| ---------------------------------------- | ------------------------------------------ |
| ![Transaction History](https://i.imgur.com/3Zc6x7j.png) | ![Admin Dashboard](https://i.imgur.com/aB1d2cE.png) |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourAmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some YourAmazingFeature'`).
5.  Push to the branch (`git push origin feature/YourAmazingFeature`).
6.  Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by ROSHAN SAINI
</div>
