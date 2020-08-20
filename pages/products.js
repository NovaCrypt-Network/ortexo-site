import Head from "next/head";
import Layout from "../components/Layout.js";

export default () => {
  return (
    <Layout>
      <Head>
        <title>Ortexo - Our Products</title>
        <meta
          name="description"
          content="Accelerating student success by providing access to new knowledge, insights and opportunities."
        />
      </Head>

      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">Our Products</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="products-section">
        <div className="page-container container">
          <div className="products">
            <div className="product">
              <div className="product-images" data-aos="zoom-in">
                <img
                  className="product-images-1"
                  src="img/products/npocore/desktop.png"
                  alt="Ortexo - NPO Core - Website Image"
                />
                <img
                  className="product-images-2"
                  src="img/products/npocore/tablet.png"
                  alt="Ortexo - NPO Core - Website Image"
                />
                <img
                  className="product-images-3"
                  src="img/products/npocore/mobile.png"
                  alt="Ortexo - NPO Core - Website Image"
                />
              </div>
              <div className="product-content">
                <h2>NPO Core</h2>
                <p>
                  NPO Core is your one-stop shop for all things nonprofits.
                  Whether you’re finding partners, volunteering, or creating
                  your own nonprofit, you’ll find something for you here on NPO
                  Core.
                </p>
                <p>
                  Partners:
                  <a
                    href="https://www.instagram.com/youngminds.global"
                    target="_blank"
                  >
                    {" "}
                    Young Minds Global
                  </a>
                </p>
                <div className="product-content-cta">
                  <div className="product-content-cta-left">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>React.js</span>
                    <span>MongoDB</span>
                  </div>
                  <div className="product-content-cta-right">
                    <a
                      href="https://github.com/ortexo/npocore"
                      target="_blank"
                    >
                      <img
                        src="img/icons/social-media/github-dark.svg"
                        alt="Ortexo - w3hacks - GitHub"
                      />
                    </a>
                    <a href="https://www.npocore.com/" target="_blank">
                      <img
                        src="img/icons/contact/out-dark.svg"
                        alt="Ortexo - w3hacks - Website Application"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </section>
    </Layout>
  );
};
