import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Transition from '../transition'
import absMuscle from '../assets/abs_muscle.png'
import bicepsMuscle from '../assets/biceps_muscle.png'
import { useNavigate } from 'react-router'
import LandingData from '../data/Landingdata'
import backMuscle from  '../assets/back_muscle.png'
import legMuscle from '../assets/leg_muscle.png'
import { useDispatch } from 'react-redux'
import { settype } from '../redux/programs/program'

function MainPage() {
  const [obsData, setObsData] = useState(LandingData)
  const [routed, setrouted] = useState(false)
  const [currentdata, setcurrentdata] = useState([])
  const navigate = useNavigate()
  const [pageNumber, setpageNumber] = useState(1)
  const dispatch = useDispatch()

  const [programnum, setprogramnum] = useState(1)
  
  useEffect(() => {
    setcurrentdata(obsData[0])
  },[])

  const increasePage = () => {
    let nextProgramNum = programnum + 1;
    if (nextProgramNum > 4) {
      nextProgramNum = 1;
    }
    setcurrentdata(obsData[nextProgramNum - 1]);
    setprogramnum(nextProgramNum);
    setpageNumber(nextProgramNum);
  };
  
  const decreasePage = () => {
    let prevProgramNum = programnum - 1;
    if (prevProgramNum < 1) {
      prevProgramNum = 4;
    }
    setcurrentdata(obsData[prevProgramNum - 1]);
    setprogramnum(prevProgramNum);
    setpageNumber(prevProgramNum);
  };

  const customRoute = ({ id, type }) => {
      dispatch( settype(type));
      navigate(`/services/${id}`);
  
  }






  const SocMediaVariants = {
    hidden : {
      x : -4000
    },
    visible : {
      x : 0
    },
  }

  const socMediaLeave = {
    hidden : {
      opacity : 1
    },
    visible : {
      opacity : 0
    }
  }
  const iconVariants = {
    first : {
      opacity : 0
    },
    second : {
      opacity : 1
    }
  }

  const navVariants = {
    hidden : {
      y : -2000
    },
    animate : {
      y : 0
    },
    transition : {
      duration : 1,
      delay : 3,
      type : 'spring',
      stiffness : 60,
      dumping : 5
    }
  }

  const boxVariants = {
    hidden : {
      scale : 0,
      opacity : 0
    },
    visible : {
      scale : 1,
      opacity : 1
    },
    hover : {
      scale : 1.5
    }
  }
  


  return (
    
      <motion.div 
          initial ={{opacity : 0}}
          animate ={{opacity : 1}}
          exit={{x : 3000, transition : {
            duration : 2, delay : .1
          }}}
          style={{overflow : "hidden"}}
          transition={{duration : .2,type : 'spring',stiffness : 6}}
          id='MainPage' >
            <motion.div 
            variants = {SocMediaVariants}
            initial = "hidden"
            animate = "visible"
            transition = {{ 
              delay : 1.5,
              duration : 3,
              type : 'spring',
              stiffness : 26,
              delayChildren: 3.3,
              staggerChildren: 0.2
          }}
            id='soc_media_box'>
            <a href="https://github.com/guga-ggw"><motion.i  variants={iconVariants} 
              whileHover={{scale : 1.5}}
              initial ="first"
              animate ="second"
              transition ={{
                delay : 4,
                type : 'spring'
              }}
              className="fa-brands fa-github"></motion.i></a>
              <a href="https://www.linkedin.com/in/gugamuchiashvili/">
              <motion.i variants={iconVariants} 
              initial ="first"
              animate ="second"
              transition ={{
                delay : 4.2,
                type : 'spring'
              }}
              className="fa-brands fa-linkedin"></motion.i>
              </a>
              <a href="https://www.instagram.com/guga_muchiashvili/">
              <motion.i  variants={iconVariants} 
              initial ="first"
              animate ="second"
              transition ={{
                delay : 4.4,
                type : 'spring'
              }}
              className="fa-brands fa-square-instagram"></motion.i>
              </a>
            </motion.div>
            <div id="infopage">
                <div className="left_mainPage">
                  <div className="nav">
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 1,
                      delay : 2.5,
                      type : 'spring',
                      stiffness : 40,
                      dumping : 5
                    }}
                    
                    id='nav_txt'>MainPage</motion.h2>
                    <motion.h2 variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 1,
                      delay : 2.5,
                      type : 'spring',
                      stiffness : 40,
                    }}
                    onClick={() => navigate('/services')}
                    id='nav_txt'>Services</motion.h2>
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 1,
                      delay : 2.5,
                      type : 'spring',
                      stiffness : 40,
                    }}
                    onClick={() => navigate('/about')}
                    id='nav_txt'>About</motion.h2>
                  </div>
                  <motion.div className="main_Content"
                    transition={{
                      duration: 2,
                    }}
                  >
                    <motion.div initial={{y : -1000, opacity: 0}} animate={{y : 0, opacity : 1}} transition={{duration : 1.5, delay : 5}} className="switchers">
                    <i class="fa-solid fa-angle-left" onClick={() => decreasePage()}></i>
                    <i class="fa-solid fa-angle-right" onClick={()=> increasePage()}></i>
                    </motion.div>
                    <motion.div className="numeration_slide">
                      <motion.div initial={{width :0}} animate ={{width : 100}} transition={{delay : 4.5, duration : 1.2}} className="line"></motion.div>
                      <motion.h2  initial={{opacity :0}} animate ={{opacity : 1}} transition={{delay : 4.9}}>{pageNumber}</motion.h2>
                    </motion.div>
                    <motion.h1 className='program_header' style={{position : 'absolute'}}
                    initial ={{
                      opacity : 0,
                      x : -1000
                    }}
                    animate ={{
                      opacity : 1,
                      x : 0,
                      transition : {
                        opacity : {
                          delay : 3,
                          duration : 3
                        }
                      }
                    }}
                    transition={{
                      type : "spring",
                      stiffness : 700,
                      delay : 4,
                      duration : .6,
                      staggerChildren : 0.4
                    }}
                    
                    >{currentdata.title}</motion.h1>
                    <motion.img src={currentdata.programImage} alt=""
                    initial = {{
                      x : -2000
                    }}
                    animate ={{
                      x : 0
                    }}
                    transition={{
                      duration : 2,
                      delay : 2,
                      type : "just"
                    }}
                     />
                     <motion.p id='main_cont_desc'
                     initial ={{
                      opacity :0
                     }}
                     animate ={{
                      opacity : 1
                     }}
                     transition={{
                      delay : 3,
                      duration : 1.5
                     }}
                     >
                     {currentdata.description}
                     </motion.p>
                  </motion.div>
                </div>
                <motion.div initial={{scale :0}} animate={{scale: 1}} transition={{delay : 3.9, type : "spring", stiffness: 20}} className="right_mainPage">
                  <motion.h1 initial={{opacity : 0, scale : 0}} animate ={{opacity : 1 , scale : 1}} transition={{delay: 5.5, duration : 2.7}}>{currentdata.targetMuscle} Muscle</motion.h1>
                     <motion.img initial={{opacity : 0, scale : 0}} animate={{opacity: 1, scale : 1}} transition={{delay : 5, duration : 1.5}} id={currentdata.targetMuscle == "Abdominals (Abs)" ? "abb_muscle_img" : currentdata.targetMuscle == "Back"   ? "back_muscle_img" : currentdata.targetMuscle == "Quadriceps" ? "leg_muscle_img" :  "muscle_img"} src={currentdata.targetMuscle == "Abdominals (Abs)" ? absMuscle : currentdata.targetMuscle == "Biceps" ? bicepsMuscle :currentdata.targetMuscle == "Back" ? backMuscle : currentdata.targetMuscle == "Quadriceps" ? legMuscle : ""} alt="" />
                </motion.div>
  
                <motion.div className="more_detail_box"
                  initial ={{
                    scale : 0
                  }}
                  animate ={{
                    scale : 1
                  }}
                  transition={{
                    delay : 4.6,
                    type : "spring",
                    damping : 20,
                    duration : 2,
                    delayChildren : 0.5,
                    staggerChildren : 0.6
                  }}
                >
                  <motion.div variants={boxVariants} transition={{delay : 4.2, type: "spring",}} initial="hidden" animate="visible" className="difficulty_txt">
                    <h5>difficulty</h5>
                    <p>{currentdata.difficulty}</p>
                  </motion.div>
                  <motion.div variants={boxVariants} transition={{delay : 4.5, type: "spring",}} initial="hidden" animate="visible" className="for_txt">
                  <h5>excersise</h5>
                    <p>{currentdata.targetMuscle}</p>
                  </motion.div>
                  <motion.div variants={boxVariants}  transition={{delay : 4.8, type: "spring",}} initial="hidden" animate="visible" className="time_txt">
                  <h5>time</h5>
                    <p>{currentdata.durationMonths} month</p>
                  </motion.div>
                  <motion.button onClick={() => customRoute({id : currentdata.id, type : "mainPageType"})}  id='dif_button' variants={boxVariants} transition={{delay : 5.2, duration: .8, type: "spring",}} initial="hidden" animate="visible"> more <i className="fa-solid fa-right-long"></i> </motion.button>
                </motion.div> 
  
  
              </div>
          </motion.div>
          
  )
}

export default MainPage