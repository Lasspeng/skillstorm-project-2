
import Profile from './pages/Profile';
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
import { useState } from 'react';
import { User } from './Types';


export default function App() {
  
  const [jwt, setJwt] = useState<string>('');
  const [user, setUser] = useState<User | undefined>();
  // Function to handle logout
  const handleLogout = () => {
    setJwt('');
  };
  
const styles = {
  footer: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #dee2e6",
      marginTop: "20px",
  },
  text: {
      margin: 0,
      fontSize: "14px",
      color: "#6c757d",
  },
};

  return (
    <>

      <BrowserRouter basename='/'>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            {jwt ? (
              <>
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
                  <Link to="/signin" className="nav-link" onClick={handleLogout}>Logout</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
            )}
          </ul>
        </nav>
          <div className='content'>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/profile' element={<Profile user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/tax-return' element={<TaxReturn />} />
              <Route path='/signin' element={<SignIn setJwt={setJwt} />} />
              <Route path='/taxprofile' element={<TaxProfile />} />
              <Route path='/w2form' element={<W2Form />} />
              <Route path='/form1099' element={<Form1099 />} />
              <Route path='/filingstatus' element={<FilingStatus />} />
              <Route path='/review' element={<Review />} />
              <Route path='/signup' element={<SignUp setUser={setUser} />} />
          </Routes>
          </div>
      </BrowserRouter>
      <footer className="footer">
        <p>© 2024 Tax Pro. All rights reserved.</p>
      </footer>
    </>
  )
}
