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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['cogumelos', 'pepperoni', 'cebolas', 'azeitonas', 'queijo extra', 'tomates'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      
      <h3>Passo 2: Escolha os ingredientes</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: '#F8E112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Peça
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;