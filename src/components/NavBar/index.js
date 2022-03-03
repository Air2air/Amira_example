import {motion} from 'framer-motion'
import logo from '../../assets/images/logo.png'

import './index.scss'

const NavBar = () => (
  <nav className="navbar-container">
    <motion.div
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{ease: 'easeOut', duration: 0.7}}
    >
      <img className="amira-logo" src={logo} alt="amira logo" />
    </motion.div>
  </nav>
)

export default NavBar
