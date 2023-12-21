import React from 'react'
import Styles from './KeyboardStyle.module.css'
import { MdOutlineEmojiEmotions, MdEmojiSymbols } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { BsFillCapslockFill } from "react-icons/bs";
const KeyboardLanguage = ({ typeLanguage, setTypeLanguage, setLastAction }) => {

    const undoType = () => {
        const prevType = typeLanguage;
        setLastAction(prevLast => [...prevLast, { action: "setLanguage", value: prevType }])
    }
    const capsLock = () => {
        undoType();
        (typeLanguage === 3) ? setTypeLanguage(0) : setTypeLanguage(3);
    }

    const hebrew = () => {
        undoType()
        setTypeLanguage(1);
    }

    const english = () => {
        undoType()
        setTypeLanguage(0);
    }

    const emoji = () => {
        undoType()
        setTypeLanguage(2)
    }
    const specialCharacters = () => {
        undoType()
        setTypeLanguage(4)
    }
    
    return (
        <>
            {typeLanguage != 3 && <span onClick={capsLock} className={Styles.keyboard__key_wide}><BsFillCapslockFill /></span>}
            {typeLanguage != 1 && <span onClick={hebrew} className={Styles.keyboard__key_wide}>עברית</span>}
            {typeLanguage != 0 && <span onClick={english} className={Styles.keyboard__key_wide}><RiEnglishInput /></span>}
            {typeLanguage != 2 && <span onClick={emoji} className={Styles.keyboard__key_wide}><MdOutlineEmojiEmotions /></span>}
            {typeLanguage != 4 && <span onClick={specialCharacters} className={Styles.keyboard__key_wide}><MdEmojiSymbols /></span>}
        </>
    );
}
export default KeyboardLanguage;