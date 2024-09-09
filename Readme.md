# Next.js Blog Management System

This repository provides the complete source code for a blog management system built with:

* **Frontend:** Next.js for efficient routing and server-side rendering.
* **Backend:** Express.js for building a robust API server.
* **Database:** SQLite (for simplicity and quick setup; consider migrating to a more scalable database for production).
* **UI Library:** ShadCN for a sleek and modern design.

## Features:

* **Responsive Design:** Optimal viewing across devices.
* **Frontend Pages:**
    * Home: Displays a list of all blog posts with view/delete options.
    * Create Post: Form with validation for creating new posts.
    * View Post: Displays the full content of a selected post.
* **Frontend Components:**
    * Blog Card: Displays title and excerpt of each blog post.
    * Header: Simple navigation bar.
    * Form: For creating posts (title, content, with validation).
    * Button: For submitting forms and deleting posts (styled with ShadCN).
* **Backend API Endpoints:**
    * `GET /posts`: Retrieve all blog posts.
    * `GET /posts/:id`: Retrieve a single blog post by ID.
    * `POST /posts`: Create a new blog post.
    * `DELETE /posts/:id`: Delete a post (optional confirmation modal).
    * `PUT /posts/:id`: Update a post (not implemented in this version).
* **Database Model:**
    * **Post**: Table with fields `id`, `title`, and `content`.
* **Validation:**
    * Enforces required `title` and `content` fields when creating posts.

## Dependencies:

* Node.js and npm (or yarn)
* Next.js
* ShadCN UI library
* Express.js
* SQLite (consider a more robust database for production)

## Setup and Run Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- **SQLite**: [https://www.sqlite.org/](https://www.sqlite.org/)
- **Git**: [https://git-scm.com/](https://git-scm.com/)

### Frontend Setup

**1. Clone the repository:**

```bash
git clone https://github.com/techmannih/blog.git
```
```bash
cd blog
```

## 2. Navigate to the frontend directory: 

```bash
cd frontend
```

**3. Install dependencies:**

```bash
npm install
```

**4. Run the frontend server:**

```bash
npm run dev
```

### Backend Setup

**1. Navigate to the backend directory:**

```bash
cd backend
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the backend server:**

```bash
npm run serve
```

### Access the Application

- **Frontend:** Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Backend:** The backend server runs on [http://localhost:5000](http://localhost:5000).


## Deploying the Application

 ### Frontend Deployment (vercel)
 deploy the frontend to vercel by running the following command in the frontend directory
 ```bash    
   https://blog-six-azure-35.vercel.app/
 ```


 #### Backend Deployment (Azure App Serveice)
 deploy the backend to Azure App Service running the following command in the frontend directory

```bash
https://blognext-ckh7gyhzd6f2gcg8.eastus-01.azurewebsites.net/
```

## License

This project is open source and available under the [MIT License](LICENSE).