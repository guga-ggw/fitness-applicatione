import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import weight from '../assets/weight.png';
import { AnimatePresence } from 'framer-motion';
import LandingData, { LowerBodyData } from '../data/Landingdata';
import absMuscle from '../assets/abs_muscle.png';
import bicepsMuscle from '../assets/biceps_muscle.png';
import backMuscle from '../assets/back_muscle.png';
import legMuscle from '../assets/leg_muscle.png';
import { UpperBodyData } from '../data/Landingdata';
import shoulder from '../assets/shoulder.png';
import ham from '../assets/hams.png';
import gluteus from '../assets/gluteus.png';
import quad from '../assets/quad.png';
import { useDispatch } from 'react-redux';
import { settype } from '../redux/programs/program';

function Services() {
  const [upperbody, setupperbody] = useState(false);
  const navigate = useNavigate();
  const carousel = useRef();
  const [lowerBody, setlowerBody] = useState(false);
  const dispatch = useDispatch();


  const customRoute = ({ id, type }) => {
    if (type === 'lowerBody') {
      dispatch( settype('lowerbody'));
      navigate(`/services/${id}`);
    } else if (type === 'upperBody') {
      dispatch(settype('upperbody'));
      navigate(`/services/${id}`);
    }
  }

const navVariants = {
        hidden : {
          y : -1000
        },
        animate : {
          y : 0
        },
}
  return (
    <motion.div id='servicesPage' initial ={{x : -2000}} animate ={{x : 0}} transition={{type : "spring", delay : 2, duration : 2}} exit={{x : 2000, transition : {delay : 0, duration : 1}}} >
        <div className="nav">
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 3.5,
                      type : 'spring',
                    }}
                    onClick={() => navigate('/mainpage')}
                    id='nav_txt'>MainPage</motion.h2>
                    <motion.h2 variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 3.5,
                      type : 'spring',

                    }}
                    id='nav_txt'>Services</motion.h2>
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 3.5,
                      type : 'spring',
                    }}
                    onClick={() => navigate('/about')}
                    id='nav_txt'>About</motion.h2>
                  </div>
                  <div className="mainServiceContainer">
                    <div className="Services_txt">
                       {lowerBody ? (<motion.h1 exit={{opacity : 0, transition : { delay : 0}}} initial={{opacity : 0}} animate ={{opacity : 1}} transition={{delay : 1.1, duration : 1.4}}> </motion.h1>) : (<motion.h1 exit={{opacity : 0, transition : { delay : 0}}} initial={{x : -600}} animate ={{x : 200}} transition={{delay : 4.1, duration : 1.4}}> upper body <i class={upperbody ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"} onClick={() => {setupperbody(!upperbody)}}></i> </motion.h1>)} 
                        <motion.h1 initial={{x : -600}} animate ={{x : 100}} transition={{delay : 4.5, duration : 1.4}}>Lower body <i class={lowerBody ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"} onClick={() => setlowerBody(!lowerBody)}></i> </motion.h1>
                        <motion.h1 initial={{x : -600}} animate ={{x : 40}} transition={{delay : 5, duration : 1.4}}>Cardio <i class="fa-solid fa-chevron-right"></i> </motion.h1>
                         <motion.p initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 5.5, duration : 1.3}} onClick={() => navigate('/mainpage')}> <i class="fa-solid fa-left-long" ></i> Go Back </motion.p>
                    </div>
                    <motion.img initial={{y : -2000, opacity : 0}} animate={{y : 0, opacity : 1,}} transition={{duration : .1, type :"spring", stiffness: 80, mass : 1, delay : 5}} src={weight} alt="" id='weight_img'/>
                    <motion.h2 initial={{opacity : 0}} animate={{opacity : 1}} transition={{delay : 5.5, duration : 2}} id='weight_txt'> [ - embrance masculinity - ]</motion.h2>
                  </div>
                 
                  {upperbody && (
                    <AnimatePresence >
                      <motion.div
                      ref={carousel}
                        drag = "x"
                        dragConstraints={{top : 0, right : 0, left : -1290,  bottom : 0}}
                        initial={{ x: -2000 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300, transition : {duration : 1} }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="upperbody_programs"
                      >
                        {UpperBodyData.map((item) => (
                          <div className='Card_program'> 
                          <h1>{item.title}</h1> 
                          <img src={item.targetMuscle == "Abdominals (Abs)" ? absMuscle : item.targetMuscle == "Biceps" ? bicepsMuscle :item.targetMuscle == "Back" ? backMuscle : item.targetMuscle == "Shoulders" ? shoulder : ""} alt=""
                          id={ item.targetMuscle == "Back"   ? "back_muscle_img_small" : item.targetMuscle == "Shoulders" ? "shoulder_muscle_img_small" : item.targetMuscle == "Biceps" ? "biceps_muscle_img_small" :  "muscle_img_small" }
                          />

                          <button onClick={() => customRoute({id : item.id, type : "upperBody"})}>See</button>
                          </div>
                        ))}
                        
                      </motion.div>
                    </AnimatePresence>
                  )}

                  {lowerBody && (
                    <AnimatePresence >
                    <motion.div
                    ref={carousel}
                      drag = "x"
                      dragConstraints={{top : 0, right : 0, left : -1290,  bottom : 0}}
                      initial={{ x: -2000 }}
                      animate={{ x: 0 }}
                      exit={{ x: -300, transition : {duration : 1} }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="upperbody_programs"
                    >
                      {LowerBodyData.map((item) => (
                        <div className='Card_program l_b'> 
                        <h1>{item.title}</h1> 
                        <img src={item.targetMuscle == "Glutes" ? gluteus : item.targetMuscle == "Hamstrings" ? ham : item.targetMuscle == "Quadriceps" ? quad : ham} alt=""
                        id={item.targetMuscle == "Lower Body (Quads, Hamstrings, Glutes)" ? "full_program_lower_img" : ""}
                        />
                        <button onClick={() => customRoute({id : item.id, type : "lowerBody"})}>See</button>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                  )}
    </motion.div>
  )
}

export default Services