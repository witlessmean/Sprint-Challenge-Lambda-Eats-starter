import React from 'react'
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components';
import CheckboxC from './CheckboxC';
import RadioC from './RadioC';
import Dropdown from './Dropdown';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';
import PizzaForm from './images/PizzaForm.jpg';
import TextAreaC from './TextAreaC';

const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
margin-top: 10vw;`



const Form = () => {
    

    const formSchema = yup.object().shape({
        name: yup.string().required("Name is a required field.").min(2, '4 chracter'), 
        dropdown: yup.string().required("required"),
        pepperoni: yup.boolean(),
        mushrooms: yup.boolean(),
        spinach: yup.boolean(),
        broccoli: yup.boolean(),
        bacon: yup.boolean(),
        cheese: yup.boolean(),
        white: yup.boolean(),
        textField: yup.string()
})

  


    const [formState, setFormState] = useState({
    name: "",
    pepperoni: false,
    mushrooms: false,
    spinach: false,
    broccoli : false,
    bacon : false,
    dropdown: "",   
    textField: "",  
});



  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  const [validationErrors, setValidationErrors] = useState({
    name: "",
    radio: "",
    checkbox: "",
    dropdown: "",
    textField: "",
});

const [postRequestData, setPostRequestData] = useState([])

  useEffect(() => {
    

    formSchema.isValid(formState).then(valid => {
      console.log(valid)
        setSubmitButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

const inputChange = (event) => {
    event.persist();
    const validateChangeState = {
        ...formState,
        [event.target.name]:
         event.target.name === "checkbox" ? event.target.checked : event.target.value
    };
       validateChange(event);
       setFormState(validateChangeState);
};

const [radioState, setRadioState] = useState({ 
   cheese: false,
   white: false,
})

const onRadioChange = (event) => {
    event.persist();
    const validateChangeState = {
        ...radioState,
        [event.target.name]:
         event.target.name === "radio" ? event.target.checked : event.target.value
    };
       validateChange(event);
       setRadioState(validateChangeState);
};

const validateChange = (event) => {
    
    yup.reach(formSchema, event.target.name).validate(event.target.value)
    .then(valid => {
        setValidationErrors({
            ...validationErrors,
            [event.target.name]: ""
        });
    }).catch((error) => {
        console.log(error)
        setValidationErrors({
            ...validationErrors,
            [event.target.name]: error.message
        })
    })



}

  const submitPostRequest =  (event) => {
    event.preventDefault();
    console.log('submitted');
    axios.post("https://reqres.in/api/users", formState).then(response => {
        setPostRequestData(response.data);
        console.log("success", response)
    }).catch((submissionError) => {
        console.log(submissionError.response)
    })
  
};

  return (
    <>
    <NavLink to="/"> <HomeIcon style={{fontSize: 80, color: "red"}} /> </NavLink>
    <StyledForm onSubmit={submitPostRequest}>
      
        <label htmlFor="nameBox"></label>
        <Input color="secondary" startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          } type="text" name="name" id="nameBox" placeholder="Name" value={formState.name} onChange={inputChange} />
            {validationErrors.name.length > 0 ? <p> {validationErrors.name}</p> : null}
            <RadioC radioState={radioState} onRadioChange={onRadioChange} />
            {validationErrors.name.length > 0 ? <p> {validationErrors.radio}</p> : null}
            <CheckboxC formState={formState} inputChange={inputChange}  />
            {validationErrors.name.length > 0 ? <p> {validationErrors.checkbox}</p> : null}
            <Dropdown formState={formState} inputChange={inputChange} />
            {validationErrors.name.length > 0 ? <p> {validationErrors.dropdown}</p> : null}
            <TextAreaC formState={formState} inputChange={inputChange} />
  <pre>{JSON.stringify(postRequestData, null, 5)}</pre>
  <Button variant="contained" color="primary" type="submit" disabled={submitButtonDisabled}>
                    Submit
                </Button>
      {submitButtonDisabled === false ? <img style={{width: "50vw", paddingTop: 20, borderRadius: '8px'}} alt="pizza" src={PizzaForm} /> : ""}
    </StyledForm>
    </>
  );
};

export default Form;
              
