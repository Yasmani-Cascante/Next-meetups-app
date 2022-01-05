// import 'semantic-ui-css/semantic.min.css'
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  );
}

export default MyApp;
