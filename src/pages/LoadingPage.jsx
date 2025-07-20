import React from 'react'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'

const LoadingPage = () => {
  return (
    <motion.div
      key='loading'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:0.8}}
    >
      <Loader />
    </motion.div>

  )
}

export default LoadingPage
