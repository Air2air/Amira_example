import {useState} from 'react'
import {motion} from 'framer-motion'
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

const ReadingWindowItem = () => {
  const [sliceOne, setSliceOne] = useState(0)
  const [sliceTwo, setSliceTwo] = useState(1)

  const handleNext = () => {
    setSliceOne(sliceOne + 1)
    setSliceTwo(sliceTwo + 1)
  }

  const handleStartOver = () => {
    setSliceOne(0)
    setSliceTwo(1)
  }

  return mockData.slice(sliceOne, sliceTwo).map(item => (
    <motion.div
      initial={{scaleY: 0}}
      animate={{scaleY: 1}}
      transition={{
        ease: 'easeOut',
        delay: 0.5,
        duration: 0.2,
      }}
      className="reading-screen"
    >
      <h3>{item.title}</h3>
      <p>{item.text}</p>

      <button
        type="button"
        className="button"
        onClick={() => {
          handleNext()
        }}
      >
        Next
      </button>

      <button
        type="button"
        className="button"
        onClick={() => {
          handleStartOver()
        }}
      >
        Begin
      </button>
    </motion.div>
  ))
}

export default ReadingWindowItem
