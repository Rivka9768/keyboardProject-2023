import React from 'react'
import Styles from './KeyboardStyle.module.css'
import { MdTextIncrease, MdTextDecrease } from "react-icons/md";
import { ImFont } from "react-icons/im";
import { IoColorPaletteSharp } from "react-icons/io5";

const StyleText = ({ textStyles, setTextStyles, setLastAction }) => {
    const undoStyle = () => {
        const prevStyle = textStyles;
        setLastAction(prevLast => [...prevLast, { action: "setStyle", value: prevStyle }])
    }
    const increase = () => {
        undoStyle();
        setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontSize: `${Number(prevTextStyles.fontSize.slice(0, -2)) + 20}${'px'}`
        }));
    }
    const decrease = () => {
        undoStyle();
        setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontSize: ((Number(prevTextStyles.fontSize.slice(0, -2))) > 10) ? `${Number(prevTextStyles.fontSize.slice(0, -2)) - 20}${'px'}` : prevTextStyles.fontSize
        }));
    }
    const colors = (value) => {
        undoStyle();
        setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            color: value
        }));

    };
    const fonts = (value) => {
        undoStyle();
        setTextStyles((prevTextStyles) => ({
            ...prevTextStyles,
            fontFamily: value
        }));

    };
    return (<>
        <span onClick={increase} className={Styles.keyboard__key_wide}><MdTextIncrease /></span>
        <span onClick={decrease} className={Styles.keyboard__key_wide}><MdTextDecrease /></span>
        <span className={Styles.keyboard__key_wide} style={{ display: "inline" }}>
            <label htmlFor="colorsSelect"><IoColorPaletteSharp /></label>
            <select style={{ color: textStyles.color }} value={textStyles.color} name="colors" id="colorsSelect" onChange={(e) => colors(e.target.value)}>
                <option style={{ color: 'red' }} value="red" >red</option>
                <option style={{ color: 'black' }} value="black" >black</option>
                <option style={{ color: 'orange' }} value="orange">orange</option>
                <option style={{ color: 'green' }} value="green">green</option>
                <option style={{ color: 'blue' }} value="blue">blue</option>
                <option style={{ color: 'yellow' }} value="yellow">yellow</option>
                <option style={{ color: 'purple' }} value="purple">purple</option>
            </select>
        </span>
        <span className={Styles.keyboard__key_wide} style={{ display: "inline" }}>
            <label htmlFor='fontsSelect'><ImFont /> </label>
            <select style={{ fontFamily: textStyles.fontFamily }} value={textStyles.fontFamily} name="fonts" id="fontsSelect" onChange={(e) => fonts(e.target.value)}>
                <option style={{ fontFamily: 'Geneva' }} value="Geneva" >Geneva</option>
                <option style={{ fontFamily: 'Garamond' }} value="Garamond">Garamond</option>
                <option style={{ fontFamily: 'Georgia' }} value="Georgia">Georgia</option>
                <option style={{ fontFamily: 'fantasy' }} value="fantasy">fantasy</option>
                <option style={{ fontFamily: 'cursive' }} value="cursive">cursive</option>
                <option style={{ fontFamily: 'Arial' }} value="Arial ">Arial </option>
            </select>
        </span>

    </>
    );
}
export default StyleText