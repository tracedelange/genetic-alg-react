import React, {useState, useEffect} from 'react'
import { baseURL } from './globals'
import {generateProblem} from './requests'
import ScatterChartComponent from './components/ScatterChartComponent'
import ProblemGenInput from './components/ProblemGenInput'



const App = () => {

  const [problem, setProblem] = useState({
    coordinates : [],
    x: [],
    y: []
  })

  



  const handleFetchCities = (cityCount=10) => {

    generateProblem(cityCount)
    .then(data => {
      if (data) {
        console.log(data)
        setProblem({
          coordinates: data[0],
          x: data[1],
          y: data[2]
        })
      } else {
        console.log('No data')
      }
    })

  }

  useEffect(()=>{
    handleFetchCities()
  },[])


  return (
    <div>
      <ProblemGenInput  handleButtonClick={handleFetchCities}/>
      <ScatterChartComponent data={problem}/>
    </div>
  )
}

export default App

