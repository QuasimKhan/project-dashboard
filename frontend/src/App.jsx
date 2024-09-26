import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoutes';
import About from './pages/About';
import IslamicBooks from './pages/IslamicBooks';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path='/dashboard/about' element={<ProtectedRoute><About /></ProtectedRoute>}/>
        <Route path='/dashboard/islamicbooks' element={<ProtectedRoute><IslamicBooks /></ProtectedRoute>}/>
  

        {/* Catch-all Route to redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
