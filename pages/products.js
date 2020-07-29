import Head from 'next/head'
import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - Our Products</title>
        <meta name="description" content="Launch Tech LLC's applications, products, and software! Here, we list all of the software applications that have been built by Launch Tech LLC, and the products that we've grown and scaled." />
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
                <img className="product-images-1" src="img/products/npocore/desktop.png" alt="Launch Tech LLC - NPO Core - Website Image" />
                <img className="product-images-2" src="img/products/npocore/tablet.png" alt="Launch Tech LLC - NPO Core - Website Image" />
                <img className="product-images-3" src="img/products/npocore/mobile.png" alt="Launch Tech LLC - NPO Core - Website Image" />
              </div>
              <div className="product-content">
                <h2>NPO Core</h2>
                <p>
                  NPO Core is your one-stop shop for all things nonprofits. Whether you’re finding partners, volunteering, or creating your own nonprofit, you’ll find something for you here on NPO Core.
                </p>
                <p>
                  Partners:
                  <a href="https://www.instagram.com/youngminds.global" target="_blank"> Young Minds Global</a>
                </p>
                <div className="product-content-cta">
                  <div className="product-content-cta-left">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>React.js</span>
                    <span>MongoDB</span>
                    <span>Google Maps API</span>
                  </div>
                  <div className="product-content-cta-right">
                    <a href="https://github.com/launchtechllc/npocore" target="_blank">
                      <img src="img/icons/social-media/github-dark.svg" alt="Launch Tech LLC - w3hacks - GitHub" />
                    </a>
                    <a href="https://www.npocore.com/" target="_blank">
                      <img src="img/icons/contact/out-dark.svg" alt="Launch Tech LLC - w3hacks - Website Application" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-content-show">
                <h2>Ano.js</h2>
                <p>
                  Ano.js is a free, open-source web animation library, allowing anyone to integrate customizable web animations into any website with just two lines of code! You can customize the colors of the animation you want in real-time, and copy-paste the code into any HTML file. It has been transformed to an open-source , and animations are now being created and optimized by open-source contributors.
                </p>
                <div className="product-content-cta">
                  <div className="product-content-cta-left">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>SCSS</span>
                    <span>GitHub API</span>
                    <span>HTML5 Canvas</span>
                  </div>
                  <div className="product-content-cta-right">
                    <a href="https://github.com/launchtechllc/anojs" target="_blank">
                      <img src="img/icons/social-media/github-dark.svg" alt="Launch Tech LLC - Ano.js - GitHub" />
                    </a>
                    <a href="http://anojs.com/" target="_blank">
                      <img src="img/icons/contact/out-dark.svg" alt="Launch Tech LLC - Ano.js - Website Application" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-images" data-aos="zoom-in">
                <img className="product-images-1" src="img/products/anojs/desktop.png" alt="Launch Tech LLC - Ano.js - Website Image" />
                <img className="product-images-2" src="img/products/anojs/tablet.png" alt="Launch Tech LLC - Ano.js - Website Image" />
                <img className="product-images-3" src="img/products/anojs/mobile.png" alt="Launch Tech LLC - Ano.js - Website Image" />
              </div>
              <div className="product-content-hidden">
                <h2>Ano.js</h2>
                <p>
                  Ano.js is a free, open-source web animation library, allowing anyone to integrate customizable web animations into any website with just two lines of code! You can customize the colors of the animation you want in real-time, and copy-paste the code into any HTML file. It has been transformed to an open-source , and animations are now being created and optimized by open-source contributors.
                </p>
                <div className="product-content-cta">
                  <div className="product-content-cta-left">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>MongoDB</span>
                    <span>SCSS</span>
                    <span>GitHub API</span>
                    <span>HTML5 Canvas</span>
                  </div>
                  <div className="product-content-cta-right">
                    <a href="https://github.com/launchtechllc/anojs" target="_blank">
                      <img src="img/icons/social-media/github-dark.svg" alt="Launch Tech LLC - Ano.js - GitHub" />
                    </a>
                    <a href="http://anojs.com/" target="_blank">
                      <img src="img/icons/contact/out-dark.svg" alt="Launch Tech LLC - Ano.js - Website Application" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="product">
              <div className="product-images" data-aos="zoom-in">
                <img className="product-images-1" src="img/products/w3hacks/desktop.png" alt="Launch Tech LLC - w3Hacks - Website Image" />
                <img className="product-images-2" src="img/products/w3hacks/tablet.png" alt="Launch Tech LLC - w3Hacks - Website Image" />
                <img className="product-images-3" src="img/products/w3hacks/mobile.png" alt="Launch Tech LLC - w3Hacks - Website Image" />
              </div>
              <div className="product-content">
                <h2>w3Hacks</h2>
                <p>
                  w3Hacks is an online platform where anyone can learn how to code! Whether you're a seasoned programmer or a semi-beginner, everyone has something to learn here! We reinforce and teach good, real-world programming skills that are used in the software engineering industry, and crucial skills for any developer to know whether they're making a solo  or working with others!
                </p>
                <div className="product-content-cta">
                  <div className="product-content-cta-left">
                    <span>Python</span>
                    <span>Django</span>
                    <span>PostgreSQL</span>
                  </div>
                  <div className="product-content-cta-right">
                    <a href="https://github.com/launchtechllc/w3hacks" target="_blank">
                      <img src="img/icons/social-media/github-dark.svg" alt="Launch Tech LLC - w3hacks - GitHub" />
                    </a>
                    <a href="http://w3hacks.com/" target="_blank">
                      <img src="img/icons/contact/out-dark.svg" alt="Launch Tech LLC - w3hacks - Website Application" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
