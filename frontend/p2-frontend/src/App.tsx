
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

import { useTranslation } from 'react-i18next';



export default function App() {
  
  const [jwt, setJwt] = useState<string>('');
  const [user, setUser] = useState<User | undefined>();
  // Function to handle logout
  const handleLogout = () => {
    setJwt('');
  };

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>

      <BrowserRouter basename='/'>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">{t('navbar.home')}</Link>
            </li>
            {jwt ? (
              <>
                <li className="nav-item">
                  <Link to="/taxprofile" className="nav-link">{t('navbar.startTaxes')}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tax-return" className="nav-link">{t('navbar.viewTaxes')}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">{t('navbar.profile')}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link" onClick={handleLogout}>{t('navbar.logout')}</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/signin" className="nav-link">{t('navbar.signin')}</Link>
              </li>
            )}
             <li className="nav-item">
              <button className="lang-button" onClick={toggleLanguage}>
                {currentLanguage === 'en' ? 'Español' : 'English'}
              </button>
            </li>
          </ul>
        </nav>
          <div className='content'>
          <Routes>
              <Route path='/' element={<Landing user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/profile' element={<Profile user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/tax-return' element={<TaxReturn user={user} jwt={jwt} />} />
              <Route path='/signin' element={<SignIn setUser={setUser} setJwt={setJwt} />} />
              <Route path='/taxprofile' element={<TaxProfile user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/w2form' element={<W2Form user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/form1099' element={<Form1099 user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/filingstatus' element={<FilingStatus user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/review' element={<Review user={user} setUser={setUser} jwt={jwt} />} />
              <Route path='/signup' element={<SignUp />} />
          </Routes>
          </div>
      </BrowserRouter>
      <footer className="footer">
        <p>{t('footer.text')}</p>
      </footer>
    </>
  )
}
