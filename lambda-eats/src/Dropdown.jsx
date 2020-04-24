import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const Dropdown = ({formState, inputChange}) => {
    //console.log(formState)
    return (
        <>
            <FormControl style={{width: 200}} >
            <InputLabel htmlFor="dropDownBox">Size</InputLabel>
            <Select name="dropdown" id="dropDownBox" onChange={inputChange} value={formState.dropdown}> 
               <MenuItem value="Personal">Personal</MenuItem>
               <MenuItem  value="Small">Small</MenuItem>
               <MenuItem  value="Medium">Medium</MenuItem>
               <MenuItem  value="Large">Large</MenuItem>
               <MenuItem  value="Extra Large">Extra Large</MenuItem>
                </Select> 
                </FormControl>
        </>
    )
}

export default Dropdown



// const Dropdown = ({formState, inputChange}) => {
//     console.log(formState.dropdown)
//     return (
//         <>
//          <select name="dropdown" onChange={inputChange} value={formState.dropdown}>
//              <option value='goodbye'>goodbye</option>
//              <option value="hello">hello</option>
//          </select>
//         </>
//     )
// }

// export default Dropdown