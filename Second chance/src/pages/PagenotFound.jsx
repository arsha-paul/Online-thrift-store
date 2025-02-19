import React from 'react';
import './pnf.css'
import Navbar from '../components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const PagenotFound = () => {
  return (
    <>
    <Navbar />
    <div className='pnf'>
      <h1 className='pnf-title'>404</h1>
      <h2>Oops ! Page Not Found</h2>
      <Link to='/' className="pnf-btn">
        Go Back
      </Link>
    </div>
</>
  );
};

export default PagenotFound