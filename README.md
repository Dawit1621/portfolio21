# Portfolio Project

A full-stack MERN portfolio web application with a React + TailwindCSS frontend and a Node.js + Express + MongoDB backend.

## Project Structure

```
portfolio/
├── myportfolio/
│   ├── client/          # React frontend
│   └── server/          # Node.js backend
├── package.json         # Root package.json with dev script
└── README.md           # This file
```

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Setup Instructions

1. **Install dependencies for all packages:**
   ```bash
   # Install root dependencies (concurrently)
   npm install
   
   # Install client dependencies
   cd myportfolio/client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   
   # Return to root
   cd ../..
   ```

2. **Set up environment variables:**
   Create a `.env` file in `myportfolio/server/` with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

3. **Run the development servers:**
   ```bash
   # From the root directory
   npm run dev
   ```
   
   This will start both servers concurrently:
   - **Backend:** http://localhost:5000
   - **Frontend:** http://localhost:5173 (Vite default port)

### Individual Server Commands

If you need to run servers individually:

```bash
# Backend only
cd myportfolio/server && npm run dev

# Frontend only  
cd myportfolio/client && npm run dev
```

## Deployment

### Backend Deployment (Render)

1. **Prepare your backend:**
   - Ensure your `server.js` has proper error handling
   - Add a `start` script in `myportfolio/server/package.json` (already exists)
   - Make sure your MongoDB connection uses environment variables

2. **Deploy to Render:**
   - Push your code to a GitHub repository
   - Go to [Render](https://render.com/) and create a new Web Service
   - Connect your GitHub repository
   - Set the **Root Directory** to `myportfolio/server`
   - Configure the service:
     - **Build Command:** `npm install`
     - **Start Command:** `npm start`
     - **Environment:** Node
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret
     - `EMAIL_USER`: Your email
     - `EMAIL_PASS`: Your email app password
   - Deploy the service

3. **Update frontend API URL:**
   - Update your frontend API calls to use the Render URL
   - Example: `https://your-app-name.onrender.com/api`

### Frontend Deployment

#### Option 1: Vercel (Recommended)

1. **Prepare your frontend:**
   - Ensure your API calls use environment variables
   - Create a `.env` file in `myportfolio/client/`:
     ```env
     VITE_API_URL=https://your-backend-url.onrender.com
     ```

2. **Deploy to Vercel:**
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com/) and import your repository
   - Configure the project:
     - **Framework Preset:** Vite
     - **Root Directory:** `myportfolio/client`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Add environment variables if needed
   - Deploy

#### Option 2: Netlify

1. **Prepare your frontend:**
   - Same as Vercel preparation

2. **Deploy to Netlify:**
   - Push your code to GitHub
   - Go to [Netlify](https://netlify.com/) and create a new site from Git
   - Connect your repository
   - Configure the build settings:
     - **Base directory:** `myportfolio/client`
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Add environment variables if needed
   - Deploy

### Environment Variables for Production

**Backend (Render):**
```env
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secure_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

**Frontend (Vercel/Netlify):**
```env
VITE_API_URL=https://your-backend-app.onrender.com
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev --prefix myportfolio/server` - Start only the backend
- `npm run dev --prefix myportfolio/client` - Start only the frontend

## Technologies Used

- **Frontend:** React, Vite, TailwindCSS, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Authentication:** JWT
- **Email:** Nodemailer
- **Development:** Concurrently, Nodemon

## Support

For issues or questions, please check the individual README files in the `myportfolio/client/` and `myportfolio/server/` directories for more specific information.
