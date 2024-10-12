import { motion} from 'framer-motion';
import React, { useEffect } from 'react';

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
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  },

  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const childVariants = {
  initial:{
    opacity: 0
  },
  
  animate:{
    opacity: 1
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Obrigado pelo pedido! :)</h2>
      <motion.p variants={childVariants}>Você pediu uma pizza {pizza.base} com:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;