import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import AuthPage from './components/AuthPage';
import StudentDashboard from './components/StudentDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/aboutus';
import HowItWorks from './components/HowItWorks';
import ResourcesAndTips from './components/ResourcesAndTips';
import SuccessGuide from './components/SuccessGuide';

// Create Authentication Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dummy user data
  const dummyUser = {
    id: 1,
    email: 'ayomideogunsona13@gmail.com',
    password: 'admin', // In real app, this would be hashed
    fullName: 'Ibrahim Adebayo',
    phone: '+234 812 345 6789',
    userType: 'student',
    profilePicture: null,
    university: 'University of Lagos',
    course: 'Computer Science',
    level: '300 Level',
    joinDate: '2024-01-15',
    bio: 'Passionate about technology and software development. Aspiring to become a full-stack developer and contribute to Nigeria\'s growing tech ecosystem.',
    campaign: {
      id: 1,
      title: 'Help Ibrahim Study Computer Science at UNILAG',
      description: 'Supporting my journey to become a software engineer and contribute to Nigeria\'s tech ecosystem.',
      goal: 800000,
      raised: 450000,
      donors: 67,
      daysLeft: 45,
      views: 1234,
      shares: 89,
      status: 'active'
    }
  };

  // Check if user is already logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('finableUser');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('finableUser');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Check credentials against dummy user
      if (email === dummyUser.email && password === dummyUser.password) {
        const { password: _, ...userWithoutPassword } = dummyUser;
        setUser(userWithoutPassword);
        localStorage.setItem('finableUser', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
      } else {
        return { 
          success: false, 
          error: 'Invalid email or password. Please try again.' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Login failed. Please try again later.' 
      };
    }
  };

  const signup = async (formData) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check if email already exists (simulate)
      if (formData.email === dummyUser.email) {
        return { 
          success: false, 
          error: 'An account with this email already exists.' 
        };
      }

      // For demo purposes, create a new user profile
      const newUser = {
        id: Date.now(),
        email: formData.email,
        fullName: formData.fullName,
        phone: formData.phone,
        userType: formData.userType,
        profilePicture: null,
        university: '',
        course: '',
        level: '',
        joinDate: new Date().toISOString().split('T')[0],
        bio: '',
        campaign: formData.userType === 'student' ? {
          id: Date.now(),
          title: `Help ${formData.fullName} with Educational Funding`,
          description: 'Supporting my educational journey and future aspirations.',
          goal: 500000,
          raised: 0,
          donors: 0,
          daysLeft: 90,
          views: 0,
          shares: 0,
          status: 'draft'
        } : null
      };

      setUser(newUser);
      localStorage.setItem('finableUser', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      return { 
        success: false, 
        error: 'Registration failed. Please try again later.' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('finableUser');
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('finableUser', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    login,
    signup,
    logout,
    updateUser,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/auth?mode=login" replace />;
};

// Public Route Component (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

// Create a layout component that can access the location
function AppLayout() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  const isDashboardPage = location.pathname === '/dashboard';
  
  return (
    <>
      {!isAuthPage && !isDashboardPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route 
          path="/auth" 
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/students/resources" element={<ResourcesAndTips />} />
        <Route path="/students/success-guide" element={<SuccessGuide />} />
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* Only show footer if not on auth or dashboard page */}
      {!isAuthPage && !isDashboardPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </Router>
  );
}

export default App;