import { Button } from "@/components/ui/button";
import Excersize from "@/components/ui/excersize";
import Navbar from "@/components/ui/navbar";
import { useEffect, useState } from "react"



const Fitness = () => {
const [exercises,setExercises] =  useState([])
const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'be5e87d805msh887723adb595f4ap1ebff7jsn1fd6ba0bfdb5',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  try {
    useEffect(()=>{
        fetch(url, options)
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        console.log(data)
        setExercises(data)
      })
    },[])
      
  } catch (error) {
      console.error(error);
  }

  const [goal,setGoal] = useState("")

  const user_id = "6632ff27515ed424e59a65de"
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch("http://localhost:5000/addgoal",
            {
             method: "POST",
             headers:{
                "Content-Type": "application/json"
             },
             body:JSON.stringify({
                goal,
                "user_id":user_id
             })
        }
).then((response)=>response.json()).then((data)=>console.log(data))
  }

  return (
    <>
           
        <div className="fit-container">
            <Navbar/> 
            <div className="exe-widget">
                {exercises.map((workout,index)=>(
                    <Excersize workout={workout} key={index}/>
                ))}
            </div> 
        </div>
        

        {/* <div className="">
            <form onSubmit={handleSubmit}>
                <legend></legend>
                <label htmlFor="">Enter your Daily goal</label>
                <input type="text" name={"goal"} onChange={(e)=>{
                    setGoal(e.target.value)
                }} value={goal} />

                <Button/>
            </form>
        </div> */}
    </>
    
    
  )
}

export default Fitness