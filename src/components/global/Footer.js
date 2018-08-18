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
            <h5>Active Hustle </h5>
            <p>
              Easy to use and affordable equipment
            </p>
          </div>
          <nav className="footer-links">
            <dl>
              <dt className="footer-header">
              <h5> Our partners </h5>
                <span className="hide-content">Our partners</span>
                
              </dt>
              <dd>
                <a href="https://migueltransportacion.com/">Miguel Angel transportacion</a>
              </dd>
              <dd>
                <a href="http://www.graphsvid.com/">Important stuff</a>
              </dd>
            </dl>
          </nav>
          <nav className="footer-social">
            <dl>
              <dt className="footer-header">
              <h5> Follow us on social media </h5>
                <span className="hide-content">Follow us on social media</span>
              </dt>
              <dd>
                <a href="/">Facebook (coming soon)</a>
              </dd>
              <dd>
                <a href="/">Instagram (coming soon)</a>
              </dd>
            </dl>
          </nav>
        </div>
      </div>
    </footer>
  </Fragment>
);

export default Footer;
