import navigate from 'react-dom'
import {motion} from 'framer-motion/dist/framer-motion'

import './index.scss'

const Button = ({buttonText, linkTo}) => {
  const clickHandler = () => {}

  return (
    <button className="button" onClick={clickHandler}>
      {buttonText}
    </button>
  )
}

export default Button
