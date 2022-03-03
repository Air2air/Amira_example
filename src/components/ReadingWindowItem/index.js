import './index.scss'

const ReadingWindowItem = ({title, text}) => (
  <div className="reading-screen">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

export default ReadingWindowItem
