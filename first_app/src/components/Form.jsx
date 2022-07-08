import React, {useState} from 'react'

const Form = (props) => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");

    //STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        if(event.target.value.length > 0){
            // First Name must be at least 2 characters
            if(event.target.value.length < 2) {
                setFirstNameError("First Name must be at least 2 characters")
            }
            else {
                setFirstNameError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length > 0){
            // LAST NAME MUST BE LONGER THAN 2 CHARS
            if(event.target.value.length < 2) {
                setLastNameError("Last Name must be at least 2 characters")
            }
            else {
                setLastNameError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setLastNameError("")
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
        if(event.target.value.length > 0){
            //Email must be at least 2 characters
            if(event.target.value.length < 5) {
                setEmailError("Email must be at least 2 characters")
            }
            else {
                setEmailError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setEmailError("")
        }
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length > 0){
            // Password must be at least 8 characters, Passwords must match
            if(event.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters")
            }
            else {
                setPasswordError("")
            }
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setPasswordError("")
        }
    }
    const confirmHandler = (event) => {
        setConfirm(event.target.value)
        // Passwords must match
        if(event.target.value !== password) {
            setConfirmError("Passwords must match")
        }
        // VALIDATION PASS, CLEAR ERROR MESSAGE
        else {
            setConfirmError("")
        }
    }


    return (
        <div className="container">
        
                <p className='child'>First Name:
                    <input onChange={firstNameHandler} type="text" name="firstName" id="" />
                    {
                    firstNameError ? <p style={{color:'orange'}}>{firstNameError}</p> : null
                    }
                </p>
                <p className='child'>Last Name:
                    <input onChange={lastNameHandler} type="text" name="lastName" id=""/>
                    {
                    lastNameError ? <p style={{color:'orange'}}>{lastNameError}</p> : null
                    }
                </p>
                <p className='child'>Email:
                    <input onChange={emailHandler} type="text" name="email" id=""/>
                    {
                    emailError ? <p style={{color:'orange'}}>{emailError}</p> : null
                    }
                </p>
                <p className='child'>Password:
                    <input onChange={passwordHandler} type="password" name="password" id=""/>
                    {
                    passwordError ? <p style={{color:'orange'}}>{passwordError}</p> : null
                    }
                </p>
                <p className='child'>Confirm Password:
                    <input onChange={confirmHandler} type="password" name="confirm" id=""/>
                    {
                    confirmError ? <p style={{color:'red'}}>{confirmError}</p> : null
                    }
                </p>
        </div>
    )
}

export default Form