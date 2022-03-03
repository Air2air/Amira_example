import {useState} from 'react'
import {motion} from 'framer-motion'
import './index.scss'

const ReadingWindowItem = ({title, text, buttonText, linkTo}) => {
  const [count, setCount] = useState(0)
  return (
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
      <h3>{count}</h3>
      <p>{text}</p>

      <button
        className="button"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </motion.div>
  )
}

export default ReadingWindowItem
