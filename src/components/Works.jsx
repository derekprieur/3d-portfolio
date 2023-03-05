import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, code } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { BsCodeSlash, BsGithub } from 'react-icons/bs'
import Pagination from './Pagination'
import { useState } from 'react'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, project_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex gap-1 justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(project_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <BsCodeSlash className='text-xl' />
            </div>
            <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <BsGithub className='text-xl' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] text-white`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage] = useState(1)
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories that contain live demos in them. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.slice((currentPage - 1) * projectsPerPage, currentPage * projectsPerPage).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <Pagination currentPage={currentPage} projectsPerPage={projectsPerPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default SectionWrapper(Works, '')