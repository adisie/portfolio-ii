import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

// main
const Home = () => {
  return (
    <div className="flex-grow flex">
        <div className="flex-grow max-w-[720px] mx-auto px-3 flex mt-3 justify-center text-xs text-emerald-900 font-serif">
            <motion.div 
                initial={{scale: .3,opacity: 0}} 
                animate={{scale: 1,opacity: 1}} 
                transition={{delay: .15,duration: .5}}
            >
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident saepe quia, facere fuga sunt eligendi voluptatum laborum sapiente vitae officia perspiciatis veritatis pariatur quae fugit asperiores ut aperiam laudantium. Non illo nisi dolores aspernatur minus sequi dolorem quisquam soluta? Ducimus doloremque nihil, possimus voluptatem amet debitis saepe praesentium. Nesciunt alias voluptate dolores iusto blanditiis eum architecto quis velit quibusdam eos, voluptates voluptatum rem et in, dolor tempore vero beatae aut optio molestias. Maxime quis placeat impedit assumenda. Voluptates quam esse delectus consectetur perferendis eius eveniet animi dignissimos debitis atque, ducimus possimus aspernatur dolor odit aperiam molestiae minima magnam corrupti laudantium.
                    </p>
                </div>
                <div className='flex items-center justify-center my-3'>
                    <NavLink to={'/contacts'} 
                        className="px-7 py-1 border border-emerald-800 rounded-sm"
                    >contact me</NavLink>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Home