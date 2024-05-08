
import { BeefIcon, BikeIcon, CalculatorIcon, HomeIcon } from 'lucide-react'
import './component_css/navbar.css'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='flex flex-col items-center w-64 h-full overflow-hidden bg-gray-900 rounded'>
        <div className='Logo'><h1 id='Health'>Health</h1><h1 id='Vault'>Vault</h1></div>
        <hr/>
        
        <Link to="/home"className='nav-items  flex gap-2'><HomeIcon/>Home</Link>
        <Link to="/nutrition" className='nav-items  flex gap-2'><BeefIcon/>Nutrition</Link>
        <Link to="/fitness" className='nav-items flex gap-2'><BikeIcon/>Fitness</Link>
        <Link to="/onboard" className='nav-items  flex gap-2'><CalculatorIcon/>Calculator</Link>
    </div>
  )
}

export default Navbar