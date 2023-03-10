import Layout from '../components/layout';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

 function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
