import React from "react";
import { useParams } from "react-router";

const Color = (props) => {
    const {word,colorA,colorB} = useParams();

    const style = {backgroundColor: colorA, color: colorB, margin: '10px', padding: '70px', fontSize: "55px", fontWeight: "bold"}

    return(
        <div>
            <h1 style={style}>
                The word/ phrase is: {word}
            </h1>
        </div>
    )
} 

export default Color;