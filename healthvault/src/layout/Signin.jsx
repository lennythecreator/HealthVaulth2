import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router"

const Signin = () => {
  const navigate = useNavigate()
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch('http://127.0.0.1:5000/login',{method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({userName,password})
    }).then(res => res.json()).then(
        data => {console.log(data)
            if (data.error) {
                console.log(data.error)
            }
            else{
                localStorage.setItem("token",data.access_token)
            navigate("/home")
            }
            
        }

    )
  }
  return (
    
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl">Welcome Back!</h1>
        <form  className="bg-white w-96 h-80 rounded-lg p-3  flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="">Username: </label>
            <input type="text" placeholder='Username' name="username" value={userName} onChange={(e)=>setUserName(e.target.value)} />

            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" name="passsword" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <Button type="submit">Sign in</Button>

            <h1 className="text-3xl font-extrabold text-green-500 text-center m-4">Find a great new community here!</h1>
        </form>
    </div>
  )
}

export default Signin