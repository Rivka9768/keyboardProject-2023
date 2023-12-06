
import React, { useState } from 'react'
import Styles from './Keyboard.module.css'

const Keyboard = (props) => {

    const addHandler = (key) => {
        const prevText=props.text;
        props.setLastAction(prevLast=>[...prevLast,{action: "setText" ,value: prevText}])
        props.setText((prevText) => (
            [...prevText, { letter: key, style: props.textStyles }]
        ));
    }

    return (
        <>
            <div >
                {props.typeOfKeyBoard[props.typeKeyBoard].map((element, index) => {
                    return <span className={(element===' ')?Styles.keyboard__key_wide : Styles.keyboard__key} onClick={() => addHandler(element)} key={index} name={element} value={element}>{(element===' ')?"space":element}</span>
                })}
            </div>
        </>


    );
}
export default Keyboard;