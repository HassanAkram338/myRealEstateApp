import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';
import Register from './../pages/Auth/Register';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>
          <Link className='hover:text-violet-900 transition' to='/auth/login'>
            Login
          </Link>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
