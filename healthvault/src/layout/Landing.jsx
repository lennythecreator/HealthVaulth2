import { Link } from 'react-router-dom'
import  './Landing.css'

const Landing = () => {
  return (
    <>
    <section className="Ldn-section">
        <div className="opener">
            <div style={{display:"flex",flexDirection:"row"}}><h1>Health</h1><h1 style={{color:"#05200E"}}> Vault</h1></div>
            <p>Your number one smart health app</p>
        </div>
        <div className="form">
            <span className='desc'>Welcome back!</span>
            <Link to="/home">Log in</Link>

            <span className='desc'>First time?</span>
            <a href="">Sign Up</a>
        </div>
      
        
    </section>
    </>
  )
}

export default Landing