import React, { Fragment } from 'react'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import NotFound from './pages/NotFound';
import "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from './apis/AuthContextApi';
import ProtectedRouter from './apis/ProtectedRouter';
import PublicRouter from './apis/PublicRoute';
import Profile from './components/profile/Profile';
import ProfileDefault from './components/profile/ProfileDefault';
import UploadPhoto from './components/profile/UploadPhoto';
import ResetPassword from './components/authentication/ResetPassword';
import PhoneAuth from './components/authentication/PhoneAuth';
import UpdateProfileData from './components/profile/UpdateProfileData';
import Admin from './admin/Admin';
import AddHotel from './admin/AddHotel';
import AdminRoute from './apis/AdminRoute';
import ListOfUsers from './admin/ListOfUsers';
import Users from './admin/Users';
import AdminPanelContainer from './admin/AdminPanelContainer';
import UserDetails from './admin/UserDetails';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Navbar />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          >
            <Route
              path="add-hotel"
              element={
                <AdminRoute>
                  <AddHotel />
                </AdminRoute>
              }
            />
            <Route
              index
              element={
                <AdminRoute>
                  <AdminPanelContainer />
                </AdminRoute>
              }
            />
            <Route
              path="users"
              element={
                <AdminRoute>
                  <Users />
                </AdminRoute>
              }
            />
            <Route
              path=":id"
              element={
                <AdminRoute>
                  <UserDetails />
                </AdminRoute>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRouter>
                <Register />
              </PublicRouter>
            }
          />
          <Route
            path="/reset-password"
            element={
              <PublicRouter>
                <ResetPassword />
              </PublicRouter>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRouter>
                <Profile />
              </ProtectedRouter>
            }
          >
            <Route
              index
              element={
                <ProtectedRouter>
                  <ProfileDefault />
                </ProtectedRouter>
              }
            />
            <Route
              path="upload-pp"
              element={
                <ProtectedRouter>
                  <UploadPhoto />
                </ProtectedRouter>
              }
            />
            <Route
              path="upload-profile"
              element={
                <ProtectedRouter>
                  <UpdateProfileData />
                </ProtectedRouter>
              }
            />
          </Route>
          <Route path="/phone-auth" element={<PhoneAuth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App
