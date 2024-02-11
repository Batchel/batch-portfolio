import styles from '../styles/globals.css'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (<>
  <Navbar/>
  <Component {...pageProps} />
  <Analytics />
  <Footer/>
  </>
  );
}

export default MyApp

/* <Image src='/images/dotpath.svg' width={100} height={450}/> */