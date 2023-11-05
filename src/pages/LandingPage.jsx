import React, { useRef } from 'react'
import module from '../assets/g.png'
import {AnimatePresence, motion} from 'framer-motion'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Transition from '../transition'

function Landing() {
  const navigate = useNavigate()
  const buttonVariants = {
    hidden: {
      x: -1000,
      rotate: 0,
    },
    visible: {
      x: 0,
      rotate: 360,
      transition: {
        rotate: {
          ease: 'easeInOut',
          repeat: Infinity, 
          duration: 1,       
        },
        x: {
          type: 'spring',
          stiffness: 30,
          delay: 2,
          damping: 6,
        },
      },
    },
  };
  const firsth1 = useRef()
  const secondh1 = useRef()
  return (
      <motion.div className='LandingPage' 
        exit={{
          opacity : 0.1,

        }}
        transition={{
          mass : 100,
          duration : .8

        }}
      >
   <div className="image-container">
       <motion.img 
       src={module} 
       alt=""
       initial={{
        y : 100,
        x : -200,
        opacity : 0
       }}
       animate ={{
        x : 0,
        y : 0,
        opacity : 1
       }}
       transition={{
        duration : 8,
        type :  'spring',
        stiffness: 90,
        delay : 0.7,
        damping : 9
       }}
       />
   </div>
   <div className="landing_txt">
   <motion.h1
   ref={firsth1}
     initial={{
      x : -100,
      y : -100,
      opacity: 0
     }}
     animate ={{
      y : -100,
      x : 100,
      opacity : 1
     }}
     transition={{
      delay : 1,
      type : "spring",
     }}
     
   >Workout</motion.h1>
   <motion.h1 
   ref={secondh1}
   initial={{
    y : -200,
    x : -120,
    opacity : 0
   }}
   animate ={{
    y : -200,
    x : 120,
    opacity : 1
   }}
   transition={{
    delay : 1.5,
    type : "spring"
   }}
   >Man</motion.h1>
   </div>

   <motion.button
        variants={buttonVariants}
        initial = 'hidden'
        animate = 'visible'
        whileHover={{
          rotate : 360,
          scale: 1.2,
          type : "spring"
        }}

        exit = {
          {
            rotate : 0
          }
        }

        transition={{
          duration : 0.4
        }}
      >
        <Link to='/mainpage' >Start</Link>
      </motion.button>
</motion.div>

  )
}

export default Landing