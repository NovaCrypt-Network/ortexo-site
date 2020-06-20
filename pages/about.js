import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">About us</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="about-us">
        <div className="page-container container">
          <h1>Our Team</h1>
          <div className="persons mt-3">
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/calix.png" alt="Launch Tech LLC - Calix Huang - Founder and CEO" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Calix Huang</h3>
                  </div>
                  <div className="person-info-links">
                    <a href="https://www.instagram.com/calix_huang/" target="_blank">
                      <img src="img/icons/social-media/instagram-dark.svg" alt="Launch Tech LLC - Calix Huang - Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/calix-huang/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" alt="Launch Tech LLC - Calix Huang - LinkedIn" />
                    </a>
                    <a href="mailto:calix@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" alt="Launch Tech LLC - Calix Huang - Email" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Founder, Technology</p>
                <small className="person-description">
                  Calix Huang is a self-taught software engineer who specializes in full-stack development and is employed by multiple SaaS companies. After delivering many influential speeches several major hackathons, his goal is to create his own successful SaaS company.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/neha.png" alt="Launch Tech LLC - Neha Washikar" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Neha Washikar</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/nehawashikar/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" alt="Launch Tech LLC - Neha Washikar - Instagram" />
                    </a>
                    <a href="mailto:neha@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" alt="Launch Tech LLC - Neha Washikar - Email" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Outreach, Social Media</p>
                <small className="person-description">
                  Neha Washikar works with the Outreach/ Social Media team in Launch Tech. She is currently the Vice President of Digital Marketing at her school’s DECA chapter, and was the Director of Outreach last year. In her free time, Neha enjoys playing volleyball and painting.
                </small>
              </div>
            </div>
          </div>

          <h1 className="mt-5">Advisors</h1>
          <div className="advisors persons mt-3">
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/jack.png" alt="Launch Tech LLC - Jack Chen" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Jack Chen</h3>
                <p className="person-title">Software Engineer @ Box</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/nathaniel.png" alt="Launch Tech LLC - Nathaniel Diong" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Nathaniel Diong</h3>
                <p className="person-title">Founder @ Future Minds Network</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/chinmayi.png" alt="Launch Tech LLC - Chinmayi Balusu" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Chinmayi Balusu</h3>
                <p className="person-title">Founder + CEO @ Simply Neuroscience</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/skyler.png" alt="Launch Tech LLC - Skyler Basco" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Skyler Basco</h3>
                <p className="person-title">Chief Operating Officer @ STEAM On</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/ashley.png" alt="Launch Tech LLC - Ashley Gauba" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Ashley Gauba</h3>
                <p className="person-title">Former Product Design Intern @ eBay</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/harsh.png" alt="Launch Tech LLC - Harsh Tekwani" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Harsh Tekwani</h3>
                <p className="person-title">Director of IT @ Alpha Kappa Psi - Iota Xi</p>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/rafael.png" alt="Launch Tech LLC - Rafael Cenzano" className="person-image" />
              </div>
              <div className="person-content">
                <h3 className="person-name">Rafael Cenzano</h3>
                <p className="person-title">Founder + Lead Director @ Hack the Fog</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
