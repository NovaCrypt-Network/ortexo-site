import Head from 'next/head'
import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - About Us</title>
        <meta name="description" content="Welcome the Launch Tech LLC team, along with our advisors! Get to know the people that create, build, market, and deploy all of Launch Tech's SaaS products and software applications!" />
      </Head>

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
                      <img src="img/icons/social-media/instagram-dark.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/calix-huang/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:calix@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
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
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:neha@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">Outreach, Social Media</p>
                <small className="person-description">
                  Neha Washikar works with the Outreach/ Social Media team in Launch Tech. She is currently the Vice President of Digital Marketing at her school’s DECA chapter, and was the Director of Outreach last year. In her free time, Neha enjoys playing volleyball and painting.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/angela.png" alt="Launch Tech LLC - Angela Chen" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Angela Chen</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/angela-chen-8235521a9/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:angela@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Angela Chen is the Outreach Coordinator at Project Tech Conferences, a student NPO that runs technology events for students, and hopes to further her own programming knowledge. In her free time, Angela enjoys running, hurdling and listening to music.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/rex.png" alt="Launch Tech LLC - Rex Liu" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Rex Liu</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/rexliu3/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:rex@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Rex Liu is an independent software engineer developing web and mobile applications for clients and creating personal projects to dive deeper into the world of CS. He is also an avid badminton and tennis player.
                </small>
              </div>
            </div>
            <div className="person" data-aos="zoom-in">
              <div className="image-cropper">
                <img src="img/people/molly.png" alt="Launch Tech LLC - Molly Xu" className="person-image" />
              </div>
              <div className="person-content">
                <div className="person-info">
                  <div>
                    <h3 className="person-name">Molly Xu</h3>
                  </div>
                  <div className="person-info-links">
                    <div></div>
                    <a href="https://www.linkedin.com/in/mollyxu9/" target="_blank">
                      <img src="img/icons/social-media/linkedin-dark.svg" />
                    </a>
                    <a href="mailto:neha@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                    </a>
                  </div>
                </div>
                <p className="person-title">QA Tester</p>
                <small className="person-description">
                  Molly is a prospective Computer Science and Business Administration double degree student at the University of Waterloo. When she isn’t coding, you can find her listening to Latin pop or binge-watching La Casa de Papel (Money Heist).
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
