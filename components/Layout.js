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
      {/* <div style={{ "background-color": "white" }}>
        <div className="container text-center py-3">
          <p className="mb-0" style={{ "fontSize": "17.5px", "fontWeight": "600" }}>Want to learn how to expand your organization? <a style={{ "color": "black", "textDecoration": "underline" }} href="https://zmurl.com/SSN" target="_blank">Register For Secrets of Successful NPOs</a> 🚀</p>
        </div>
      </div> */}
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img className="navbar-brand-image" src="/img/launchtech_white.png" alt="Ortexo logo" style={{width: "150px"}} />
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
                  <a className="nav-link" href="https://blog.ortexo.com/" target="_blank">Blog</a>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
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
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <section className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="copyright-container">
              <img src="/img/launchtech_white.png" alt="Ortexo logo" />
              <br/>
              <small className="copyright">&copy; 2020 Ortexo All rights reserved.</small>
            </div>

            <div></div>

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

              <div className="social-media mb-3">
                <a href="https://www.linkedin.com/company/ortexo/" target="_blank">
                  <img src="/img/icons/social-media/linkedin-light.svg" alt="Ortexo LinkedIn" className="social-media-icon" />
                </a>
                <a href="https://github.com/ortexo" target="_blank">
                  <img src="/img/icons/social-media/github-light.svg" alt="Ortexo GitHub organization" className="social-media-icon" />
                </a>
                <a href="https://www.instagram.com/ortexo/" target="_blank">
                  <img src="/img/icons/social-media/instagram-light.svg" alt="Ortexo Instagram" className="social-media-icon" />
                </a>
                <a href="mailto:hello@rtexo.com" target="_blank">
                  <img src="/img/icons/contact/email-light.svg" alt="Ortexo Email" className="social-media-icon" />
                </a>
              </div>

              <p className="footer-grid-contact-item">
                <a href="mailto:hello@ortexo.com" target="_blank">
                  <img src="/img/icons/contact/email-light.svg" />
                  <span>hello@ortexo.com</span>
                </a>
              </p>
              <p className="footer-grid-contact-item">
                <a href="https://calendly.com/ortexo" target="_blank">
                  <img src="/img/icons/contact/calendar.svg" />
                  <span>Schedule a Call</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
