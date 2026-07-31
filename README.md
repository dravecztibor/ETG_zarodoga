# 📱 ETG Zárodoga - Full-Stack Mobile Application

A complete, full-stack mobile application built as a **collaborative group project** for our final exam. The project features a **React Native** mobile frontend, a **Node.js Express backend**, and a **MySQL database** integration.

---

## 👥 Collaborative Workflow & Team Structure

This project was developed by a team of three (Tibor, Erik, and Gábor). Working together allowed us to simulate a real-world software development lifecycle, utilizing Git for version control and splitting both frontend screens and backend responsibilities.

---

## 🛠️ My Specific Contributions (Tibor)

I was responsible for developing the food management feature set, implementing both the mobile screens and the corresponding backend API endpoints.

### 📱 My Frontend Components (React Native)
* `App.js` - Managed central routing, state handling, and the main mobile application entry point.
* `Keresesszoveg.js` - Implemented the dynamic search bar component that captures user text input and sends asynchronous POST requests to filter dishes in real-time.
* `Reszletek.js` - Developed the detailed view screen to render recipe images, ingredient metadata, and step-by-step preparation processes.
* `Felvitel.js` - Created the administrative input form where users can submit new dish names, prices, details, and trigger the native device camera/gallery.
* `Lenyilo.js` - Built a reusable dropdown selector component to filter database results smoothly by food categories.

### 🔌 My Backend Endpoints (`backend.js`)
* `GET /etelek` - Fetches all available dishes from the database.
* `GET /etelekajanlat` - Returns recommended dishes sorted by priority using an SQL `INNER JOIN`.
* `GET /eteltipusok` - Retrieves all food categories.
* `POST /api/upload` - Processes multipart form data and file uploads via **Multer**, saving food images directly to the server (`/kepek`) and inserting metadata into MySQL.
* `POST /keresetelszoveg` - Filters dishes dynamically by name using SQL `LIKE`.
* `POST /kereseteltipus` - Filters dishes strictly by their specific category ID.

---

## 👥 Team Contributions (Erik & Gábor)

My teammates focused on separate features of the application, implementing their own frontend logic and backend endpoints within the shared architecture, ensuring everyone contributed their own parts:

* **Erik:** Managed county data and restaurant comment functionalities.
  * *Endpoints:* `GET /megye`, `POST /kereskommentek`, `POST /keresetterem`.
* **Gábor:** Handled shop-related screens, locations, and shop categories.
  * *Components:* `App_gabor.js`, `Kozosscreen_gabor.js`, `Uzletek_gabor.js`.
  * *Endpoints:* `GET /uzlettipus`, `GET /uzlet`, `POST /keresszoveg` (city-based filtering via `INNER JOIN`), `POST /keresuzlet`.

---

## 🛠️ Tech Stack Used

* **Frontend:** React Native (JavaScript)
* **Backend:** Node.js, Express framework
* **Database:** MySQL
* **Libraries:** Multer (File uploads), Body-Parser, Cors

---

## 👨‍💻 About Me

Hi, I am **Tibor Dravecz**, an entry-level Software Developer from Debrecen, Hungary. This application serves as my graduation project from Debreceni SZC Baross Gábor Technikum. I am a strong team player, dedicated to writing clean JavaScript/Node.js code.

* **GitHub:** [github.com/dravecztibor](https://github.com/dravecztibor)
* **Email:** dravecztibor2002@gmail.com
