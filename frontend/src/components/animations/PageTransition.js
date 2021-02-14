import { motion } from 'framer-motion';

import { pageAnimation } from './animations';

const PageTransition = ({ children }) => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={pageAnimation}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
