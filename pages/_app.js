import Head from "next/head";
import "../styles/main.scss";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Accelerating student success by providing access to new knowledge, insights and opportunities."
        />

        <meta
          name="google-site-verification"
          content="vbJIiVW2eeS2cBkP-gysxwVg7swck8zzi4ZURi1QZG4"
        />

        <link rel="icon" href="img/ortexo_logo.gif" />
        <link rel="stylesheet" href="./styles/css/styles.css" />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/daygrid/main.min.css"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/css/swiper.min.css"
        />

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"
          charSet="utf-8"
        ></script>
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
          integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
          crossOrigin="anonymous"
        ></script>

        <script
          data-ad-client="ca-pub-3329007335689950"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
};
