import React, { useState } from 'react'
import TextErea from './TextArea'
import Keyboard from './Keyboard'
import SpecialKeys from './SpecialKeys'
import KeyboardLanguage from './KeyboardLanguage'
import StyleText from './StyleText'
import Styles from './KeyboardStyle.module.css'

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

    //type of keyboard
    const [type, setType] = useState(0);

    //text shown 
    const [text, setText] = useState([{ letter: "", style: textStyles }])

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
            <TextErea text={text} />
            <div className={Styles.keyboard}>
                <SpecialKeys className={Styles.keyboard__keys} setText={setText} textStyles={textStyles}  setLastAction={setLastAction} text={text} undo={undo} />
                <Keyboard keyboards={keyboards} typeKeyBoard={type} setText={setText} text={text} textStyles={textStyles}  setLastAction={setLastAction} />
                <KeyboardLanguage typeLanguage={type}  setTypeLanguage={setType} setLastAction={setLastAction} />
                <StyleText setLastAction={setLastAction} setTextStyles={setTextStyles}  textStyles={textStyles} />
            </div>
        </>
    );
}
export default TextEditor;