import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const SignUp = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")

  const [weight,setWeight] = useState("")
  const [height,setHeight] = useState("")
  const [goals,setGoals] = useState("")



  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://127.0.0.1:5000/signup',{method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({userName,password,age,weight,height,goals,name})
    }).then(res => res.json()).then(
        data => {console.log(data)}
    )
  }
  return (
    <form  className="bg-white w-80 h-56 rounded-md" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input type="text" placeholder='name' name="name" value={name} onChange={(e)=>setName(e.target.value)} />

        <label htmlFor="">Username: </label>
        <input type="text" placeholder='Username' name="username" value={userName} onChange={(e)=>setUserName(e.target.value)} />

        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" name="passsword" value={password} onChange={(e)=>setPassword(e.target.value)}/>

        <label htmlFor="">Age: </label>
        <input type="text" placeholder='Age' name="age" value={age} onChange={(e)=>setAge(e.target.value)} />

        <label htmlFor="">Weight</label>
        <input type="text" placeholder="Weight" name="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>

        <label htmlFor="">Height</label>
        <input type="text" placeholder="Height" name="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        
        <label htmlFor="">Goals</label>
        <input type="text" placeholder="goals" name="goals" value={goals} onChange={(e)=>setGoals(e.target.value)}/>
        <Button type="submit">Sign Up</Button>
    </form>
  )
}

export default SignUp