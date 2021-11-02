import React, {useState} from 'react'
import { TextField, Button } from '@mui/material'

const ProblemGenInput = ({handleButtonClick}) => {

    const [cityCount, setCityCount] = useState(10)
    
    const handleChange = (e) => {
        setCityCount(e.target.value)
    }

    return (
        <div>
            <TextField type='number' onChange={handleChange} value={cityCount} />
            <Button variant='contained' onClick={()=>handleButtonClick(cityCount)}>Generate problem</Button>
        </div>
    )
}

export default ProblemGenInput
