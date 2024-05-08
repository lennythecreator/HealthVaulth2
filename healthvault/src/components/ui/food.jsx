import { Link } from "react-router-dom"
const Food = ({food}) => {
  return (
    <div className="Meal rouded p-2 flex bg-white rounded-md gap-2 h-32" style={{width:'330px'}}>
      <img src={food.image} alt="" className="w-28 rounded-sm"></img>
      <div className="Description flex flex-col justify-evenly ">
        <h3 className="font-bold text-sm justify-evenly items-stretch ">{food.title}</h3>
        <p className="text-sm "><Link to={food.sourceUrl} target="_blank" className="p-1 bg-green-500 text-bold rounded-md">View Recipe</Link></p>
        <span className="text-xs font-semibold text-white w-24  flex justify-center items-center  bg-slate-950 p-1 rounded-sm">{food.dishTypes[0]}</span>
        </div>
    </div>
  )
}

export default Food