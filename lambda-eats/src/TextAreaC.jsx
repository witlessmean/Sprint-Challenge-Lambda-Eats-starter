import React from 'react'
import TextField from '@material-ui/core/TextField';



const TextAreaC = ({formState, inputChange}) => {
    console.log(formState)
    return (
        <div>
              <TextField 
               style={{marginTop: '2rem'}} id="outlined-basic" label={"Special instructions"} variant="outlined" name="textField" onChange={inputChange} value={formState.textField}/>

        </div>
    )
}

export default TextAreaC
