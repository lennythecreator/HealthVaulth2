import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import { motion } from 'framer-motion';
const Calc = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert height to centimeters
    const heightInCm = feet * 30.48 + inches * 2.54;
    // Calculate calories
    let BMR;
    if (gender === 'male') {
      BMR = 66 + (13.7 * weight)+ (5 * heightInCm) - (6.8 * age);
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    }
    let maintenanceCalories = BMR * getActivityMultiplier(activityLevel);
    setCalories(maintenanceCalories);
    // Calculate protein intake
    let proteinIntake = weight * 2.2 * getProteinFactor(activityLevel);
    setProtein(proteinIntake);
  };

  const getActivityMultiplier = (level) => {
    switch (level) {
      case 'sedentary':
        return 1.2;
      case 'lightly-active':
        return 1.375;
      case 'moderately-active':
        return 1.55;
      case 'very-active':
        return 1.725;
      case 'extra-active':
        return 1.9;
      default:
        return 1.2;
    }
  };

  const getProteinFactor = (level) => {
    switch (level) {
      case 'sedentary':
        return 0.8;
      case 'lightly-active':
        return 1;
      case 'moderately-active':
        return 1.2;
      case 'very-active':
        return 1.4;
      case 'extra-active':
        return 1.6;
      default:
        return 0.8;
    }
  };

  return (
    <div className='flex overflow-hidden' style={{height:'100vh'}}>
      <Navbar />
      <motion.div 
      initial={{opacity:0,translateY:100}}
      animate={{opacity:100,translateY:0}}
      transition={{duration:.75}}
      className='flex flex-col justify-center items-center w-full'>
        <form onSubmit={handleSubmit} className='w-7/12 p-4 bg-gray-100 rounded-lg shadow'>
          <h1 className='font-bold text-2xl'>Calculator</h1>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
          />
          <label htmlFor='weight'>Weight (kg):</label>
          <input
            type='number'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
          />
          <div className='flex items-center'>
            <label htmlFor='feet'>Height (feet):</label>
            <input
              type='number'
              id='feet'
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              className='border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4 mr-2'
            />
            <label htmlFor='inches'>Height (inches):</label>
            <input
              type='number'
              id='inches'
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              className='border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
            />
          </div>
          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            id='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
          />
          <label htmlFor='gender'>Gender:</label>
          <select
            id='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <label htmlFor='activityLevel'>Activity Level:</label>
          <select
            id='activityLevel'
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className='w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-2 mb-4'
          >
            <option value='sedentary'>Sedentary</option>
            <option value='lightly-active'>Lightly Active</option>
            <option value='moderately-active'>Moderately Active</option>
            <option value='very-active'>Very Active</option>
            <option value='extra-active'>Extra Active</option>
          </select>
          <button
            type='submit'
            className='bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-slate-700 transition duration-200'
          >
            Calculate
          </button>
        </form>
        {calories > 0 && protein > 0 && (
          <div className='mt-8'>
            <h2 className='text-xl font-semibold'>Results</h2>
            <p>Calories Needed: {calories.toFixed(2)}</p>
            <p>Protein Intake: {protein.toFixed(2)} grams</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Calc;
