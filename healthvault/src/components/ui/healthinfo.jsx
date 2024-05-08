import { motion } from 'framer-motion'
import { Button } from './button'
import { Checkbox } from './checkbox'

const Healthinfo = () => {
  return (
    <div className='info flex justify-between  rouned-md p-2 gap-2 rounded'>
        <motion.div 
        initial={{translateX:-100, opacity:0}}
        animate={{translateX:0,opacity:100}}
        transition={{duration:1.5}}

        className='fitnessinfo flex bg-neutral-200 flex-col items-start justify-start w-96 h-60 border-2 border-neutral-900 rounded-md p-3'>
            <h1 className='text-xl font-bold'>Daily Goals</h1>
            <div className='flex items-center'>
                <Checkbox id="item"/> <label htmlFor='item' className='item-center'>Run 1 mile</label>

            </div>

            <div className='flex '>
                <Checkbox id="item"/> 
                <label htmlFor="item">Do 50 squats</label>

            </div>

            <div className='flex'>
                <Checkbox id="item"/> 
                <label htmlFor="item">Do 20 squats</label>
            </div>
            
            <Button className="w-60 m-auto">Add</Button>

            
        </motion.div>

        <motion.div 
        initial={{translateX:-100, opacity:0}}
        animate={{translateX:0,opacity:100}}
        transition={{duration:1.5}}

        className='Healthinfo bg-neutral-200 w-96 h-60 border-2 border-neutral-900 rounded-md p-3'>
            <h1 className='text-xl font-bold'>Health Score</h1>
            <div className='flex gap-2'>
                <p className='font-bold border-1 rounded-md p-1 border-slate-500 mt-5 bg-green-200'><span className='flex justify-center m-1 text-xl text-green-400 font-bold'>75</span><br></br>Health</p>
                <p className='font-bold border-1 rounded-md p-1 border-slate-500 mt-5 bg-green-200'><span className='flex justify-center m-1 text-xl text-red-500 font-bold'>50</span><br></br>Fitness</p>
                <p className='font-bold border-1 rounded-md p-1 border-slate-500 mt-5 bg-green-200'><span className='flex justify-center m-1 text-xl text-yellow-500 font-bold'>60</span><br></br>Nutrition</p>
            </div>
        </motion.div>

        <motion.div 
        initial={{translateX:-100, opacity:0}}
        animate={{translateX:0,opacity:100}}
        transition={{duration:1.5}}

        className='nutrition-info  bg-grey-200 w-96  h-60 border-2 border-neutral-900 rounded-md p-3'>
            <p>Your set Daily calories:</p>
            <p className='text-4xl'>2500 cal</p>
        </motion.div>
    </div>
  )
}

export default Healthinfo