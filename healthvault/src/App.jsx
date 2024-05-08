// App.js
import './App.css'
import Fitness from './layout/fitness'
import Home from './layout/home'
import Navbar from './components/ui/navbar'
import Landing from './layout/Landing'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Article from './components/ui/Article'
import Healthinfo from './components/ui/healthinfo'
import Nutrition from './layout/nutrition'
import Calc from './layout/onboard'
import Chat from './layout/chat'
import Signin from './layout/Signin'
import SignUp from './layout/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/fitness' element={<Fitness/>}></Route>
      <Route path='/nutrition' element={<Nutrition/>}></Route>
      <Route path='/onboard' element={<Calc/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>

    </Routes>
    
  );
}


export default App;
