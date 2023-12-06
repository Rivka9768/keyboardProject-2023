import React from 'react'
const TextErea = ({ input }) => {

    return (
        <>
            <div>
                {input.map((element, index) => {
                    return <span style={element.style} key={index}>{element.letter}</span>
                })}
            </div>
        </>
    );
}
export default TextErea;