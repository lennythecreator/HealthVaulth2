


import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar";




const Chat = () => {
    const options = {
        method: 'POST',
        headers: {
          'xi-api-key': 'b48c2c1324c4156ae38f3223762cee28',
          'Content-Type': 'application/json'
        },
        body: '{"model_id":"eleven_multilingual_v2","voice_settings":{"stability":0.5,"similarity_boost":0.75},"text":"hello"}'
      };
      
      const handleClick = () => {fetch('https://api.elevenlabs.io/v1/text-to-speech/UQgtYnUcr6NamdwVPBqh', options)
        .then(response => response.blob())
        .then((response) =>{
             const audio = new Audio(URL.createObjectURL(response))
             audio.play()            
            })
        .catch(err => console.error(err));}
  return (

    <div className="flex h-screen">
        <Navbar/>
        <div>
            <h1>Hi lets answer all your Fitness and Nutrition Questions</h1>
            <input type="text" placeholder="Ask your question?"/>
            <Button onClick={handleClick}>click</Button>
        </div>
        
    </div>
  )
}
export default Chat