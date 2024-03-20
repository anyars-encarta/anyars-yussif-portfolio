import React, { useState } from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import styles from '../styles';
import { socialNetworks, services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../higher-order-component';

const SocialsCard = ({ name, icon, link }) => {
  const [showName, setShowName] = useState('-');

  const handleHover = (name) => {
    setShowName(name);
    console.log(showName)
  };

  return (
    <motion.div variants={fadeIn("right", "", 0.1, 1)} className='mt-4 flex flex-col justify-center items-center'>
      <img
        src={icon}
        alt={name}
        className='bg-secondary w-10 h-10 rounded-full object-cover cursor-pointer transition-transform hover:scale-110'
        onMouseEnter={() => handleHover(name)}
        onMouseLeave={() => setShowName('-')}
        onClick={() => window.open(link, '_blank')}
      />
      <p className={`${showName === '-' ? "text-black-200" : "text-secondary"} mt-2`}>{showName}</p>
    </motion.div>
  )
};

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("left", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        As a software developer, I leverage my coding
        expertise and problem - solving skills to design,
        debug, test, and collaborate on innovative solutions.
        I excel in analyzing, documenting, optimizing,
        and maintaining software systems while continuously
        learning and adapting to enhance their implementation,
        deployment, and iteration.
      </motion.p>

      <div className='flex flex-wrap gap-5'>
        {
          socialNetworks.map((socialNetwork, index) => (
            <SocialsCard key={socialNetwork.name} index={index} {...socialNetwork} />
          ))
        }
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");