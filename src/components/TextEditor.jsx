import React, { useState } from 'react'
import TextErea from './TextArea'
import Keyboard from './Keyboard'
import SpecialKeys from './SpecialKeys'
import KeyboardLanguage from './KeyboardLanguage'
import StyleText from './StyleText'
import Styles from './Keyboard.module.css'

const TextEditor = () => {
    const englishAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    const upperCaseAlphabet = englishAlphabet.map(letter => letter.toUpperCase())
    const hebrewAlphabet = [...'יטחזוהדגבאפעסןנםמלךכתשרקץצף'];
    const emojiAlphabet = [...'😀😁😂🤣😃😄😅😉😊😋😎😍😘🥰😙😚🙂🤗🤩🤔😶🙄😏😣😥😮🤐😴'];
    const numbersSpecialCharachters = [...'0123456789`!@#$%^&*()_-=+/., "?<>{}[]' + "'"];
    const keyboards = [englishAlphabet, hebrewAlphabet, emojiAlphabet, upperCaseAlphabet, numbersSpecialCharachters]

    //styles
    const [textStyles, setTextStyles] = useState({
        color: 'black',
        fontFamily: 'Georgia',
        fontSize: '50px'
    });
    const [fontSize, setFontSize] = useState(50);



    //type of keyboard
    const [type, setType] = useState(0);

    //text shown 
    const [text, setText] = useState([{ letter: "", style: textStyles }])
    //adding a letter to text
    const [lastAction, setLastAction] = useState([])
    const undo = () => {
        const last = lastAction.pop();
        if (last) {
            switch (last.action) {
                case "setText": setText(last.value); break
                case "setStyle": setTextStyles(last.value); break
                case "setLanguage": setType(last.value); break
            }
        }

    }
    return (
        <>
            <TextErea input={text} />
            <div className={Styles.keyboard}>
                <SpecialKeys className={Styles.keyboard__keys} setText={setText} textStyles={textStyles} settextStyles={setTextStyles} setLastAction={setLastAction} text={text} undo={undo} />
                <Keyboard typeOfKeyBoard={keyboards} setText={setText} typeKeyBoard={type} textStyles={textStyles} text={text} setLastAction={setLastAction} />
                <KeyboardLanguage typeLanguage={type} typeSetLanguage={setType} setLastAction={setLastAction} />
                <StyleText setLastAction={setLastAction} setTextStyles={setTextStyles} fontSize={fontSize} setfontSize={setFontSize} textStyles={textStyles} />
            </div>
        </>
    );
}
export default TextEditor;