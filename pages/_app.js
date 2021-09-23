import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  
  return (

      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div /* key={router.route} */>
        <Component {...pageProps}   />
        </motion.div>
      </AnimatePresence>

  );
}

export default MyApp;
