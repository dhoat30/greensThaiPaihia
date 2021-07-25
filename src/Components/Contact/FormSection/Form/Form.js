import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../UI/Button/Button'
import Input from '../../../UI/Input/Input'
import axios from 'axios'
import Loader from '../../../UI/Loader/Loader'

function Form() {


    // states
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    const [enteredPhone, setEnteredPhone] = useState('')
    const [enteredPhoneTouched, setEnteredPhoneTouched] = useState(false)

    const [enteredMessage, setEnteredMessage] = useState('')

    const [formSubmitted, setFormSubmitted] = useState(false)

    const [showLoader, setShowLoader] = useState(false)

    // validate 
    let enteredNameIsValid = enteredName.trim().length > 2
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    let enteredEmailIsValid = pattern.test(enteredEmail)
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

    let enteredPhoneIsValid = enteredPhone.trim().length > 7
    const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneTouched

    //  change handlers
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value)
    }

    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value)
    }

    //  blur handlers
    const nameBlurHandler = (event) => {
        setEnteredNameTouched(true)
    }

    const emailBlurHandler = (event) => {
        setEnteredEmailTouched(true)
    }

    const phoneBlurHandler = (event) => {
        setEnteredPhoneTouched(true)
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault()
        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)
        setEnteredPhoneTouched(true)

        if (!enteredName || !enteredEmail || !enteredPhone) {
            return
        }
        setShowLoader(true)

        axios.post(`${process.env.WORDPRESS_URL}/booking-form`,
            {
                name: enteredName,
                email: enteredEmail,
                phone: enteredPhone,
                message: enteredMessage,
            }).then(res => {
                setFormSubmitted(true)
                console.log('form submitted')
                setEnteredName("")
                setEnteredEmail("")
                setEnteredPhone("")
                setEnteredMessage("")
                setEnteredNameTouched(false)
                setEnteredEmailTouched(false)
                setEnteredPhoneTouched(false)
                setShowLoader(false)

            }).catch(err => {
                console.log(err)
                setShowLoader(false)

            })

    }

    return (
        <React.Fragment>
            <FormStyle onSubmit={formSubmissionHandler}>
                <InputContainer>
                    <Input
                        type="name"
                        placeholder="Name"
                        id="name"
                        name="name"
                        blurChange={nameBlurHandler}
                        inputChange={nameChangeHandler}
                        isInvalid={nameInputIsInvalid}
                        value={enteredName}
                        width="100"
                    />


                    <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        blurChange={emailBlurHandler}
                        inputChange={emailChangeHandler}
                        isInvalid={emailInputIsInvalid}
                        value={enteredEmail}
                        width="100"
                    />

                    <Input
                        type="phone"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        blurChange={phoneBlurHandler}
                        inputChange={phoneChangeHandler}
                        isInvalid={phoneInputIsInvalid}
                        value={enteredPhone}
                        width="100"
                    />


                    <Input
                        type="textarea"
                        placeholder="Type your message here"
                        id="message"
                        name="message"
                        inputChange={messageChangeHandler}
                        value={enteredMessage}
                        width="100"
                    />


                </InputContainer>
                {showLoader ? <Loader alignCenter={true} /> : <ButtonStyle>Send</ButtonStyle>}


            </FormStyle>
            {formSubmitted ? <p className="success center-align">Message Sent. We will get back to you soon.</p> : null}
            {/* invalid input text */}
            {emailInputIsInvalid ? <p className="errors center-align">Entered email is not valid</p> : null}
            {nameInputIsInvalid ? <p className="errors center-align">Entered name is not valid</p> : null}
            {phoneInputIsInvalid ? <p className="errors center-align">Entered phone number is not valid</p> : null}
        </React.Fragment>
    )
}
const FormStyle = styled.form`
max-width: 1000px;
margin: 0 auto;
`
const ButtonStyle = styled(Button)`
display: block;
margin: 20px auto;
`

const InputContainer = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`
export default Form
