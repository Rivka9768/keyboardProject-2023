import React from 'react'
import Styles from './Keyboard.module.css'
import { MdOutlineEmojiEmotions,MdEmojiSymbols } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { BsFillCapslockFill } from "react-icons/bs";
const KeyboardLanguage=(props)=>{
const undoType=()=>{
    const prevType=props.typeLanguage;
    props.setLastAction(prevLast=>[...prevLast,{action: "setLanguage" ,value: prevType}])
}
    const capsLock=()=>{
        undoType();
        (props.typeLanguage === 3) ? props.typeSetLanguage(0) : props.typeSetLanguage(3) ;
    }

    const hebrew=()=>{
        undoType()
        props.typeSetLanguage(1) ;
    }

    const english=()=>{
        undoType()
        props.typeSetLanguage(0) ;
    }

    const emoji=()=>{
        undoType()
        props.typeSetLanguage(2)
    }
    const specialCharacters=()=>{
        undoType()
        props.typeSetLanguage(4)
    }
    return(
        <>
            {props.typeLanguage != 3 &&<span onClick={capsLock} className={Styles.keyboard__key_wide}><BsFillCapslockFill /></span>}
            {props.typeLanguage != 1 &&<span onClick={ hebrew} className={Styles.keyboard__key_wide}>עברית</span>}
            {props.typeLanguage != 0 && <span onClick={english} className={Styles.keyboard__key_wide}><RiEnglishInput /></span>}
            {props.typeLanguage != 2 && <span onClick={emoji} className={Styles.keyboard__key_wide}><MdOutlineEmojiEmotions /></span>}
            {props.typeLanguage != 4 && <span onClick={specialCharacters} className={Styles.keyboard__key_wide}><MdEmojiSymbols /></span>}
        </>
    );
}
export default KeyboardLanguage;