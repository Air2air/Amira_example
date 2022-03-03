import {motion} from 'framer-motion/dist/framer-motion'
import './index.scss'

const ReadingWindowItem = ({title, text}) => (
  <motion.div
    initial={{scaleY: 0}}
    animate={{scaleY: 1}}
    transition={{
      ease: 'easeOut',
      delay: 0.3,
      duration: 0.2,
    }}
    className="reading-screen"
  >
    <h3>{title}</h3>
    <p>{text}</p>
  </motion.div>
)

export default ReadingWindowItem
