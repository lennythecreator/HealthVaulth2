import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";


const Article = ({ title, user, topic,image}) => {
  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    animate={{opacity:100, scale:[0,1.5,1]}}
    transition={{duration:1}}
    className="Article flex bg-gray-100 border rounded-lg w-80 p-2 m-1 justify-center items-center">
      <Avatar>
        <AvatarImage
          className="h-16 w-16 m-2 rounded-full"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3297-thumb.png"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col m-2 ml-3">
        <h1 className="text-sm font-semibold">{title}</h1>
        <p className="text-xs text-white font-bold flex justify-center items-center bg-cyan-950 rounded-md w-16 h-5 my-1">
          {topic}
        </p>
        <span className="text-sm font-semibold text-green-700">{user}</span>
      </div>
    </motion.div>
  );
};

export default Article;
