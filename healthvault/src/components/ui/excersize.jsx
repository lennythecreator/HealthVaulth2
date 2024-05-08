

const Excersize = ({workout,key}) => {

  const workoutType = ["Body Building","Cardio"];

  return (
    
    <div className="Card" key ={key}>
        <img src={workout.gifUrl} alt="" />
        <h1>{workout.name.charAt(0).toUpperCase() + workout.name.slice(1)}</h1>
        <a href="#">{workoutType[0]}</a>
        <p>2 sets x 10 reps</p>
    </div>
  )
}

export default Excersize