
import React from 'react'
import Styles from './Keyboard.module.css'
import { RiDeleteBack2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { RxLetterCaseLowercase,RxLetterCaseUppercase  } from "react-icons/rx";
import { FaUndoAlt } from "react-icons/fa";
const SpecialKeys = (props) => {

  const undoSpecial = () => {
    const prevText = props.text;
    props.setLastAction(prevLast => [...prevLast, { action: "setText", value: prevText }])
  }
  //removing last letter from text
  const deleteHandler = () => {
    undoSpecial()
    props.setText(prevText => prevText.slice(0, -1))
  }
  //change all text to upperCase
  const upperCaseFormat = () => {
    undoSpecial()
    props.setText(prevText => (prevText = prevText.map((element) => ({ ...element, letter: element.letter.toUpperCase() }))))
  }
  //change all text to lowerCase
  const lowerCaseFormat = () => {
    undoSpecial()
    props.setText(prevText => (prevText = prevText.map((element) => ({ ...element, letter: element.letter.toLowerCase() }))))
  }

  const clearAllText = () => {
    undoSpecial()
    props.setText([{ letter: "", style: props.textStyles }])
  }


  return (
    <>
      <span onClick={clearAllText} className={Styles.keyboard__key_wide}><MdDelete /></span>
      <span onClick={upperCaseFormat} className={Styles.keyboard__key_wide}><RxLetterCaseUppercase /></span>
      <span onClick={lowerCaseFormat}className={Styles.keyboard__key_wide}><RxLetterCaseLowercase /></span>
      <span onClick={deleteHandler}className={Styles.keyboard__key_wide}><RiDeleteBack2Fill /></span>
      <span onClick={props.undo}className={Styles.keyboard__key_wide}><FaUndoAlt /></span>
    </>
  );
}
export default SpecialKeys;