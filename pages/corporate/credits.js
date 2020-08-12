import Head from 'next/head'
import Layout from '../../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Ortexo - Credits</title>
      </Head>

      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">Credits</h1>
          </div>
        </div>
        <img src="/img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="credits">
        <div className="page-container container">
          <h3>All of the images/illustrations/icons we used!</h3>
          <ul className="ml-5">
            <li><a href="https://www.freepik.com/free-photos-vectors/people">People vector created by macrovector - www.freepik.com</a></li>
            <li><a href="https://www.freepik.com/free-photos-vectors/business">Business vector created by macrovector - www.freepik.com</a></li>
            <li><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
