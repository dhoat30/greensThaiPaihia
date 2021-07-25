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

    const [enteredGuests, setEnteredGuests] = useState('')
    const [enteredGuestsTouched, setEnteredGuestsTouched] = useState(false)

    const [enteredDate, setEnteredDate] = useState('')
    const [enteredDateTouched, setEnteredDateTouched] = useState(false)

    const [enteredTime, setEnteredTime] = useState('')
    const [enteredTimeTouched, setEnteredTimeTouched] = useState(false)

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

    const guestsInputIsInvalid = !enteredGuests && enteredGuestsTouched

    const dateInputIsInvalid = !enteredDate && enteredDateTouched

    const timeInputIsInvalid = !enteredTime && enteredTimeTouched

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
    const guestsChangeHandler = (event) => {
        setEnteredGuests(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const timeChangeHandler = (event) => {
        setEnteredTime(event.target.value)
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
    const guestsBlurHandler = (event) => {
        setEnteredGuestsTouched(true)
    }
    const dateBlurHandler = (event) => {
        setEnteredDateTouched(true)
    }
    const timeBlurHandler = (event) => {
        setEnteredTimeTouched(true)
    }


    const formSubmissionHandler = (event) => {
        event.preventDefault()
        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)
        setEnteredPhoneTouched(true)
        setEnteredGuestsTouched(true)
        setEnteredDateTouched(true)
        setEnteredTimeTouched(true)



        if (!enteredName || !enteredEmail || !enteredPhone || !enteredGuests || !enteredDate || !enteredTime) {
            return
        }
        setShowLoader(true)
        axios.post(`${process.env.WORDPRESS_URL}/booking-form`,
            {
                name: enteredName,
                email: enteredEmail,
                phone: enteredPhone,
                guests: enteredGuests,
                date: enteredDate,
                time: enteredTime
            }).then(res => {
                setFormSubmitted(true)
                setEnteredName("")
                setEnteredEmail("")
                setEnteredPhone("")
                setEnteredGuests("")
                setEnteredDate("")
                setEnteredTime("")
                setEnteredNameTouched(false)
                setEnteredEmailTouched(false)
                setEnteredPhoneTouched(false)
                setEnteredGuestsTouched(false)
                setEnteredDateTouched(false)
                setEnteredTimeTouched(false)
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
                        width="50"
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
                        width="50"
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
                        width="50"
                    />

                    <Input
                        type="number"
                        placeholder="Number of Guests"
                        id="numberOfGuests"
                        name="numberOfGuests"
                        blurChange={guestsBlurHandler}
                        inputChange={guestsChangeHandler}
                        isInvalid={guestsInputIsInvalid}
                        value={enteredGuests}
                        width="50"
                        min="1"
                    />

                    <Input
                        type="date"
                        placeholder="Date"
                        id="date"
                        name="date"
                        blurChange={dateBlurHandler}
                        inputChange={dateChangeHandler}
                        isInvalid={dateInputIsInvalid}
                        value={enteredDate}
                        width="50"
                    />

                    <Input
                        type="time"
                        placeholder="Time"
                        id="time"
                        name="time"
                        blurChange={timeBlurHandler}
                        inputChange={timeChangeHandler}
                        isInvalid={timeInputIsInvalid}
                        value={enteredTime}
                        width="50"
                    />
                </InputContainer>

                {showLoader ? <Loader alignCenter={true} /> : <ButtonStyle color="white">Book Now</ButtonStyle>}

            </FormStyle>
            {formSubmitted ? <p className="success center-align">Thanks for booking a table. </p> : null}

            {/* invalid input text */}
            {emailInputIsInvalid ? <p className="errors center-align">Entered email is not valid</p> : null}
            {nameInputIsInvalid ? <p className="errors center-align">Entered name is not valid</p> : null}
            {guestsInputIsInvalid ? <p className="errors center-align">Entered number of guests is not valid</p> : null}
            {phoneInputIsInvalid ? <p className="errors center-align">Entered phone number is not valid</p> : null}
            {dateInputIsInvalid ? <p className="errors center-align">Entered date is not valid</p> : null}

            {timeInputIsInvalid ? <p className="errors center-align">Entered time is not valid</p> : null}
        </React.Fragment>
    )
}
const FormStyle = styled.form`
max-width: 1000px;
margin: 0 auto;

`
const ButtonStyle = styled(Button)`
display: block;
margin: 20px auto !important;
`
const InputContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
`

export default Form
