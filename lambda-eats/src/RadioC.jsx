import React from 'react'
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components'

const RadioC = ({radioState, onRadioChange}) => {
    
    const StyledRadio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 2rem`
  
    const StyledTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    padding-top: 1rem`

    return (
    <>
    <StyledTitle>Type of pizza?</StyledTitle>  
        <StyledRadio>
                
      <label htmlFor="cheeseBox">
      Classic Cheese
      </label>
      <Radio
        type="radio"
        name="cheese"
        id="cheeseBox"
        value={radioState.radio}
        onChange={onRadioChange}
      />
      <label htmlFor="whiteBox">White Alfredo</label>
      <Radio
        type="radio"
        name="white"
        id="whiteBox"
        value={radioState.radio}
        onChange={onRadioChange}
      />


        </StyledRadio>
        </>
    )
}

export default RadioC

//font-family: 'Raleway', sans-serif;
