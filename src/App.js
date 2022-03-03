import NavBar from './components/NavBar'
import AmiraCharacter from './components/AmiraCharacter'
import ReadingWindow from './components/ReadingWindow'
import Leaderboard from './components/Leaderboard'
import './App.scss'

const App = () => (
  <>
    <div className="outer-container">
      <div className="frame" />
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
