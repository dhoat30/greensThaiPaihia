import React from 'react'
import styled from 'styled-components'
function Input(props) {
    // const inputClasses = props.isInvalid ? `invalid` : `card-border-radius`
    return (
        <React.Fragment >
            {props.type === 'textarea' ?
                <TextAreaStyle
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.inputChange}
                > </TextAreaStyle>
                :
                <InputStyle
                    min={props.min}
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    name={props.name}
                    onChange={props.inputChange}
                    onBlur={props.blurChange}
                    value={props.value}
                    isInvalid={props.isInvalid}
                    width={props.width}
                />
            }

        </React.Fragment>
    )
}
const InputStyle = styled.input`
display: inline-block;
background: none;
max-width: 250px;
    width: ${props => props.width === "50" ? "48%" : "100%"};
    padding: 5px 5px 5px 10px;
    color: var(--green);
    height: 40px;
    border: none;
    border-bottom: ${props => props.isInvalid ? "2px solid red" : "1px solid var(--green)"};
    outline: none;
    margin: 30px 20px 0 20px;

    &::placeholder{
        color: var(--green);
    }

@media (max-width: 500px ){
        width:95% !important;
        margin: 20px  auto 0 auto;
    }
`
const TextAreaStyle = styled.textarea`
display: inline-block;
background: none;
    width: ${props => props.width === "50" ? "48%" : "100%"};
    padding: 5px 5px 5px 10px;
    color: var(--green);
    height: 150px;
    border: 1px solid var(--green);
    outline: none;
    margin: 30px 20px 0 20px;
    border: ${props => props.isInvalid ? "2px solid red" : null};
    &::placeholder{
        color: var(--green);
    }
 
`



export default Input
