import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import ReadingWindowItem from '../ReadingWindowItem'
import './index.scss'

const mockData = [
  {
    id: 0,
    title: 'Duck is Stuck',
    text:
      'Duck is stuck in the muck.  A pup can tug on the duck. But duck is stuck. A cub can tug on Duck.',
    buttonText: 'Read More',
  },
  {
    id: 1,
    title: 'Next thing',
    text: 'More Text here',
    buttonText: 'Read More',
  },
  {
    id: 2,
    title: 'And another Next thing',
    text: 'Even More Text here',
    buttonText: 'Read More',
  },
]

const ReadingWindow = () => (
  <motion.div
    initial={{opacity: 0, translateY: 300}}
    animate={{opacity: 1, translateY: 1}}
    transition={{
      type: 'spring',
      bounce: 0.4,
      delay: 0.5,
      duration: 0.9,
    }}
    className="reading-wrapper"
  >
    {mockData.slice(0, 1).map(item => (
      <ReadingWindowItem key={item.id} {...item} />
    ))}
  </motion.div>
)

export default ReadingWindow
