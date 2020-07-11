import Head from 'next/head'
import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - Opportunities</title>
        <meta name="description" content="Launch Tech LLC's products, products, and software! Here, we list all of the software applications that have been built and acquired by Launch Tech LLC, and the products that we've grown and scaled." />
      </Head>

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
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Assist in development on SaaS projects</li>
                <li>Communicate with development team and CTO</li>
                <li>Send development updates to QA Testers</li>
                <li>Implement infrastructure changes to current software products</li>
                <li>Applying best practices and standard operating procedures</li>
                <li>Troubleshoot, debug, and upgrade existing products</li>
              </ul>
              <br/>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Director of Development</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Manage current projects</li>
                <li>Direct development and delivery of software products</li>
                <li>Oversee and lead development team</li>
                <li>Work closely with executives to reach company goals</li>
                <li>Strong leadership, communication, and interpersonal skills</li>
                <li>Must be responsible, in charge of team productivity</li>
              </ul>
              <br/>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Public Relations (PR)</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Be very active and responsive</li>
                <li>Work closely with the executives and marketing team</li>
                <li>Reach out to newspaper companies and blogs to promote Launch Tech</li>
                <li>Partner with content platforms to have cross-written guest articles</li>
                <li>Find feature opportunities for social media platforms and podcast</li>
                <li>Work with CEO to increase engagement</li>
              </ul>
              <br/>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>Outreach Officer</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Be very active and responsive</li>
                <li>Work closely with the Head of Marketing</li>
                <li>Be familiar with cold emailing</li>
                <li>Plan and implement various marketing strategies</li>
                <li>Build connections with the community</li>
                <li>Direct market research and branding</li>
                <li>Be well-versed with various marketing strategies</li>
              </ul>
              <br/>
              <div className="text-right">
                <a className="button solid-cta-button-dark" href="https://www.launchtechllc.com/#contact-us" target="_blank">Apply!</a>
              </div>
            </div>
            <div className="opportunity" data-aos="zoom-in">
              <div>
                <h3>UX Designer</h3>
                <small><strong>Launch Tech LLC</strong></small>
                <br/>
                <small>Remote</small>
              </div>
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Be very active and responsive</li>
                <li>Create product prototypes and design UX projects</li>
                <li>Collaborate with executives and development team to develop a core understanding of user personas</li>
                <li>Assist with Content Development</li>
                <li>Conduct competitor and customer analysis</li>
              </ul>
              <br/>
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
              <div>
                <br/>
                <h6>Responsibilities</h6>
              </div>
              <ul className="ml-4 mt-2">
                <li>Help contribute web animations to <a href="http://anojs.com" target="_blank">Ano.js</a></li>
                <li>Communicate with other contributors on the <a href="https://discord.gg/xkdRm7E" target="_blank">Ano.js discord server</a></li>
                <li>Provide technical support where needed</li>
                <li>Help promote Ano.js to other developers and contributors</li>
                <li>Test, report, and fix bugs</li>
                <li>Great to add to your portfolio, LinkedIn, and resume!</li>
              </ul>
              <br/>
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
