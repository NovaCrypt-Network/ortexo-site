import React, { useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/modules/layout.module.scss'
import { initGA, logPageView } from '../utils/analytics.js'

export default ({ children }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  });

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <Link className="nav-link" href="/">
            <a className="navbar-brand">
              <img className="navbar-brand-image" src="/img/logos/launchtech.png" alt="Launch Tech LLC logo" />
            </a>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team">
                  <a className="nav-link">Team</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/partners">
                  <a className="nav-link">Partners</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products">
                  <a className="nav-link">Products</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/opportunities">
                  <a className="nav-link">Opportunities</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <section className="footer" id="footer">
        <div className="section-container">
          <div className="container">
            <div className="footer-grid">

              <div className="footer-grid-links">
                <h3>Navigate</h3>
                <li className="footer-grid-links-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/partners">
                    <a>Partners</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/opportunities">
                    <a>Opportunities</a>
                  </Link>
                </li>
              </div>

              <div className="footer-grid-links">
                <h3>Legal</h3>
                <li className="footer-grid-links-item">
                  <Link href="/corporate/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/corporate/terms-of-service">
                    <a>Terms of Service</a>
                  </Link>
                </li>
                <li className="footer-grid-links-item">
                  <Link href="/corporate/credits">
                    <a>Credits</a>
                  </Link>
                </li>
              </div>

              <div className="footer-grid-contact">
                <h3>Contact</h3>
                <p className="footer-grid-contact-item">
                  <a href="mailto:hello@launchtechllc.com" target="_blank">
                    <img src="/img/icons/contact/email-light.svg" />
                    <span>hello@launchtechllc.com</span>
                  </a>
                </p>
                <p className="footer-grid-contact-item">
                  <a href="https://calendly.com/launch-tech" target="_blank">
                    <img src="/img/icons/contact/calendar.svg" />
                    <span>Schedule a Call</span>
                  </a>
                </p>
              </div>

              <div className="copyright-container">
                <div className="text-center">
                  <img style={{ width: '100px' }} src="/img/logos/launchtech.png" alt="Launch Tech LLC logo" />
                </div>

                <div className="social-media">
                  <a href="https://www.linkedin.com/company/launch-tech-llc/" target="_blank">
                    <img src="/img/icons/social-media/linkedin-light.svg" alt="Launch Tech LLC LinkedIn" className="social-media-icon" />
                  </a>
                  <a href="https://github.com/launchtechllc" target="_blank">
                    <img src="/img/icons/social-media/github-light.svg" alt="Launch Tech LLC GitHub organization" className="social-media-icon" />
                  </a>
                  <a href="https://www.instagram.com/launchtechllc/" target="_blank">
                    <img src="/img/icons/social-media/instagram-light.svg" alt="Launch Tech LLC Instagram" className="social-media-icon" />
                  </a>
                  <a href="https://trello.com/launchtechllc/home" target="_blank">
                    <img src="/img/icons/social-media/trello-light.svg" alt="Launch Tech LLC Trello organization" className="social-media-icon" />
                  </a>
                  <a href="mailto:hello@launchtechllc.com" target="_blank">
                    <img src="/img/icons/contact/email-light.svg" alt="Launch Tech LLC Email" className="social-media-icon" />
                  </a>
                </div>

                <small className="copyright">&copy; 2020 Launch Tech LLC. Built by <a href="https://www.calix.dev" target="_blank">Calix Huang</a>. All rights reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
