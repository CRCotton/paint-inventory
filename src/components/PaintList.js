import React from "react";
import Paint from "./Paint";



const PaintCardList = ({paints, onAdd, onSubtract}) =>{
    



    return (
        paints.map((paint) => 
            <div className="ui card" key={paint.key}>
                <Paint paint={paint} onAdd={onAdd} onSubtract={onSubtract}/>
            </div>
        )
    )
        
};

export default PaintCardList;