import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard';
import ApplyLeave from './components/ApplyLeave';
import LeaveDetails from './components/LeaveDetails';
import Login from './components/Login';
import NavBar from './components/NavBar';
import UserDashboard from './components/UserDashboard';
function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route path='/user-dashboard' element={<UserDashboard/>}/>
        <Route path='/apply-leave' element={<ApplyLeave/>}/>
        <Route path='/leave/:id' element={<LeaveDetails/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
