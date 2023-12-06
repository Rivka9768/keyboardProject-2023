import React from 'react'
const TextErea = (props) => {

    return (
        <>
            <div>
                {props.input.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextErea;