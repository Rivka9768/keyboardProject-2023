
import React from 'react'
import Styles from './Keyboard.module.css'
import { MdTextIncrease , MdTextDecrease } from "react-icons/md";
import { ImFont } from "react-icons/im";
import { IoColorPaletteSharp } from "react-icons/io5";
const StyleText = (props) => {
    const undoStyle = () => {
        const prevStyle = props.textStyles;
        props.setLastAction(prevLast => [...prevLast, { action: "setStyle", value: prevStyle }])
    }
    const increase = () => {
        undoStyle();
        props.setfontSize(prevFontSize => prevFontSize + 20)
        props.setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontSize: `${props.fontSize.toString()}${'px'}`
        }));
    }
    const decrease = () => {
        undoStyle();
        props.setfontSize(prevFontSize => prevFontSize - 20)
        props.setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontSize: `${props.fontSize.toString()}${'px'}`
        }));
    }
    const colors = (value) => {
        undoStyle();
        props.setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            color: value
        }));

    };
    const fonts = (value) => {
        undoStyle();
        props.setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontFamily: value
        }));

    };
    return (<>
        <span onClick={increase} className={Styles.keyboard__key_wide}><MdTextIncrease /></span>
        <span onClick={decrease} className={Styles.keyboard__key_wide}><MdTextDecrease /></span>
        <span className={Styles.keyboard__key_wide} style={{ display: "inline" }}>
            <label htmlFor="colorsSelect"><IoColorPaletteSharp /></label>
            <select name="colors" id="colorsSelect" onChange={(e) => colors(e.target.value)}>
                <option value="red" >red</option>
                <option value="orange">orange</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="purple">purple</option>
            </select>
        </span>
        <span  className={Styles.keyboard__key_wide}style={{ display: "inline" }}>
        <label htmlFor='fontsSelect'><ImFont /> </label>
            <select name="fonts" id="fontsSelect" onChange={(e) => fonts(e.target.value)}>
                <option >text font</option>
                <option value="Courier New" >Courier New</option>
                <option value="Garamond">Garamond</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Arial ">Arial </option>
            </select>
        </span>

    </>
    );
}
export default StyleText