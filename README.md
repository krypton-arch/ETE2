# Movie Catalog App

A simple full-stack movie catalog application using Express.js, MySQL, and a static HTML frontend styled with Tailwind CSS.

## Features
- Add new movies (title, director, genre, release year, rating)
- View all movies in a modern, responsive UI
- Delete movies

## Technologies Used
- Node.js + Express.js (backend API)
- MySQL (database)
- Tailwind CSS (frontend styling)
- Vanilla JavaScript (frontend logic)

## Setup Instructions

### 1. Clone the repository
```
git clone <your-repo-url>
cd movie-catalog
```

### 2. Install dependencies
```
npm install express mysql cors
```

### 3. Set up MySQL database
- Create a database named `movies_db`.
- Create a table named `movies`:
```sql
CREATE TABLE movies (
	id INT AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255),
	director VARCHAR(255),
	genre VARCHAR(100),
	release_year INT,
	rating FLOAT
);
```
- Update your MySQL credentials in `app.js` if needed.

### 4. Run the backend server
```
node app.js
```
- The server will run on `http://localhost:5000` by default.

### 5. Access the frontend
- Open `http://localhost:5000/index.html` in your browser.

## Deployment
- Frontend can be deployed to Vercel as a static site.
- Backend can be deployed to Render, Railway, or similar Node.js hosting platforms.
- Use a cloud MySQL provider for production.

## API Endpoints
- `GET /movies` - List all movies
- `POST /movies` - Add a new movie
- `DELETE /movies/:id` - Delete a movie

## Customization
- You can further enhance the UI, add authentication, or expand features as needed.

