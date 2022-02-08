import '../styles/globals.css'
import Headl from '../Components/Headl';
import Scriptm from '../Components/Script';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headl />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Scriptm />
    </>
  );
}

export default MyApp;
