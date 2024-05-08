import Article from "@/components/ui/Article"
import Healthinfo from "@/components/ui/healthinfo"
import Navbar from "@/components/ui/navbar"
import { useEffect } from "react"



const Home = () => {
  const Articles = {
  
    "Jeff Neppard":{
      "title":"What's the best diet to loss weight?",
      "topic": "Nutrition",
      "user":"Jeff Neppard",
      "image":"https://scontent.cdninstagram.com/v/t51.2885-19/357779946_228393483358268_6556474955582402286_n.jpg?stp=dst-jpg_s640x640&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=bU_Ux8vfL_gQ7kNvgF6vp75&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfBDF0PhYFGPm0ezszds2dQK2etv2_MYr_K9jnI8r2SkZQ&oe=663B1B08&_nc_sid=10d13b"
    },
    "Chris Bumstead":{
      "title":"What's the best workouts for shoulders?",
      "topic": "Fitness",
      "user":"Chris Bumstead",
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIX5KdMTtE6jMCi3O1b-7MzDP7shmeKP2VABPf5hte5WkPC4K4FsPyCa6nziDt"
    },
  
    "Lana Lang":{
      "title":"How do i bulk up quickly?",
      "topic": "Fitness",
      "user":"Lana Lang",
      "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToY0jF4MNyp8XIGOcFanJmobH9jvSFD1-5nMnzXOBO-ZN_Na3HNzXlE66q8h04"
    },

    "Rich Piana":{
      "title":"What's the best workouts for shoulders?",
      "topic": "Fitness",
      "user":"Rich Piana",
      "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmt2QsiBcrM0wyIj6qxMObhfin79DpVzcHleIub-tUK10DJcFZMoPItT6nvqkf"
    },

    "Scott Summers":{
      "title":"I can't seem to get enough sleep. Help?",
      "topic": "Health",
      "user":"Scott Summers",
      "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrvBRBlH78yfhC9NWSMKMbj0DPZX1beHRO5nXcTfipucB5sLe5R5pXsZMo2Y-K",

    },

    "Ronnie Coleman":{
      "title":"How make those weights lighter!",
      "topic": "Fitness",
      "user":"Ronnie Coleman",
      "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv1PXZC9P3sg7qwI1i2Um4qJx99uziFS5rhKWjWFifH67rcm8XAlzEG8qLw6Cx"
    },
  
  }
  
  
  return (
    
    <>
    <div className="home-container">
        
        <Navbar/>
        
        <section className="widget bg-white" style={{display:"flex",flexDirection:"column"}}>
            <h1  className= "Title" style={{fontSize:"30px"}}>Vault</h1>
            <div className="rect-widget p-1">
              
            {Object.keys(Articles).map((key) => (
              <Article
                title={Articles[key].title}
                user={Articles[key].user}
                topic={Articles[key].topic}
                key={key}
              />
            ))}
            
              <Healthinfo/>

        

            </div>
        </section>
    </div>
    </>
  )
}

export default Home