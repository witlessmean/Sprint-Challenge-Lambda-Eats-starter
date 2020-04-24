import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'

const StyledCheckbox = styled.div`
font-family: 'Raleway', sans-serif;`

const CheckboxC = ({ formState, inputChange }) => {
  console.log();
  return (
    <StyledCheckbox>
      <label htmlFor="pepperoniBox">Pepperoni </label>
      <Checkbox
        type="checkbox"
        name="pepperoni"
        id="pepperoniBox"
        value={formState.pepperoni}
        onChange={inputChange}
      />
      <label htmlFor="mushroomsBox">Mushrooms </label>
      <Checkbox
        type="checkbox"
        name="mushrooms"
        id="mushroomsBox"
        value={formState.mushrooms}
        onChange={inputChange}
      />
      <label htmlFor="spinachBox">Spinach </label>
      <Checkbox
        type="checkbox"
        name="spinach"
        id="spinachBox"
        value={formState.spinach}
        onChange={inputChange}
      />
      <label htmlFor="broccoliBox">Broccoli </label>
      <Checkbox
        type="checkbox"
        name="broccoli"
        id="broccoliBox"
        value={formState.broccoli}
        onChange={inputChange}
      />
      <label htmlFor="baconBox">Bacon </label>
      <Checkbox
        type="checkbox"
        name="bacon"
        id="baconBox"
        value={formState.bacon}
        onChange={inputChange}
      />
    </StyledCheckbox>
  );
};

export default CheckboxC;
