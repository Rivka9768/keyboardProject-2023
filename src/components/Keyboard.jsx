
import React, { useState } from 'react'
import Styles from './KeyboardStyle.module.css'

const Keyboard = ({ keyBoards, typeKeyBoard, setText, text, textStyles, setLastAction }) => {

    const addHandler = (key) => {
        const prevText = text;
        setLastAction(prevLast => [...prevLast, { action: "setText", value: prevText }])
        setText((prevText) => (
            [...prevText, { letter: key, style: textStyles }]
        ));
    }

    return (
        <>
            <div >
                {keyBoards[typeKeyBoard].map((element, index) => {
                    return <span className={(element === ' ') ? Styles.keyboard__key_wide : Styles.keyboard__key} onClick={() => addHandler(element)} key={index} name={element} value={element}>{(element === ' ') ? "space" : element}</span>
                })}
            </div>
        </>


    );
}
export default Keyboard;