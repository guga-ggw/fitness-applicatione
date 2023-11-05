import React from 'react'
import {motion} from 'framer-motion'

function Transition({children}) {
  return (
    <motion.div
    initial ={{
        opacity : 0,
        scale : 0
    }}
    animate = {{
        opacity : 1,
        scale : 1
    }}
    exit ={{
        opacity : 0,
        scale : 0,
        x : 2000
    }}
    transition={{
        ease : 'easeIn',
        duration : 2.4
    }}
    >{children}</motion.div>
  )
}

export default Transition