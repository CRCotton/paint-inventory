import React from "react";
import Paint from "./Paint";



const PaintCardList = (props) =>{
    
    //const status = props.status;
    const paints = props.paints;

    const renderPaintCardList = paints.map((paint) => {
        return (
            /* need to provide options to show based on availability status */
                <Paint paint={paint}></Paint>
        )
    })

    return (
        <>
        {renderPaintCardList}
        </>)
        
};

export default PaintCardList;