import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';
import store from '../store';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion';
import CustomButton from '../components/CustomButton';

export default function Home() {
  const state = useSnapshot(store)

  return (
    <AnimatePresence>
      {
        state.intro &&
        <motion.section className='home' {...slideAnimation('left')} >
          <motion.header {...slideAnimation('down')} >
            <img src="./threejs.png" alt="" className='w-8 h-8 object-contain' />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation} >
            <motion.div {...headTextAnimation} >
              <h1 className='text-[50px]' >
                Let's <br className='xl:hidden' /> Do IT
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} >
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quod et maiores necessitatibus <strong>officia velit beatae esse unde, neque, deserunt</strong> tempora quos obcaecati vitae quibusdam. Natus molestiae voluptas dolores.</p>
              <CustomButton
                type="filled"
                title="Customize It"
                handelClick={() => store.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>

      }
    </AnimatePresence>
  )
}
