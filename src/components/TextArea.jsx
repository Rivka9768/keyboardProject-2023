import React from 'react'
const TextErea = ({ text }) => {

    return (
        <>
            <div>
                {text.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextErea;