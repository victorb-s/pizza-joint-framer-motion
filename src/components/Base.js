import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },

  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
    }
  },

  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  initial: {
    x: '-100vw'
  },

  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

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

const Base = ({ addBase, pizza }) => {
  const bases = ['clássica', 'fina e crocante', 'borda Grossa', 'borda Fina', 'borda Recheada'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <h3>Passo 1: Escolha sua base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#F8E112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >
              Próximo
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;