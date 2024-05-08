import Navbar from '@/components/ui/navbar'

import { Button } from '@/components/ui/button'
import Food from '@/components/ui/food'
import { useEffect, useState } from 'react'



const Nutrition = () => {
  const [foods, setFoods] = useState([])
  const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian&number=12';
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '503c1fddacmsh59be639f7d954a2p17609djsn5fdca4d6d6a7',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

try {
  useEffect(()=>{
      fetch(url, options)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data.recipes)
      setFoods(data.recipes)
    })
  },[])
    
} catch (error) {
    console.error(error);
}

  return (
    <div className='nutri-container flex' >
      <Navbar/>
      <div className='food-con m-2 p-2   bg-slate-100 rounded-md flex flex-col' style={{width:'70vw',marginLeft:'auto',marginRight:'auto'}}>
        <h1 className='text-lg font-bold'>Nutrition</h1>
        <div className='flex items-center justify-center'>
          <input  type="text" className='h-10 w-56 m-1 rounded-md'/>
          <Button >Search</Button>
          <Button className="bg-green-600 m-2">High Protien</Button>
          <Button className="bg-yellow-300 m-2">High Energy</Button>
          <Button className="bg-blue-400 m-2">Low Carb</Button>
        </div>
        
        <div className='flex flex-wrap gap-1'>
        {
          foods.map((food,index)=>(
            <Food food={food} key={index}/>
          ))
        }
        </div>
        
        
      </div>
    </div>
  )
}

export default Nutrition