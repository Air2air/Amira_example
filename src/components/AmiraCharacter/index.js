import {motion} from 'framer-motion'
import amira from '../../assets/images/amira.png'
import './index.scss'

const AmiraCharacter = () => (
  <motion.div
    initial={{x: '-10vw', opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
      ease: 'easeOut',
      delay: 1,
      duration: 0.7,
    }}
    className="amira-wrapper"
  >
    <img src={amira} className="amira-image" alt="amira" />
  </motion.div>
)

export default AmiraCharacter
