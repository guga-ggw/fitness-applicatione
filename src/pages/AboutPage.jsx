import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router';

function AboutPage() {
  const data = useSelector((state) => state.program.boughtprograms);
  const navigate = useNavigate();
  const [showmodul, setmodul] = useState(false)
  const [currentCard, setcurrentCard] = useState([])

  const showModal = (id) => {
    setmodul(!showmodul)
    const filtdata = data.filter((item) => item.id == id)
    setcurrentCard(filtdata)
  }

  const exit = () => {
    setmodul(!showmodul)
    setcurrentCard([])

  }

  const navVariants = {
    hidden: {
      y: -1000,
    },
    animate: {
      y: 0,
    },
  };

  console.log(currentCard)
  return (
    <motion.div className="AboutPage" initial ={{x : -4000}} animate ={{x : 0}} transition={{delay : .7, duration : 1}}>
      <div className="nav">
        <motion.h2
          variants={navVariants}
          initial="hidden"
          animate="animate"
          transition={{
            duration: 2,
            delay: 0.5,
            type: 'spring',
          }}
          onClick={() => navigate('/mainpage')}
          id="nav_txt"
        >
          MainPage
        </motion.h2>
        <motion.h2
          variants={navVariants}
          initial="hidden"
          animate="animate"
          transition={{
            duration: 2,
            delay: 0.5,
            type: 'spring',
          }}
          onClick={() => navigate('/services')}
          id="nav_txt"
        >
          Services
        </motion.h2>
        <motion.h2
          variants={navVariants}
          initial="hidden"
          animate="animate"
          transition={{
            duration: 2,
            delay: 0.5,
            type: 'spring',
          }}
          id="nav_txt"
        >
          About
        </motion.h2>
      </div>
      <div className="about_header_txt">
        <motion.h1 initial ={{opacity : 0, x : -40}} animate={{x : 0, opacity : 1}} transition={{delay : 1.6, duration : .8}}>Your Programs</motion.h1>
        <motion.div initial={{width : 0}} animate ={{width : 240}} transition={{delay : 1.4, duration : 1, type : "spring", stiffness: 50}} className="about_line"></motion.div>
      </div>
      <div className="program_container">
        {data &&
          data.map((item, i) => (
            <motion.div
              key={i} 
              initial={{ opacity: 0, x: -40 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i + 1.8, type: 'spring', stiffness: 100 }}
              id="program_card"
            >
              <h1>{item.title}</h1>
              <motion.button onClick={() => showModal(item.id)}> See program </motion.button>
            </motion.div>
          ))}
      </div>
     {showmodul && (<motion.div id='layout' initial={{y : -2500}} animate={{y :0}} transition={{delay : .3, duration : .8}}></motion.div>)} 
     {showmodul && ( 
      <AnimatePresence>
             <motion.div initial={{y : -3000}} animate={{y : 0}} transition={{delay : 1, duration : .9, type : "spring", stiffness : 60}} exit={{y : -3000, transition : {duration : 2}}} id='modul_about'>
          <h2 onClick={() => exit()}>X</h2>
          <div className="workouts">
            {currentCard[0].exercises.map((item) => (
              <div className='workoutbox'>
                <div>
                <h1>{item.name}</h1>
                <h3>{item.duration}</h3>
                </div>
                <div className="workout_txt">
                  <h4>sets : {item.sets}</h4>
                  <h4>repetitions : {item.repetitions}</h4>
                </div>
              </div>
            ))}
          </div>
      </motion.div>
      </AnimatePresence>

        
        )}
    </motion.div>
  );
}

export default AboutPage;