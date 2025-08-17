import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import TestPage from './pages/TestPage.jsx';
import AppLayout from './layout/AppLayout.jsx';

function PrivateRoute() {
  const token = localStorage.getItem('adminToken');
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
}

// Layout wrapper component
function LayoutWrapper({ showHero = false }) {
  return (
    <AppLayout showHero={showHero}>
      <Outlet />
    </AppLayout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with layout */}
        <Route element={<LayoutWrapper showHero={true} />}>
          <Route path="/" element={<Home />} />
        </Route>
        
        <Route element={<LayoutWrapper />}>
          <Route path="/test" element={<TestPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Protected admin route */}
        <Route element={<PrivateRoute />}>
          <Route element={<LayoutWrapper />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>

        {/* 404 route */}
        <Route path="*" element={
          <LayoutWrapper>
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl">Page not found</p>
            </div>
          </LayoutWrapper>
        } />
      </Routes>
    </Router>
  );
}

export default App;
