import Head from 'next/head'
import '../styles/main.scss'

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Launch Tech is a SaaS (Software as a Service) product holding company, created for launching real-world software applications. We create products that are useful, meaningful, and applicable to different people and different situations around the world. We try to build, market, and deploy software through partnerships, events, and sponsors." />

        <meta name="google-site-verification" content="vbJIiVW2eeS2cBkP-gysxwVg7swck8zzi4ZURi1QZG4" />

        <link rel="icon" href="img/logos/launchtech.png" />
        <link rel="stylesheet" href="./styles/css/styles.css" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/daygrid/main.min.css" />

        <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" charset="utf-8"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
      </Head>

      <Component {...pageProps} />
    </>
  )
}