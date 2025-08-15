# MyPortfolio

A full-stack MERN portfolio web application with a React + TailwindCSS frontend and a Node.js + Express + MongoDB backend.

## Running Locally

1. Install dependencies for both client and server:
   ```bash
   cd myportfolio/client && npm install
   cd ../server && npm install
   cd ../..
   ```
2. From the root directory, run both frontend and backend together:
   ```bash
   npm run dev
   ```
   - This uses `concurrently` to start both the backend and frontend development servers.

## Deployment

### Backend (Render)
1. Push your code to a GitHub repository.
2. Go to [Render](https://render.com/) and create a new Web Service.
3. Connect your GitHub repo and select the `myportfolio/server` directory as the root for the backend service.
4. Set the build and start commands:
   - **Build Command:** `npm install`
   - **Start Command:** `npm run dev` or `node server.js`
5. Add any required environment variables (e.g., MongoDB URI).
6. Deploy the service.

### Frontend (Vercel or Netlify)
#### Vercel
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and import your repo.
3. Set the project root to `myportfolio/client`.
4. Set the build command to `npm run build` and the output directory to `dist`.
5. Deploy.

#### Netlify
1. Push your code to a GitHub repository.
2. Go to [Netlify](https://netlify.com/) and create a new site from Git.
3. Set the project root to `myportfolio/client`.
4. Set the build command to `npm run build` and the publish directory to `dist`.
5. Deploy.
