
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import Landing from './pages/Landing'
import TaxProfile from './pages/taxforms/TaxProfile';
import FilingStatus from './pages/taxforms/FilingStatus';
import W2Form from './pages/taxforms/W2Form';
import Form1099 from './pages/taxforms/Form1099';
import Review from './pages/taxforms/Review';
import TaxReturn from './pages/TaxReturn';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>

      <BrowserRouter basename='/'>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/taxprofile" className="nav-link">Start Taxes</Link>
            </li>
            <li className="nav-item">
              <Link to="/tax-return" className="nav-link">View Taxes</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link">Logout</Link>
            </li>
          </ul>
        </nav>
          <div className='content'>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/tax-return' element={<TaxReturn />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/taxprofile' element={<TaxProfile />} />
              <Route path='/w2form' element={<W2Form />} />
              <Route path='/form1099' element={<Form1099 />} />
              <Route path='/filingstatus' element={<FilingStatus />} />
              <Route path='/review' element={<Review />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
          </div>
      </BrowserRouter>
      
    </>
  )
}
