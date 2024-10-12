import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      scale:{
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }
}

const containerVariants = {
  initial:{
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },

  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>
        Boas-vindas ao Pizza Joint!
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Crie sua Pizza
        </motion.button>
      </Link>
      <Loader></Loader>
    </motion.div>
  )
}

export default Home;