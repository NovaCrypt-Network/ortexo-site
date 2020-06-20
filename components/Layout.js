import styles from '../styles/modules/layout.module.scss'

export default ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <a href="https://www.launchtechllc.com" className="navbar-brand">
            <img className="navbar-brand-image" src="/img/logos/launchtech.png" alt="Launch Tech LLC logo" />
          </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/partners">Partners</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/opportunities">Opportunities</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {children}

      <section className="footer" id="footer">
      <div className="section-container container">
        <div className="footer-grid">

          <div className="footer-grid-links">
            <h3>Navigate</h3>
            <li className="footer-grid-links-item">
              <a href="/">Home</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="/about">About</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="/partners">Partners</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="/products">Products</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="/opportunities">Opportunities</a>
            </li>
          </div>

          <div className="footer-grid-links">
            <h3>Legal</h3>
            <li className="footer-grid-links-item">
              <a href="corporate/privacy-policy">Privacy Policy</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="corporate/terms-of-service">Terms of Service</a>
            </li>
            <li className="footer-grid-links-item">
              <a href="corporate/credits">Credits</a>
            </li>
          </div>

          <div className="footer-grid-contact">
            <h3>Contact</h3>
            <p className="footer-grid-contact-item">
              <a href="mailto:hello@launchtechllc.com" target="_blank">
                <img src="img/icons/contact/email-light.svg" />
                <span>hello@launchtechllc.com</span>
              </a>
            </p>
            <p className="footer-grid-contact-item">
              <a href="https://calendly.com/launch-tech" target="_blank">
                <img src="img/icons/contact/calendar.svg" />
                <span>Schedule a Call</span>
              </a>
            </p>
          </div>

          <div className="copyright-container">
            <div className="text-center">
              <img style={{ width: '100px' }} src="img/logos/launchtech.png" alt="Launch Tech LLC logo" />
            </div>

            <div className="social-media">
              <a href="https://www.linkedin.com/company/launch-tech-llc/" target="_blank">
                <img src="img/icons/social-media/linkedin-light.svg" alt="Launch Tech LLC LinkedIn" className="social-media-icon" />
              </a>
              <a href="https://github.com/launchtechllc" target="_blank">
                <img src="img/icons/social-media/github-light.svg" alt="Launch Tech LLC GitHub organization" className="social-media-icon" />
              </a>
              <a href="https://www.instagram.com/launchtechllc/" target="_blank">
                <img src="img/icons/social-media/instagram-light.svg" alt="Launch Tech LLC Instagram" className="social-media-icon" />
              </a>
              <a href="https://trello.com/launchtechllc/home" target="_blank">
                <img src="img/icons/social-media/trello-light.svg" alt="Launch Tech LLC Trello organization" className="social-media-icon" />
              </a>
              <a href="mailto:hello@launchtechllc.com" target="_blank">
                <img src="img/icons/contact/email-light.svg" alt="Launch Tech LLC Email" className="social-media-icon" />
              </a>
            </div>

            <small className="copyright">&copy; 2020 Launch Tech LLC. Built by <a href="https://www.calix.dev" target="_blank">Calix Huang</a>. All rights reserved.</small>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
