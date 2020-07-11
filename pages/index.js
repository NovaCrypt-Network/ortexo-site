import Head from 'next/head'
import Layout from '../components/Layout.js'
import Link from 'next/link'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - A SaaS product holding company</title>
        <meta name="description" content="Launch Tech is a SaaS (Software as a Service) product holding company, created for launching real-world software applications. We create products that are useful, meaningful, and applicable to different people and different situations around the world. We try to build, market, and deploy software through partnerships, events, and sponsors." />
      </Head>

      <section className="header" id="header">
        <div className="container">
          <div className="header-grid">
            <div className="header-grid-left">
              <h1 style={{ "font-size": "60px", "font-weight": "bold" }}>Launch Tech LLC</h1>
              <h4 className="header-grid-left-sub-header">
                Launch Tech is a SaaS product holding company, dedicated to launching real-world software applications.
              </h4>
              <div className="cta-buttons mt-4">
                <Link href="/opportunities">
                  <button className="button ghost-cta-button-light">Job Opportunities</button>
                </Link>
                <Link href="/products">
                  <a className="button solid-cta-button-light">Check out our products!</a>
                </Link>
              </div>
            </div>
            <div className="header-grid-right">
              <img src="img/illustrations/header.png" alt="Launch Tech LLC header illustration - floating building" className="header-grid-right-illustration" />
            </div>
          </div>
        </div>
      </section>

      <div className="waves">
        <img src="img/waves/header-wave.png" className="flipped-wave wave" />
      </div>

      <section className="about" id="about">
        <div className="section-container">
          <div className="container">
            <div className="about-grid">
              <div className="about-grid-left">
                <img src="img/illustrations/about.png" alt="Launch Tech LLC digital marketing illustration" className="about-grid-left-illustration" />
              </div>
              <div className="about-grid-right">
                <h1 className="section-header">About Launch Tech</h1>
                <p>
                  Launch Tech LLC is a SaaS (Software as a Service) product holding company, dedicated to launching real-world software applications. We create products that are useful, meaningful, and applicable to different people and different situations around the world. We also partner with other organizations to make this into a reality!
                  <br/><br/>
                  Though we are a SaaS product company, we try to be open with our processes, builds, and deadlines. We have a calendar that shares all of the things we're working on, and when certain events/product-builds will start, end, and be deployed.
                </p>
                <div className="cta-buttons mt-4">
                  <Link href="/opportunities">
                    <button className="button ghost-cta-button-dark">Job Opportunities</button>
                  </Link>
                  <Link href="/products">
                    <a className="button solid-cta-button-dark">Check out our products!</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products-section" id="featured-products">
        <div className="section-container">
          <div className="container">
            <h1 className="section-header">Featured Products</h1>
            <div className="products-grid mt-5">
              <a className="product-link" href="https://npocore.com" target="_blank">
                <img className="product-image" src="img/products/npocore/desktop.png" alt="Launch Tech LLC - NPO Core - Website Image" />
                <div className="text-center mt-3">
                  <h2>NPO Core</h2>
                  <p>Your one-stop shop for all things non-profits</p>
                </div>
              </a>
              <a className="product-link" href="http://anojs.com" target="_blank">
                <img className="product-image" src="img/products/anojs/desktop.png" alt="Launch Tech LLC - Ano.js - Website Image" />
                <div className="text-center mt-3">
                  <h2>Ano.js</h2>
                  <p>Web Animation made easy</p>
                </div>
              </a>
              <a className="product-link" href="https://www.w3hacks.com/" target="_blank">
                <img className="product-image" style={{marginLeft: "50%", marginRight: "50%"}} src="img/products/w3hacks/desktop2.png" alt="Launch Tech LLC - W3Hacks - Website Image" />
              </a>
            </div>
            <div className="text-center mt-3">
              <h2 style={{marginLeft: "43%", marginRight: "50%"}}>W3Hacks</h2>
              <p style={{marginLeft: "1%", marginRight: "3%"}}>Learn by doing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us" id="contact-us">
        <div className="section-container">
          <div className="container">
            <h1 className="section-header">Contact Us!</h1>
            <div className="contact-us-grid">
              <div className="contact-us-grid-left">
                <form action="https://formspree.io/hello@launchtechllc.com" method="post">
                  <label>Name:</label>
                  <input className="ghost-input" type="text" name="Name" placeholder="Name" />

                  <label>Email:</label>
                  <input className="ghost-input" type="email" name="Email" placeholder="Email" />

                  <label>Message:</label>
                  <textarea className="ghost-input" name="Message" rows="5" placeholder="Message"></textarea>
                  <input type="submit" className="button solid-cta-button-dark w-100" value="Contact Us!" />
                </form>
              </div>
              <div className="contact-us-grid-right">
                <h4>We're completely open to:</h4>
                <ul className="ml-5">
                  <li>Product Partnerships</li>
                  <li>Community/Corporate partnerships</li>
                  <li>Collaborating on events</li>
                  <li>Product ideas/requests</li>
                  <li>Inquiries and questions</li>
                </ul>
                <p>
                  <strong>We promise to respond within 24-48 hours after you email us!</strong>
                </p>

                <div className="ml-4">
                  <p className="contact-us-grid-left-contact-item">
                    <a href="mailto:hello@launchtechllc.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                      <span>hello@launchtechllc.com</span>
                    </a>
                  </p>
                  <p className="contact-us-grid-left-contact-item">
                    <a href="https://calendly.com/launch-tech" target="_blank">
                      <img src="img/icons/contact/calendar-dark.svg" />
                      <span>Schedule a Call</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="waves">
        <img src="img/waves/header-wave.png" className="wave" />
      </div>
    </Layout>
  )
}
