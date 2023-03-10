import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { BsInstagram, BsGithub, BsLinkedin, BsTwitter, BsTiktok, BsYoutube } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'

import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    console.log(form)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send('service_ovrdn3a', 'template_t2lh4sg', { from_name: form.name, to_name: 'Derek', from_email: form.email, to_email: 'dprieur123@gmail.com', message: form.message }, 'ZEdHKLVlO9maJ9pxe')
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')
        setForm({ name: '', email: '', message: '' })
      }, (error) => {
        setLoading(false)
        alert('Something went wrong.')
        console.log(error)
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea rows='7' name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
          <ul className="flex gap-6 w-full justify-center text-xl md:text-2xl">
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://www.instagram.com/derekprieur/" target='_blank'><BsInstagram /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://github.com/derekprieur" target='_blank'><BsGithub /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://www.linkedin.com/in/derekprieur/" target='_blank'><BsLinkedin /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://twitter.com/derekprieur_" target='_blank'><BsTwitter /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://www.tiktok.com/@derekprieur_" target='_blank'><BsTiktok /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="https://www.youtube.com/channel/UCRfCF6455D8bysDrUixxVhw" target='_blank'><BsYoutube /></a>
            </li>
            <li className="cursor-pointer hover:text-[#9153ff] transition-colors duration-200 ease-in-out">
              <a href="mailto:dprieur123@gmail.com" target='_blank'><MdOutlineMail /></a>
            </li>
          </ul>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')