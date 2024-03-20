import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import styles from "../styles";
import { socialNetworks } from '../constants';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../higher-order-component";
import { fadeIn, slideIn } from "../utils/motion";

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

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: [value] })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // public key: uvctupjVTJeHiQqzg
    // template_5pne1yr
    // service_wntpknv

    emailjs.send(
      'service_wntpknv',
      'template_5pne1yr',
      {
        from_name: form.name,
        to_name: 'Anyars',
        from_email: form.email,
        to_email: 'anyarsencarta@gmail.com',
        message: form.message,
      },
      'uvctupjVTJeHiQqzg'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);

      alert('Something went wrong.')
    })
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {
              loading ? 'Sending...' : 'Send'
            }
          </button>
        </form>

        <div className='flex justify-center flex-wrap gap-5 mt-5'>
          {
            socialNetworks.map((socialNetwork, index) => (
              <SocialsCard key={socialNetwork.name} index={index} {...socialNetwork} />
            ))
          }
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')