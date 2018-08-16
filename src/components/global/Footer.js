import React, { Fragment } from 'react';
import MailingList from './MailingList';

const Footer = () => (
  <Fragment>
    <MailingList />

    <footer className="push">
      <div className="content">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-header">
              <span className="hide-content">Active Hustle</span>
            </div>
            <p>
              Esay to use and affordable equipment
            </p>
          </div>
          <nav className="footer-links">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">Our partners</span>
                
              </dt>
              <dd>
                <a href="migueltransportacion.com">Miguel Angel Transportacion</a>
              </dd>
              <dd>
                <a href="graphsvid.com">Important stuff</a>
              </dd>
            </dl>
          </nav>
          <nav className="footer-social">
            <dl>
              <dt className="footer-header">
                <span className="hide-content">Follow us on social media</span>
              </dt>
              <dd>
                <a href="/">Facebook</a>
              </dd>
              <dd>
                <a href="/">Instagram</a>
              </dd>
            </dl>
          </nav>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
