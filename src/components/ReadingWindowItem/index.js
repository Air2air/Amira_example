import {motion} from 'framer-motion/dist/framer-motion'
import Button from '../Button'
import './index.scss'

const ReadingWindowItem = ({title, text, buttonText, linkTo}) => (
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
    <h3>{title}</h3>
    <p>{text}</p>
    <Button buttonText={buttonText} linkTo={linkTo} />
  </motion.div>
)

export default ReadingWindowItem
