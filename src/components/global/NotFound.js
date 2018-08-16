import React from 'react';

import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Footer from './Footer';

const NotFound = () => (
  <div className="broken-body">
    <MobileNav />
    <CartHeader />
    <main role="main" id="container" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h2>404</h2>
          <p>Uh oh, looks like we don't have that!</p>
          <a href="/" className="btn">
            Back to home
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default NotFound;
