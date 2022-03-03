import {motion} from 'framer-motion/dist/framer-motion'
import NavBar from './components/NavBar'
import AmiraCharacter from './components/AmiraCharacter'
import ReadingWindow from './components/ReadingWindow'
import Leaderboard from './components/Leaderboard'
import './App.scss'

const App = () => (
  <>
    <div className="outer-container">
      <motion.div
        layout
        animate={{opacity: [0, 1]}}
        transition={{
          ease: 'easeOut',
          delay: 0.1,
          duration: 0.5,
        }}
        className="frame"
      />
      <NavBar />
      <div className="content-container">
        <AmiraCharacter />
        <ReadingWindow />
        <Leaderboard />
      </div>
    </div>
  </>
)
export default App
