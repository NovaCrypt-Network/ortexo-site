import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">Opportunities</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="opportunities-section">
        <div className="page-container container">
          <div className="opportunities">
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Software Engineer</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <ul className="ml-4 mt-2">
                <li>Work on the real-world products provided by Launch Tech LLC</li>
                <li>Work with Launch Tech LLC's corporate and community partners, as well as clients to build an optimal product</li>
                <li>Learn, build, and deploy new technologies</li>
              </ul>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>QA Tester</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <ul className="ml-4 mt-2">
                <li>Test the quality and usability of Launch Tech LLC products before release</li>
                <li>Work with other QA testers to point out and report bugs and critical errors</li>
                <li>Regularly test the performance of currently deployed software launched in production</li>
              </ul>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://forms.gle/8ay2tpTRUgcd4xiu6" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Product Designer</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <ul className="ml-4 mt-2">
                <li>Work with the development and marketing teams to design a product roadmap stemming from an idea</li>
                <li>Help oversee/advise the development process as the product is being built</li>
                <li>Ensure a good user experience with our user interfaces</li>
              </ul>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Open Source Contributor</h3>
                <small><strong>Ano.js</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <ul className="ml-4 mt-2">
                <li>Help contribute web animations to <a href="http://anojs.com" target="_blank">Ano.js</a></li>
                <li>Communicate with other contributors on the <a href="https://discord.gg/xkdRm7E" target="_blank">Ano.js discord server</a></li>
                <li>Add to your portfolio, LinkedIn, and resume!</li>
              </ul>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="http://anojs.com/join-us" target="_blank">Apply!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
