import {motion} from 'framer-motion/dist/framer-motion'
import leaderboard from '../../assets/images/leaderboard.png'
import './index.scss'

const Leaderboard = () => (
  <motion.div
    initial={{x: '10vw', opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{
      type: 'spring',
      bounce: 0.4,
      delay: 1.6,
      duration: 0.6,
    }}
    className="leaderboard-wrapper"
  >
    <img src={leaderboard} className="leaderboard-image" alt="leaderboard" />
  </motion.div>
)

export default Leaderboard
