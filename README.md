
# PrashnaKhoj

PrashnaKhoj is a web application designed to help students connect with a vast database of questions and empower them with specialized features for mastering various subjects and competitive IOE exams.

- **Question Search**: Easily search for questions using keywords and filters to find exactly what you need.
- **Responsive Design**: Access the platform seamlessly on both desktop and mobile devices.
- **Elasticsearch Integration**: Enjoy fast and efficient search capabilities powered by Elasticsearch.

## Table of Contents

- [PrashnaKhoj](#prashnakhoj)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Docker Setup](#docker-setup)
  - [Contributing](#contributing)
  - [License](#license)
  - [Detailed File Descriptions](#detailed-file-descriptions)
    - [Backend](#backend)
    - [Configuration](#configuration)

## Features

- Search for questions using keywords
- View detailed results for each search
- Responsive design for both desktop and mobile devices
- Integration with Elasticsearch for efficient search capabilities

## Project Structure

```
.dockerignore
.gitignore
backend/
    .dockerignore
    app.js
    Dockerfile
    package.json


docker-compose.yml


frontend/
    .dockerignore
    Dockerfile
    package.json
    public/
        index.html
        manifest.json
        robots.txt
    src/
        About.js
        App.css
        App.js
        Combined.css
        Components/
        connectdb.js
        Filter.css
        FIlter.js
        Home.js
        ImageSec.css
        ImageSec.js
        img/
        index.css
        index.js
        Navbar.css
        Navbar.js
        Results.css
        Results.js
        Search.css
        Search.js
        Section.css
nginx/
    default.conf
```

## Installation

1. Clone the repository:

```sh
git clone <repository_url>
cd prashnakhoj
```

2. Install dependencies for both frontend and backend:

```sh
cd frontend
npm install
cd ../backend
npm install
```

## Usage

1. Start the backend server:

```sh
cd backend
npm run dev
```

2. Start the frontend server:

```sh
cd frontend
npm start
```

3. Open your browser and navigate to `http://localhost:3000`.

## Docker Setup

1. Build and run the Docker containers:

```sh
docker-compose up --build
```

2. Open your browser and navigate to `http://localhost`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Detailed File Descriptions

### Backend

- **backend/app.js**: Main backend application file which sets up the Express server and handles search requests using Elasticsearch.

### Configuration

- **docker-compose.yml**: Docker Compose configuration file for setting up the frontend, backend, and Elasticsearch services.
- **nginx/default.conf**: Nginx configuration file for reverse proxying requests to the frontend and backend services.

