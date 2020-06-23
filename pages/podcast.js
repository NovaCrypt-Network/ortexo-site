import Head from 'next/head'
import Layout from '../components/Layout.js'

export default () => {
  return (
    <Layout>
      <Head>
        <title>Launch Tech LLC - Podcast</title>
        <meta name="description" content="Check out the official Launch Tech LLC podcast! We talk about everything relating to SaaS, software, and technology!" />
      </Head>

      <div className="waves">
        <div className="waves-container">
          <div className="container">
            <h1 className="section-header">Podcast</h1>
          </div>
        </div>
        <img src="img/waves/nav-wave.png" className="flipped-wave wave" />
      </div>

      <section className="podcast">
        <div className="page-container container">
          <iframe src="https://anchor.fm/launchtechllc/embed/episodes/Test-efppjr/a-a2hiadr" frameBorder="0" scrolling="no"></iframe>
        </div>
      </section>
      <style jsx>{`
        iframe {
          width: 100%;
          box-shadow: 0 5px 30px rgba(0,0,0,.1);
        }
      `}</style>
    </Layout>
  )
}
