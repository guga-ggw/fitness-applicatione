import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { UpperBodyData, LowerBodyData } from '../data/Landingdata';
import LandingData from '../data/Landingdata';
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion';
import { addItem, settype } from '../redux/programs/program';

function ServiceIdPage() {
  const param = useParams();
  const type = useSelector((state) => state.program.routeType);
  const [modul, setmodul] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data, setdata] = useState([])
  

    const navVariants = {
      hidden : {
        y : -1000
      },
      animate : {
        y : 0
      },
}

  const addCard = () => {
    setdata([])
    dispatch(settype(''))
    dispatch(addItem(data[0]))
    navigate('/about')
    setmodul(false)
  }

  const exit = () => {
    setmodul(false)
    navigate('/services')
    setdata([])
    dispatch(settype(''))
  }

  useEffect(() => {
    setdata(
      type.toLowerCase() === 'upperbody'
        ? UpperBodyData.filter(item => item.id === param.id)
        : type.toLowerCase() === 'mainpagetype'
        ? LandingData.filter(item => item.id === param.id)
        : type.toLowerCase() === 'lowerbody'
        ? LowerBodyData.filter(item => item.id === param.id)
        : [] 
    );
     type !== "" ? setmodul(true) : ""
    }, [type, param.id]);
  return (
       <motion.div id='spec_service_div' initial={{x : -3000}} animate ={{x : 0}} transition={{duration : 1, delay : 0.7}} exit={{x : 2000, transition : {duration : 1}}}>
              <div className="nav">
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 1.5,
                      type : 'spring',
                    }}
                    onClick={() => navigate('/mainpage')}
                    id='nav_txt'>MainPage</motion.h2>
                    <motion.h2 variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 1.5,
                      type : 'spring',

                    }}
                    onClick={() => navigate('/services')}
                    id='nav_txt'>Services</motion.h2>
                    <motion.h2  variants={navVariants}
                    initial = "hidden"
                    animate = "animate"
                    transition=  {{
                      duration : 2,
                      delay : 1.5,
                      type : 'spring',
                    }}
                    onClick={() => navigate('/about')}
                    id='nav_txt'>About</motion.h2>
                  </div>
                  {modul && (<motion.div id='layout' initial={{scale : 0, borderRadius : "50%"}} animate ={{scale : 1, borderRadius : 0}} transition={{duration : 1.6, delay : 2}}></motion.div>)}
      {data.map(item => (
        <motion.div initial={{y : -700, x : -200}} animate={{y : 200}} transition={{delay : 3, duration : .9, type : "spring", stiffness : 60}} id='modul'>
          <motion.h1 initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1, delay : 3.4}}>{item.title}</motion.h1>
          <div className="module_buttons">
            <motion.button  initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1.5, delay : 3.5}} onClick={() => addCard()}>Add to Cart</motion.button>
            <motion.button initial={{opacity : 0}} animate={{opacity : 1}} transition={{duration : 1.5, delay : 3.6}} onClick={() => exit()}>Go Back</motion.button>  
          </div>
        </motion.div>
      ))}
    </motion.div>
   
  );
}

export default ServiceIdPage;
