import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

const backdrop = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
}

const modalVariant = {
    initial: {
        y: '-100vh',
        opacity: 0,
    },

    animate: {
        y: '200px',
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    }
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <motion.div
            className="modal"
            variants={modalVariant}
          >
            <p>Quer fazer outra pizza?</p>
            <Link to="/">
              <button>Comece Novamente</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal