import Head from "next/head";
import Layout from "../components/Layout.js";
import Link from "next/link";



export default () => {
  return (
    <Layout>
      <Head>
        <title>Ortexo - A Launching innovative technologies</title>
        <meta
          name="description"
          content="Accelerating student success by providing access to new knowledge, insights and opportunities."
        />

        <link rel="stylesheet" href="/css/odometer.css" />
        <script src="/js/odometer.js" />
        <script src="/js/index.js" />
        
      </Head>

      <section className="header" id="header">
        <div className="container">
          <div className="header-grid">
            <div className="header-grid-left">
              <h1 style={{ fontSize: "40px", fontWeight: "bold" , marginBottom: "20px" }}>
                Launching Innovative Technologies
              </h1>
              <h4 className="header-grid-left-sub-header">
                Ortexo accelerates success by exposing students to new knowledge, opportunities, and innovative software technologies.
              </h4>
              <div className="cta-buttons mt-4">
                <button
                  onClick={() => {
                    document
                      .getElementById("about")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="button ghost-cta-button-light"
                >
                  Learn more
                </button>
                <Link href="/products">
                  <a className="button solid-cta-button-light">Our products!</a>
                </Link>
              </div>
            </div>
            <div className="header-grid-right">
              <img
                src="img/illustrations/header.svg"
                className="header-grid-right-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="waves">
        <img src="img/waves/header-wave.png" className="flipped-wave wave" />
      </div>

      <section className="trusted-by" id="trusted-by">
        <div className="container py-3">
          <div className="trusted-by-statement">TRUSTED BY</div>
          <div className="trusted-by-grid">
            <img className="px-3" src="/img/logos/trusted-by/tks.png" alt="" />
            <img className="" src="/img/logos/trusted-by/launchx.png" alt="" />
            <img className="px-3" src="/img/logos/leangap.png" alt="" />
            <img
              className="px-3"
              src="/img/logos/bluestampengineering.png"
              alt=""
            />
            <img
              id="mobile-disappear"
              className="px-3"
              src="/img/logos/future-minds.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-container">
            <h2>Software is changing the world.</h2>
            <p>
              Students today are a fundamental part of a triad consisting of themselves, technology, and the world—they use technology to change the world; the way the world integrates with technology shapes their experiences; and their quick and easy access to the rest of the world helps them continue to help technology advance.
            </p>
          </div>
          <div className="statistics-grid">
            <div className="statistic">
              Total interactions
              <span className="number">
                <span class="odometer" id="interactions_odometer">
                  0
                </span>
                +
              </span>
            </div>
            <div className="statistic">
              Happy users
              <span className="number">
                <span class="odometer" id="users_odometer">
                  0
                </span>
                +
              </span>
            </div>
            <div className="statistic">
              Partners
              <span className="number">
                <span class="odometer" id="partners_odometer">
                  0
                </span>
                +
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products-section" id="featured-products">
        <div className="section-container">
          <div className="container">
            <h1 className="featured-products">Featured Products</h1>
            <div className="products-grid mt-5">
              

              <a
                className="product-link"
                href="https://npocore.com"
                target="_blank"
              >
                <img
                  className="product-image"
                  src="img/products/npocore/desktop.png"
                  alt="Ortexo - NPO Core - Website Image"
                />
                <div className="text-center mt-3">
                  <h2>NPO Core</h2>
                  <p>Your one-stop shop for all things non-profits</p>
                </div>
                </a>
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
                <form
                  action="https://formspree.io/hello@ortexo.com"
                  method="post"
                >
                  <label>Name:</label>
                  <input
                    className="ghost-input"
                    type="text"
                    name="Name"
                    placeholder="Name"
                  />

                  <label>Email:</label>
                  <input
                    className="ghost-input"
                    type="email"
                    name="Email"
                    placeholder="Email"
                  />

                  <label>Message:</label>
                  <textarea
                    className="ghost-input"
                    name="Message"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                  <input
                    type="submit"
                    className="button solid-cta-button-dark w-100"
                    value="Contact Us!"
                  />
                </form>
              </div>
              <div className="contact-us-grid-right">
                <h4>We're completely open to:</h4>
                <ul className="ml-5">
                  <li>Community/Product partnerships</li>
                  <li>Events Collaborations</li>
                  <li>Product ideas/requests</li>
                  <li>Inquiries and questions</li>
                </ul>
                <p>
                  <strong>
                    We promise to respond within 24-48 hours after you email us!
                  </strong>
                </p>

                <div className="ml-4">
                  <p className="contact-us-grid-left-contact-item">
                    <a href="mailto:hello@ortexo.com" target="_blank">
                      <img src="img/icons/contact/email-dark.svg" />
                      <span>hello@ortexo.com</span>
                    </a>
                  </p>
                  <p className="contact-us-grid-left-contact-item">
                    <a href="https://calendly.com/ortexo" target="_blank">
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
    </Layout>
  );
};
