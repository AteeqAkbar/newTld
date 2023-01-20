import "../styles/globals.css";
import Layout from "../components/layout";
import Footer from "../components/footer";
import AuthProvider from "../contexts/auth_context";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        {/* <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      /> */}

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/all.css"
        />

        <Component {...pageProps} />
        <Footer />
      </Layout>
      <ToastContainer />
    </AuthProvider>
  );
}

export default MyApp;
