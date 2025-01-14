import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AuthLayout from './Shared/AuthLayout/AuthLayout';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import RequestReset from './Components/RequestReset/RequestReset';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import VerifyUser from './Components/VerifyUser/VerifyUser';
import Notfound from './Shared/NotFound/Notfound';
import MasterLayout from './Shared/MasterLayout/MasterLayout';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import Users from './Components/Users/Users';
import Tasks from './Components/Tasks/Tasks';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import ProtectedRoute from './Shared/ProtectedRoute/ProtectedRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  let {userData,saveUserData,userRole}= useContext(AuthContext);

  const routes = createBrowserRouter([{
    path: '/',
    element: <AuthLayout />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Login saveUserData={saveUserData} /> },
      { path: 'login', element: <Login saveUserData={saveUserData} /> },
      { path: 'register', element: <Register /> },
      { path: 'request-reset', element: <RequestReset /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'verify-user', element: <VerifyUser /> },
      { path: 'change-password', element: <ChangePassword /> }
    ]
  }, {
    path: 'dashboard',

    element:
      <ProtectedRoute userData={userData}>
        <MasterLayout userData={userData} />
      </ProtectedRoute>
    ,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'projects', element: <Projects /> },
      { path: 'users', element: <Users /> },
      { path: 'tasks', element: <Tasks /> },
    ]
  }]);

  return (
    <> <ToastContainer />
     <RouterProvider router={routes} />
    </>

  )
}

export default App
