import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

// icons
// share
import { FaShareSquare } from "react-icons/fa"

// main
const Header = () => {

    // active link style
    const activeLinkStyle = ({isActive}) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <header className='text-xs text-emerald-900 font-serif py-2'>
        <div className='max-w-[720px] mx-auto px-3 flex items-center justify-between overflow-hidden'>
            {/* site logo */}
            <motion.div 
                initial={{y:-370}} 
                animate={{y:0}} 
                transition={{type: 'spring',stiffness: 90}}
            >
                <NavLink to={'/'}>
                    <FaShareSquare 
                        className='cursor-pointer text-2xl mr-3'
                    />
                </NavLink>
            </motion.div>
            {/* main nav */}
            <motion.div className='flex-grow flex items-center justify-end py-1 border-b border-emerald-900 border-opacity-[.15]' 
                initial={{x:'100vw'}}
                animate={{x:0}} 
                transition={{type: 'spring',stiffness: 30,duration: 1.3}}
            >
                <ul className='flex items-center'>
                    <li className='ml-3'>
                        <NavLink to={'/'} style={activeLinkStyle}>Home</NavLink>
                    </li>
                    <li className='ml-3'>
                        <NavLink to={'/projects'} style={activeLinkStyle}>Projects</NavLink>
                    </li>
                    <li className='ml-3'>
                        <NavLink to={'/contacts'} style={activeLinkStyle}>Contacts</NavLink>
                    </li>
                </ul>
            </motion.div>
        </div>
    </header>
  )
}

export default Header