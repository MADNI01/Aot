import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (

      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

  );
}

export default MyApp;
